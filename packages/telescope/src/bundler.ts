import * as t from "@babel/types";
import { resolve, join, dirname, relative, extname } from "path";
import { TelescopeParseContext } from "./build";
import { createFileBundle } from "./bundle";
import { TelescopeBuilder } from "./builder";
import { ProtoRef } from "@cosmology/types";
import { Bundle, BundlerFile } from "./types";
import { ExportedNames, writeAstToFile } from "./utils/files";
import { toPosixPath } from "@cosmology/utils";

export class Bundler {
  builder: TelescopeBuilder;

  contexts: TelescopeParseContext[] = [];
  bundle: Bundle;
  files: string[];

  readonly converters: BundlerFile[] = [];
  readonly lcdClients: BundlerFile[] = [];
  readonly rpcQueryClients: BundlerFile[] = [];
  readonly rpcMsgClients: BundlerFile[] = [];
  readonly registries: BundlerFile[] = [];
  readonly stateManagers: Record<string, BundlerFile[]> = {};

  constructor(builder: TelescopeBuilder, bundle: Bundle) {
    this.builder = builder;
    this.bundle = bundle;
    this.files = [bundle.bundleFile];
  }

  addStateManagers(type: string, files: BundlerFile[]) {
    const state = this.stateManagers[type];

    if (!state) {
      this.stateManagers[type] = [];
    }

    [].push.apply(this.stateManagers[type], files);

    this.builder.addStateManagers(type, files);
  }

  addLCDClients(files: BundlerFile[]) {
    [].push.apply(this.lcdClients, files);
    this.builder.addLCDClients(files);
  }

  addRPCQueryClients(files: BundlerFile[]) {
    [].push.apply(this.rpcQueryClients, files);
    this.builder.addRPCQueryClients(files);
  }

  addRPCMsgClients(files: BundlerFile[]) {
    [].push.apply(this.rpcMsgClients, files);
    this.builder.addRPCMsgClients(files);
  }

  addRegistries(files: BundlerFile[]) {
    [].push.apply(this.registries, files);
    this.builder.addRegistries(files);
  }

  addConverters(files: BundlerFile[]) {
    [].push.apply(this.converters, files);
    this.builder.addConverters(files);
  }

  getFreshContext(context: TelescopeParseContext) {
    return new TelescopeParseContext(
      context.ref,
      context.store,
      this.builder.options
    );
  }

  getLocalFilename(ref: ProtoRef, suffix?: string) {
    return suffix
      ? ref.filename.replace(/\.proto$/, `.${suffix}.ts`)
      : ref.filename.replace(/\.proto$/, `.ts`);
  }

  getFilename(localname: string) {
    return resolve(join(this.builder.outPath, localname));
  }

  writeAst(program: t.Statement[], filename: string) {
    writeAstToFile(
      this.builder.outPath,
      this.builder.options,
      program,
      filename
    );
  }

  // addToBundle adds the path into the namespaced bundle object
  addToBundle(context: TelescopeParseContext, localname: string) {
    createFileBundle(
      this.builder.options,
      context.ref.proto.package,
      localname,
      this.bundle.bundleFile,
      this.bundle.importPaths,
      this.bundle.bundleVariables
    );
  }

  addToBundleToPackage(packagename: string, localname: string) {
    createFileBundle(
      this.builder.options,
      packagename,
      localname,
      this.bundle.bundleFile,
      this.bundle.importPaths,
      this.bundle.bundleVariables
    );
  }

  addExportObjToBundle(
    pkg: string,
    localname: string,
    { names, typeNames }: ExportedNames,
    isHelperFunc?: boolean
  ) {
    if (!this.bundle.exportObjs) {
      this.bundle.exportObjs = [];
    }

    let rel = relative(dirname(this.bundle.bundleFile), localname);
    if (!rel.startsWith(".")) rel = `./${rel}`;
    rel = toPosixPath(rel);
    rel = rel.replace(extname(rel), "");

    const existing = this.bundle.exportObjs.find(
      (e) => e.localname === localname
    );

    if (existing) {
      // use Set to avoid duplicates
      existing.exportedIdentifiers = [
        ...new Set([...existing.exportedIdentifiers, ...names]),
      ];
      existing.typeIdentifiers = [
        ...new Set([...existing.typeIdentifiers, ...typeNames]),
      ];
      return;
    }

    this.bundle.exportObjs.push({
      localname,
      relativePath: rel,
      exportedIdentifiers: [...new Set(names)],
      typeIdentifiers: [...new Set(typeNames)],
      isHelperFunc,
      pkg,
    });
  }
}
