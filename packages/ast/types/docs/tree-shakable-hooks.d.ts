import * as t from '@babel/types';
import { ServiceMutation } from "@cosmology/types";
/**
 * Generates documentation for tree-shakable hooks for a specific module
 * @param mutations Service mutations to document
 * @param framework The framework to generate hooks for ('react' or 'vue')
 * @param serviceType The type of service ('query' or 'msg')
 */
export declare const documentTreeShakableHooks: (mutations: ServiceMutation[], framework?: 'react' | 'vue', serviceType?: 'query' | 'msg') => t.VariableDeclaration;
/**
 * Generates readme documentation for tree-shakable hooks
 * @param mutations Service mutations to document
 * @param framework The framework to generate hooks for ('react' or 'vue')
 * @param serviceType The type of service ('query' or 'msg')
 */
export declare const documentTreeShakableHooksReadme: (mutations: ServiceMutation[], framework?: 'react' | 'vue', serviceType?: 'query' | 'msg') => string;
