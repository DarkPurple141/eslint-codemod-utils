import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/types'

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
 * @returns {TSESTree.TSAsExpression}
 */
export const tsAsExpression: StringableASTNodeFn<TSESTree.TSAsExpression> = ({
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
 * @returns {TSESTree.TSStringKeyword}
 */
export const tsStringKeyword: StringableASTNodeFn<TSESTree.TSStringKeyword> = ({
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
 * @returns {TSESTree.TSAnyKeyword}
 */
export const tsAnyKeyword: StringableASTNodeFn<TSESTree.TSAnyKeyword> = ({
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
 * @returns {TSESTree.TSTypeReference}
 */
export const tsTypeReference: StringableASTNodeFn<TSESTree.TSTypeReference> = ({
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
 * @returns {TSESTree.TSNullKeyword}
 */
export const tsNullKeyword: StringableASTNodeFn<TSESTree.TSNullKeyword> = ({
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.TSNullKeyword,
    toString: () => `null`,
  }
}

export const tsUnknownKeyword: StringableASTNodeFn<
  TSESTree.TSUnknownKeyword
> = ({ ...other }) => {
  return {
    ...other,
    type: AST_NODE_TYPES.TSUnknownKeyword,
    toString: () => `unknown`,
  }
}

export const tsBooleanKeyword: StringableASTNodeFn<
  TSESTree.TSBooleanKeyword
> = ({ ...other }) => {
  return {
    ...other,
    type: AST_NODE_TYPES.TSBooleanKeyword,
    toString: () => `boolean`,
  }
}

export const tsReadonlyKeyword: StringableASTNodeFn<
  TSESTree.TSReadonlyKeyword
> = ({ ...other }) => {
  return {
    ...other,
    type: AST_NODE_TYPES.TSReadonlyKeyword,
    toString: () => `readonly`,
  }
}

export const tsEmptyBodyFunctionExpression: StringableASTNodeFn<
  TSESTree.TSEmptyBodyFunctionExpression
> = ({ returnType, ...other }) => {
  return {
    returnType,
    ...other,
    type: AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
    toString: () => `function(){}`,
  }
}

export const tsQualifiedName: StringableASTNodeFn<TSESTree.TSQualifiedName> = ({
  left,
  right,
  ...other
}) => {
  return {
    left,
    right,
    ...other,
    type: AST_NODE_TYPES.TSQualifiedName,
    toString: () => `${node(left)}.${node(right)}`,
  }
}

export const tsTypeParameterInstantiation: StringableASTNodeFn<
  TSESTree.TSTypeParameterInstantiation
> = ({ params, ...other }) => {
  return {
    params,
    ...other,
    type: AST_NODE_TYPES.TSTypeParameterInstantiation,
    toString: () => `<${params.map(node).join(', ')}>`,
  }
}

export const tsTypeParameterDeclaration: StringableASTNodeFn<
  TSESTree.TSTypeParameterDeclaration
> = ({ params, ...other }) => {
  return {
    params,
    ...other,
    type: AST_NODE_TYPES.TSTypeParameterDeclaration,
    toString: () => `<${params.map(node).join(', ')}>`,
  }
}

/**
 * __TSTypeOperator__
 *
 * @example
 * ```
 * type X = 'hello'
 * type Y = typeof X
 *          ^^^^^^^^
 * ```
 */
export const tsTypeOperator: StringableASTNodeFn<TSESTree.TSTypeOperator> = ({
  typeAnnotation,
  operator,
  ...other
}) => {
  return {
    ...other,
    typeAnnotation,
    operator,
    type: AST_NODE_TYPES.TSTypeOperator,
    toString: () =>
      `${operator}${typeAnnotation ? ` ${node(typeAnnotation)}` : ''}`,
  }
}

/**
 * __TSTypeQuery__
 *
 * @example
 * ```
 * type X = typeof 'hello'
 * ```
 */
export const tsTypeQuery: StringableASTNodeFn<TSESTree.TSTypeQuery> = ({
  exprName,
  typeParameters,
  ...other
}) => {
  return {
    ...other,
    typeParameters,
    exprName,
    type: AST_NODE_TYPES.TSTypeQuery,
    toString: () =>
      `typeof ${node(exprName)}${typeParameters ? node(typeParameters) : ''}`,
  }
}

/**
 * FIXME Implementation does not meet spec
 */
export const tsTypeParameter: StringableASTNodeFn<TSESTree.TSTypeParameter> = ({
  name,
  ...other
}) => {
  return {
    ...other,
    name,
    type: AST_NODE_TYPES.TSTypeParameter,
    toString: () => `${node(name)}`,
  }
}

export const tsLiteralType: StringableASTNodeFn<TSESTree.TSLiteralType> = ({
  literal,
  ...other
}) => {
  return {
    literal,
    ...other,
    type: AST_NODE_TYPES.TSLiteralType,
    toString: () => `${node(literal)}`,
  }
}

/**
 * @example
 * ```
 * element!.select()
 * ^^^^^^^^
 * ```
 */
export const tsNonNullExpression: StringableASTNodeFn<
  TSESTree.TSNonNullExpression
> = ({ expression, ...other }) => {
  return {
    expression,
    ...other,
    type: AST_NODE_TYPES.TSNonNullExpression,
    toString: () => `${node(expression)}!`,
  }
}

/**
 * __TSTypeAliasDeclaration__
 * @example
 * ```
 * type Alias = number | boolean
 * ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 */
export const tsTypeAliasDeclaration: StringableASTNodeFn<
  TSESTree.TSTypeAliasDeclaration
> = ({ id, typeAnnotation, typeParameters, declare, ...other }) => {
  return {
    id,
    typeAnnotation,
    typeParameters,
    declare,
    ...other,
    type: AST_NODE_TYPES.TSTypeAliasDeclaration,
    toString: () =>
      `${declare ? 'declare ' : ''}type ${node(id)}${
        typeParameters ? `${node(typeParameters)}` : ''
      } = ${node(typeAnnotation)}`,
  }
}

/**
 * __TSUnionType__
 * @example
 * ```
 * type Alias = number | boolean
 *              ^^^^^^^^^^^^^^^^
 * ```
 */
export const tsUnionType: StringableASTNodeFn<TSESTree.TSUnionType> = ({
  types,
  ...other
}) => {
  return {
    types,
    ...other,
    type: AST_NODE_TYPES.TSUnionType,
    toString: () => `${types.map(node).join(' | ')}`,
  }
}

/**
 * __TSIntersectionType__
 * @example
 * ```
 * type Alias = number & boolean
 *              ^^^^^^^^^^^^^^^^
 * ```
 */
export const tsIntersectionType: StringableASTNodeFn<
  TSESTree.TSIntersectionType
> = ({ types, ...other }) => {
  return {
    types,
    ...other,
    type: AST_NODE_TYPES.TSIntersectionType,
    toString: () => `${types.map(node).join(' & ')}`,
  }
}
