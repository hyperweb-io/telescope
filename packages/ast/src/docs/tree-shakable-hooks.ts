import { makeCommentBlock } from "../utils";
import * as t from '@babel/types';
import generate from '@babel/generator';
import { ServiceMutation } from "@cosmology/types";
import { camel } from "@cosmology/utils";
import { pascal } from "case";

/**
 * Generates documentation for tree-shakable hooks for a specific module
 * @param mutations Service mutations to document
 * @param framework The framework to generate hooks for ('react' or 'vue')
 */
export const documentTreeShakableHooks = (
    mutations: ServiceMutation[],
    framework: 'react' | 'vue' = 'react'
) => {
    if (mutations.length === 0) return null;
    
    const path = mutations[0].package.split('.');
    const hookPrefix = framework === 'react' ? 'useGet' : 'useGet';
    const importPath = framework === 'react' ? 'react' : 'vue';
    
    return t.variableDeclaration('const', [
        t.variableDeclarator(
            t.objectPattern(mutations.map(mutation => {
                const hookName = `${hookPrefix}${pascal(camel(mutation.methodName))}`;
                const obj = t.objectProperty(
                    t.identifier(hookName),
                    t.identifier(hookName),
                    false,
                    true
                );
                obj.leadingComments = mutation.comment ? [makeCommentBlock(mutation.comment)] : [];
                return obj;
            })),
            t.memberExpression(
                t.identifier(`@interchainjs/${importPath}`),
                t.identifier(`${path.join('/')}/query.rpc.${importPath}`)
            )
        )
    ]);
};

/**
 * Generates readme documentation for tree-shakable hooks
 * @param mutations Service mutations to document
 * @param framework The framework to generate hooks for ('react' or 'vue')
 */
export const documentTreeShakableHooksReadme = (
    mutations: ServiceMutation[],
    framework: 'react' | 'vue' = 'react'
) => {
    if (mutations.length === 0) return '';
    
    const ast = documentTreeShakableHooks(mutations, framework);
    if (!ast) return '';
    
    const code = generate(ast).code;
    const frameworkName = framework === 'react' ? 'React' : 'Vue';
    
    return `
#### \`${mutations[0].package}\` ${frameworkName} Hooks

\`\`\`js
${code}
\`\`\`

Example usage:

\`\`\`${framework === 'react' ? 'tsx' : 'vue'}
${getHookUsageExample(mutations[0], framework)}
\`\`\`
    `;
};

/**
 * Generates an example of using a hook for a specific mutation
 * @param mutation The service mutation to generate an example for
 * @param framework The framework to generate the example for ('react' or 'vue')
 */
const getHookUsageExample = (
    mutation: ServiceMutation,
    framework: 'react' | 'vue' = 'react'
) => {
    const hookPrefix = framework === 'react' ? 'useGet' : 'useGet';
    const hookName = `${hookPrefix}${pascal(camel(mutation.methodName))}`;
    
    if (framework === 'react') {
        return `import { ${hookName} } from '@interchainjs/react/${mutation.package.replace(/\./g, '/')}/query.rpc.react';

function ${pascal(camel(mutation.methodName))}Component() {
  const { data, isLoading, error } = ${hookName}({
    request: {
    },
    clientResolver: "https://rpc.example.com",
    options: {
      enabled: true,
    }
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>Data: {JSON.stringify(data)}</div>;
}`;
    } else {
        return `<script setup>
import { ref, computed } from 'vue';
import { ${hookName} } from '@interchainjs/vue/${mutation.package.replace(/\./g, '/')}/query.rpc.vue';

const request = computed(() => ({
}));

const {
  data,
  isLoading,
  error
} = ${hookName}({
  request,
  clientResolver: 'https://rpc.example.com',
  options: {
    enabled: true,
  }
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>Data: {{ JSON.stringify(data) }}</div>
</template>`;
    }
};
