import {
  AST_NODE_TYPES,
  TSAnyKeyword,
  TSAsExpression,
  TSNullKeyword,
  TSStringKeyword,
  TSTypeReference,
} from '@typescript-eslint/types/dist/generated/ast-spec'

import type { StringableASTNodeFn } from './types'
import { node } from './utils/node'

/**
 * __TSAsExpression__
 *
 * @example
 * ```ts
 * const x = 'hello' as string
 *           ^^^^^^^^^^^^^^^^^
 * ```
 *
 * @returns {TSAsExpression}
 */
export const tsAsExpression: StringableASTNodeFn<TSAsExpression> = ({
  expression,
  typeAnnotation,
  ...other
}) => {
  return {
    ...other,
    expression,
    typeAnnotation,
    type: AST_NODE_TYPES.TSAsExpression,
    toString: () => `${node(expression)} as ${node(typeAnnotation)}`,
  }
}

/**
 * __TSStringKeyword__
 *
 * @example
 * ```ts
 * const x = 'hello' as string
 *                      ^^^^^^
 * ```
 *
 * @returns {TSStringKeyword}
 */
export const tsStringKeyword: StringableASTNodeFn<TSStringKeyword> = ({
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.TSStringKeyword,
    toString: () => `string`,
  }
}

/**
 * __TSAnyKeyword__
 *
 * @example
 * ```ts
 * const x = 'hello' as any
 *                      ^^^
 * ```
 *
 * @returns {TSAnyKeyword}
 */
export const tsAnyKeyword: StringableASTNodeFn<TSAnyKeyword> = ({
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.TSAnyKeyword,
    toString: () => `any`,
  }
}

/**
 * __TSTypeReference__
 *
 * @example
 * ```ts
 * type World = string
 *
 * const x = 'hello' as World
 *                     ^^^^^^^
 * ```
 *
 * @returns {TSTypeReference}
 */
export const tsTypeReference: StringableASTNodeFn<TSTypeReference> = ({
  typeName,
  typeParameters,
  ...other
}) => {
  return {
    ...other,
    typeName,
    typeParameters,
    type: AST_NODE_TYPES.TSTypeReference,
    toString: () =>
      `${node(typeName)}${typeParameters ? node(typeParameters) : ''}`,
  }
}

/**
 * __TSNullKeyword__
 *
 * @example
 * ```ts
 * const x = 'hello' as null
 *                      ^^^^
 * ```
 *
 * @returns {TSNullKeyword}
 */
export const tsNullKeyword: StringableASTNodeFn<TSNullKeyword> = ({
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.TSNullKeyword,
    toString: () => `null`,
  }
}
