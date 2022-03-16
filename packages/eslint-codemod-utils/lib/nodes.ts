import * as estree from 'estree'
import { typeToHelperLookup } from './constants'

import { StringableASTNode } from './types'

export const newExpression: StringableASTNode<estree.NewExpression> = (
  node
) => ({
  ...node,
  type: 'NewExpression',
  __pragma: 'ecu',
})

/**
 * __CallExpression__
 *
 * @example
 *
 * Usage
 * ```
 * const call = callExpression({ callee: identifier({ name: 'normalCallExpression' }) })
 * ```
 *
 * Produces
 *
 * @example
 *
 * ```js
 * normalCallExpression()
 * ```
 *
 * @returns {CallExpression}
 */
export const callExpression: StringableASTNode<estree.SimpleCallExpression> = ({
  callee,
  arguments: calleeArgs,
  optional = false,
}) => ({
  __pragma: 'ecu',
  arguments: calleeArgs,
  callee,
  optional,
  type: 'CallExpression',
  toString: () =>
    `${
      callee.type === 'Super'
        ? 'super'
        : // @ts-expect-error
          typeToHelperLookup[callee.type](callee)
    }${optional ? '?.' : ''}(${calleeArgs.map(String).join(', ')})`,
})

/**
 * __ThisExpression__
 *
 * @example
 *
 * ```js
 * // In `this.self` 'this' is a ThisExpression.
 * this.self
 * ```
 *
 * @returns {estree.ThisExpression}
 */
export const thisExpression: StringableASTNode<estree.ThisExpression> = (
  node
) => ({
  ...node,
  type: 'ThisExpression',
  __pragma: 'ecu',
  toString: () => `this`,
})

export const importDefaultSpecifier: StringableASTNode<
  estree.ImportDefaultSpecifier
> = ({ local, ...other }) => ({
  ...other,
  __pragma: 'ecu',
  local,
  type: 'ImportDefaultSpecifier',
  toString: () => local.name,
})

export const importSpecifier: StringableASTNode<estree.ImportSpecifier> = ({
  imported,
  local,
  ...other
}) => ({
  ...other,
  __pragma: 'ecu',
  type: 'ImportSpecifier',
  imported,
  local,
  toString: () =>
    `${
      local.name === imported.name
        ? imported.name
        : `${imported.name} as ${local.name}`
    }`,
})

export const importDeclaration: StringableASTNode<estree.ImportDeclaration> = ({
  specifiers,
  source,
  ...other
}) => ({
  ...other,
  __pragma: 'ecu',
  type: 'ImportDeclaration',
  specifiers,
  source,
  toString: () => {
    if (!specifiers.length) {
      return `import '${source.value}'`
    }

    const defaultSpecifier = specifiers.find(
      (spec): spec is estree.ImportDefaultSpecifier =>
        spec.type === 'ImportDefaultSpecifier'
    )
    const otherSpecifiers = specifiers.filter(
      (spec): spec is estree.ImportSpecifier => spec.type === 'ImportSpecifier'
    )

    return `import ${defaultSpecifier ? defaultSpecifier.local.name : ''}${
      otherSpecifiers.length
        ? defaultSpecifier
          ? `, { ${otherSpecifiers.map(importSpecifier).join(', ')} }`
          : `{ ${otherSpecifiers.map(importSpecifier).join(', ')} }`
        : ''
    } from '${source.value}'`
  },
})

export const literal: StringableASTNode<estree.Literal> = ({
  value,
  raw,
  // @ts-expect-error
}) => ({
  value,
  raw,
  type: 'Literal',
  __pragma: 'ecu',
  toString: () => raw || value.toString(),
})

export const identifier: StringableASTNode<estree.Identifier> = ({ name }) => ({
  type: 'Identifier',
  __pragma: 'ecu',
  name,
  toString: () => name,
})

export const whileStatement: StringableASTNode<estree.WhileStatement> = ({
  test,
  body,
  ...other
}) => ({
  ...other,
  __pragma: 'ecu',
  test,
  body,
  type: 'WhileStatement',
  toString() {
    throw new Error('Unimplemented')
  },
})

export const switchStatement: StringableASTNode<estree.SwitchStatement> = ({
  cases,
  discriminant,
  ...other
}) => ({
  ...other,
  toString: () => {
    throw new Error('Unimplemented')
  },
  __pragma: 'ecu',
  cases,
  discriminant,
  type: 'SwitchStatement',
})

export const continueStatement: StringableASTNode<estree.ContinueStatement> = ({
  label,
  ...other
}) => ({
  ...other,
  toString: () => {
    throw new Error('Unimplemented')
  },
  __pragma: 'ecu',
  label,
  type: 'ContinueStatement',
})

export const conditionalExpression: StringableASTNode<
  estree.ConditionalExpression
> = ({ consequent, alternate, test, ...other }) => ({
  ...other,
  toString: () => {
    throw new Error('Unimplemented')
  },
  __pragma: 'ecu',
  consequent,
  alternate,
  test,
  type: 'ConditionalExpression',
})

export const awaitExpression: StringableASTNode<estree.AwaitExpression> = ({
  argument,
  ...other
}) => ({
  ...other,
  toString: () => {
    throw new Error('Unimplemented')
  },
  __pragma: 'ecu',
  argument,
  type: 'AwaitExpression',
})
