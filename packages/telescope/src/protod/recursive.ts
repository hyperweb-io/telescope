import { getAllBufDeps } from "./bufbuild";
import { GitRepo } from "./git-repo";
import {
  CloneOptions,
  GitInfo,
  ProtoCopyOptions,
  CloneAllOptions,
} from "./types";
import { join, dirname, resolve, relative } from "path";
import { getCorrespondingGit, makeDir, parseProtoFile } from "./utils";
import fs from "fs";
import { crossGlob as glob } from '@cosmology/utils';

export async function cloneAll({
  repos,
  gitModulesDir,
  protoDirMapping,
  ssh,
}: CloneAllOptions) {
  let clonedResult: Record<string, GitInfo> = {};

  for (const { owner, repo, branch } of repos) {
    const cloned = await clone({
      owner,
      repo,
      branch,
      gitModulesDir,
      protoDirMapping,
      ssh,
      cloned: clonedResult,
    });

    for (const [key, value] of Object.entries(cloned)) {
      clonedResult[key] = value;
    }
  }

  return clonedResult;
}

export async function clone({
  owner,
  repo,
  branch,
  gitModulesDir: outDir,
  protoDirMapping,
  ssh,
  cloned,
}: CloneOptions) {
  let clonedResult: Record<string, GitInfo> = cloned ?? {};

  const gitRepo = new GitRepo(owner, repo, ssh);
  const gitBranch = branch ?? (await gitRepo.getMainBranchName());
  const resultKey = `${owner}/${repo}/${gitBranch}`;

  if (clonedResult[resultKey]) {
    console.log(`Skip cloning ${resultKey}`);
    return clonedResult;
  }

  const gitDir = gitRepo.clone(gitBranch, 1, outDir);
  const protoDir =
    protoDirMapping?.[`${owner}/${repo}/${gitBranch}`] ?? "proto";
  clonedResult[`${owner}/${repo}/${gitBranch}`] = {
    owner,
    repo,
    branch: gitBranch,
    protoDir,
    protoPath: resolve(`${outDir}/${owner}/${repo}/${gitBranch}/${protoDir}`),
  };
  const bufDeps = await getAllBufDeps(gitDir);
  await Promise.all(
    bufDeps.map(async (bufRepo) => {
      const gitRepos = getCorrespondingGit(bufRepo);
      await Promise.all(
        gitRepos.map(async (gitRepo) => {
          const gitRepoObj = new GitRepo(gitRepo.owner, gitRepo.repo, ssh);
          const branch = await gitRepoObj.getMainBranchName();
          const depsClonedResult = await clone({
            ...gitRepo,
            gitModulesDir: outDir,
            branch,
            protoDirMapping,
            ssh,
            cloned: clonedResult,
          });
          for (const [key, value] of Object.entries(depsClonedResult)) {
            clonedResult[key] = value;
          }
        })
      );
    })
  );

  return clonedResult;
}

function sanitizeProtoContent(content: string): string {
  // Remove any standalone semicolon lines that could be introduced upstream
  // e.g., a line that only contains ';' or whitespace + ';'
  const lines = content.split(/\r?\n/);
  const sanitized = lines.filter((line) => !/^\s*;\s*$/.test(line));
  return sanitized.join("\n");
}

export function extractProto({ sources, targets, outDir }: ProtoCopyOptions) {
  const extractProtoFiles: { sourceFile: string; target: string }[] =
    extractProtoFromDirs({
      targets,
      sources,
    });

  extractProtoFiles.map(({ sourceFile, target }) => {
    const targetFile = join(outDir, target);
    const deepTargetDir = dirname(targetFile);
    makeDir(deepTargetDir);
    const raw = fs.readFileSync(sourceFile, "utf8");
    const sanitized = sanitizeProtoContent(raw);
    fs.writeFileSync(targetFile, sanitized, "utf8");
    console.info(`Copied ${target} from ${sourceFile.replace(target, "")}`);
  });
}

function extractProtoFromDirs({
  targets,
  sources,
}: {
  targets: string[];
  sources: Record<string, GitInfo>;
}) {
  const extractProtoFiles: { sourceFile: string; target: string }[] = [];
  const existingFiles = new Set();

  if (!targets || targets.length === 0) {
    return [];
  }

  if (!sources || Object.keys(sources).length === 0) {
    return [];
  }

  for (const target of targets) {
    for (const source of Object.values(sources)) {
      const sourceProtoPath = resolve(source.protoPath);
      const files = glob(join(sourceProtoPath, target));

      extractProtoFiles.push(
        ...files
          .map((file) => {
            const copyTarget = relative(sourceProtoPath, file);
            const duplicate = existingFiles.has(copyTarget);
            existingFiles.add(copyTarget);
            if (!duplicate) {
              const resultFiles = [
                {
                  sourceFile: file,
                  target: copyTarget,
                },
              ];

              const newTargets = parseProtoFile(file);

              if (newTargets && newTargets.length > 0) {
                const deps = extractProtoFromDirs({
                  targets: newTargets,
                  sources,
                });

                const filteredDeps = deps?.filter((dep) => {
                  const depDuplicate = existingFiles.has(dep.target);
                  existingFiles.add(dep.target);
                  return !depDuplicate;
                });

                if (filteredDeps && filteredDeps.length > 0) {
                  resultFiles.push(...filteredDeps);
                }
              }

              return resultFiles;
            }
          })
          .flat()
          .filter(Boolean)
      );
    }
  }

  return extractProtoFiles;
}
