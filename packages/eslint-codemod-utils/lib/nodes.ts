import * as estree from 'estree'

import { StringableASTNode } from './types'
import { node } from './utils/node'

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
    `${callee.type === 'Super' ? 'super' : node(callee)}${
      optional ? '?.' : ''
    }(${calleeArgs.map(node).join(', ')})`,
})

/**
 * __ArrowFunctionExpression__
 *
 * @example
 * ```js
 * const arrow = () => 42
 *               ⌃⌃⌃⌃⌃⌃⌃⌃
 * ```
 * @returns {estree.ArrowFunctionExpression}
 */
export const arrowFunctionExpression: StringableASTNode<
  estree.ArrowFunctionExpression
> = ({ async, body, expression, params, ...other }) => {
  return {
    ...other,
    __pragma: 'ecu',
    async,
    expression,
    body,
    params,
    type: 'ArrowFunctionExpression',
    toString: () =>
      `(${params.map(node).map(String).join(', ')}) => {${node(body)}}`,
  }
}

export const blockStatement: StringableASTNode<estree.BlockStatement> = ({
  body,
  ...other
}) => {
  return {
    ...other,
    __pragma: 'ecu',
    body,
    type: 'BlockStatement',
    toString: () => `${body.map(node).map(String).join('\n')}`,
  }
}

/**
 * __UnaryExpression__
 *
 * @example
 *
 * ```js
 * typeof x
 * ^^^^^^
 *
 * ++x
 * ^^
 * ```
 *
 * @returns {estree.UnaryExpression}
 */
export const unaryExpression: StringableASTNode<estree.UnaryExpression> = ({
  operator,
  ...other
}) => {
  return {
    ...other,
    __pragma: 'ecu',
    operator,
    type: 'UnaryExpression',
    toString: () => operator,
  }
}

/**
 * __ThisExpression__
 *
 * @example
 *
 * ```js
 * // In `this.self` 'this' is a ThisExpression.
 * this.self
 * ⌃⌃⌃⌃
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

export const yieldExpression: StringableASTNode<estree.YieldExpression> = ({
  argument,
  delegate,
  ...other
}) => {
  return {
    ...other,
    argument,
    delegate,
    type: 'YieldExpression',
    __pragma: 'ecu',
    toString: () => `yield`,
  }
}

export const arrayExpression: StringableASTNode<estree.ArrayExpression> = ({
  elements,
  ...other
}) => {
  return {
    ...other,
    type: 'ArrayExpression',
    elements,
    __pragma: 'ecu',
    toString: () => `[${elements.map(node).map(String).join(', ')}]`,
  }
}

export const expressionStatement: StringableASTNode<
  estree.ExpressionStatement
> = ({ expression, ...other }) => ({
  __pragma: 'ecu',
  ...other,
  expression,
  type: 'ExpressionStatement',
  toString: () => String(node(expression)),
})

export const newExpression: StringableASTNode<estree.NewExpression> = ({
  callee,
  ...other
}) => ({
  ...other,
  callee,
  type: 'NewExpression',
  __pragma: 'ecu',
  toString: () => `new ${node(callee)}`,
})

export const property: StringableASTNode<estree.Property> = ({
  kind,
  key,
  value,
  ...other
}) => {
  return {
    ...other,
    key,
    kind,
    value,
    type: 'Property',
    __pragma: 'ecu',
    toString: () => `${kind ? kind + ' ' : ''}${node(key)}: ${node(value)}`,
  }
}

export const spreadElement: StringableASTNode<estree.SpreadElement> = ({
  argument,
  ...other
}) => {
  return {
    ...other,
    argument,
    type: 'SpreadElement',
    __pragma: 'ecu',
    toString: () => `...${node(argument)}`,
  }
}

export const objectExpression: StringableASTNode<estree.ObjectExpression> = ({
  properties,
  ...other
}) => {
  return {
    ...other,
    __pragma: 'ecu',
    properties,
    type: 'ObjectExpression',
    toString: () =>
      `{${properties
        .map((node) =>
          node.type === 'Property' ? property(node) : spreadElement(node)
        )
        .map(String)
        .join(',\n')}}`,
  }
}

export const emptyStatement: StringableASTNode<estree.EmptyStatement> = ({
  ...other
}) => ({
  ...other,
  type: 'EmptyStatement',
  __pragma: 'ecu',
  toString: () => `;`,
})

export const memberExpression: StringableASTNode<estree.MemberExpression> = ({
  object,
  property,
  ...other
}) => ({
  ...other,
  type: 'MemberExpression',
  __pragma: 'ecu',
  object,
  property,
  // TODO fix type issues
  toString: () => `${node(object)}.${node(property)}`,
})

export const variableDeclarator: StringableASTNode<
  estree.VariableDeclarator
> = ({ id, init, ...other }) => {
  return {
    ...other,
    id,
    init,
    type: 'VariableDeclarator',
    __pragma: 'ecu',
    toString: () => `${node(id)}${init ? ` = ${node(init)}` : ''}`,
  }
}

export const variableDeclaration: StringableASTNode<
  estree.VariableDeclaration
> = ({ declarations, kind, ...other }) => {
  return {
    ...other,
    declarations,
    kind,
    type: 'VariableDeclaration',
    __pragma: 'ecu',
    toString: () =>
      `${kind ? `${kind} ` : ''}${declarations
        .map(variableDeclarator)
        .map(String)
        .join()}`,
  }
}

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

export const switchCase: StringableASTNode<estree.SwitchCase> = ({
  consequent,
  test,
  ...other
}) => {
  return {
    ...other,
    consequent,
    test,
    type: 'SwitchCase',
    __pragma: 'ecu',
    toString: () =>
      `case ${node(test)}: ${consequent.map(node).map(String).join('; ')};`,
  }
}

export const switchStatement: StringableASTNode<estree.SwitchStatement> = ({
  cases,
  discriminant,
  ...other
}) => ({
  ...other,
  toString: () => `switch (${node(discriminant)}) {
  ${cases.map(switchCase)}\n}`,
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

export const functionDeclaration: StringableASTNode<
  estree.FunctionDeclaration
> = ({ body, async, id, generator, params, ...other }) => ({
  ...other,
  type: 'FunctionDeclaration',
  __pragma: 'ecu',
  body,
  async,
  id,
  generator,
  params,
  // TODO
  toString: () => `function XXXXXX () {}`,
})

export const classDeclaration: StringableASTNode<estree.ClassDeclaration> = ({
  superClass,
  id,
  body,
  ...other
}) => {
  return {
    ...other,
    type: 'ClassDeclaration',
    superClass,
    body,
    id,
    __pragma: 'ecu',
    toString: () => `class __Unimplemented {}`,
  }
}

export const classExpression: StringableASTNode<estree.ClassExpression> = ({
  superClass,
  id,
  body,
  ...other
}) => {
  return {
    ...other,
    type: 'ClassExpression',
    superClass,
    body,
    id,
    __pragma: 'ecu',
    toString: () =>
      String(classDeclaration({ superClass, id, body, ...other })),
  }
}

export const program: StringableASTNode<estree.Program> = ({
  body,
  ...other
}) => ({
  ...other,
  type: 'Program',
  toString: () => body.map(node).map(String).join('\n'),
  __pragma: 'ecu',
  body,
})
