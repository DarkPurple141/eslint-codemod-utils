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

export const binaryExpression: StringableASTNode<estree.BinaryExpression> = ({
  left,
  right,
  operator,
  ...other
}) => {
  return {
    ...other,
    __pragma: 'ecu',
    left,
    right,
    operator,
    type: 'BinaryExpression',
    toString: () => `${node(left)} ${operator} ${node(right)}`,
  }
}

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

export const functionExpression: StringableASTNode<
  estree.FunctionExpression
> = ({ async, generator, body, params, id, ...other }) => {
  return {
    ...other,
    id,
    async,
    generator,
    body,
    params,
    __pragma: 'ecu',
    type: 'FunctionExpression',
    toString: () =>
      `${id ? node(id) : ''}(${params.map(node).join(', ')}) {\n${node(
        body
      )}\n}`,
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

export const returnStatement: StringableASTNode<estree.ReturnStatement> = ({
  argument,
  ...other
}) => {
  return {
    ...other,
    __pragma: 'ecu',
    type: 'ReturnStatement',
    toString: () =>
      `return${
        argument
          ? // @ts-expect-error
            argument.type === 'JSXElement'
            ? ` (\n  ${node(argument)}\n  )`
            : ` ${node(argument)}`
          : ''
      };`,
  }
}

/**
 * __UnaryExpression__
 *
 * @example
 *
 * ```ts
 * const y = typeof x
 *           ^^^^^^
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

export const exportNamedDeclaration: StringableASTNode<
  estree.ExportNamedDeclaration
> = ({ declaration, specifiers, source, ...other }) => {
  return {
    ...other,
    declaration,
    specifiers,
    source,
    type: 'ExportNamedDeclaration',
    __pragma: 'ecu',
    toString: () =>
      `export ${declaration ? node(declaration) : ''}${
        specifiers.length
          ? `{ ${specifiers.map(node).map(String).join(', ')} }`
          : ''
      }${source ? `from ${node(source)}` : ''}`,
  }
}

export const exportDefaultDeclaration: StringableASTNode<
  estree.ExportDefaultDeclaration
> = ({ declaration, ...other }) => {
  return {
    ...other,
    type: 'ExportDefaultDeclaration',
    declaration,
    __pragma: 'ecu',
    toString: () => `export default ${node(declaration)}`,
  }
}

export const exportAllDeclaration: StringableASTNode<
  estree.ExportAllDeclaration
> = ({ source, ...other }) => {
  return {
    ...other,
    type: 'ExportAllDeclaration',
    source,
    __pragma: 'ecu',
    toString: () => `export * from ${node(source)}`,
  }
}

export const exportSpecifier: StringableASTNode<estree.ExportSpecifier> = ({
  exported,
  local,
  ...other
}) => {
  return {
    ...other,
    exported,
    local,
    type: 'ExportSpecifier',
    __pragma: 'ecu',
    toString: () =>
      local.name !== exported.name
        ? `${node(exported)} as ${node(local)}`
        : String(node(local)),
  }
}

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
    // @ts-expect-error
    toString: () => `[${elements.map(node).map(String).join(', ')}]`,
  }
}

export const updateExpression: StringableASTNode<estree.UpdateExpression> = ({
  argument,
  operator,
  prefix,
  ...other
}) => {
  return {
    ...other,
    argument,
    operator,
    prefix,
    type: 'UpdateExpression',
    __pragma: 'ecu',
    toString: () =>
      `${
        prefix ? `${operator}${node(argument)}` : `${node(argument)}${operator}`
      }`,
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
  method,
  ...other
}) => {
  return {
    ...other,
    key,
    kind,
    value,
    method,
    type: 'Property',
    __pragma: 'ecu',
    toString: () =>
      `${kind === 'init' ? '' : kind + ' '}${node(key)}${
        method || kind !== 'init' ? '' : ': '
      }${node(value)}`,
  }
}

/**
 * __ObjectPattern__
 *
 * @example
 * ```ts
 * function App({ a }) {}
 *              ^^^^^
 * ```
 * @returns
 */
export const objectPattern: StringableASTNode<estree.ObjectPattern> = ({
  properties,
  ...other
}) => {
  return {
    ...other,
    properties,
    type: 'ObjectPattern',
    __pragma: 'ecu',
    // @ts-ignore TODO AssignmentProperty causing issues
    toString: () => `{${properties.map(node).map(String).join(', ')}}`,
  }
}

/**
 * __SpreadElement__
 *
 * @example
 * ```ts
 * const obj = {
 *  ...spread
 *  ^^^^^^^^^
 * }
 * ```
 *
 * @returns {estree.SpreadElement}
 */
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
      `{\n  ${properties
        .map((node) =>
          node.type === 'Property' ? property(node) : spreadElement(node)
        )
        .map(String)
        .join(',\n  ')}\n}`,
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
  toString: () => `${node(object)}.${node(property)}`,
})

export const logicalExpression: StringableASTNode<estree.LogicalExpression> = ({
  left,
  right,
  operator,
  ...other
}) => {
  return {
    ...other,
    left,
    right,
    operator,
    type: 'LogicalExpression',
    __pragma: 'ecu',
    toString: () => `${node(left)} ${operator} ${node(right)}`,
  }
}

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

export const importNamespaceSpecifier: StringableASTNode<
  estree.ImportNamespaceSpecifier
> = ({ local }) => {
  return {
    type: 'ImportNamespaceSpecifier',
    __pragma: 'ecu',
    local,
    toString: () => `* as ${local.name}`,
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

    const nameSpaceSpecifier = specifiers.find(
      (node): node is estree.ImportNamespaceSpecifier =>
        node.type === 'ImportNamespaceSpecifier'
    )

    const seperator = otherSpecifiers.length > 4 ? ',\n  ' : ', '
    const leadOrEndSpecifier = otherSpecifiers.length > 4 ? '\n' : ' '

    return `import ${defaultSpecifier ? defaultSpecifier.local.name : ''}${
      otherSpecifiers.length
        ? defaultSpecifier
          ? `, {${leadOrEndSpecifier}${otherSpecifiers
              .map(importSpecifier)
              .join(seperator)}${leadOrEndSpecifier}}`
          : `{${leadOrEndSpecifier}${otherSpecifiers
              .map(importSpecifier)
              .join(seperator)}${leadOrEndSpecifier}}`
        : ''
    }${
      (otherSpecifiers.length || defaultSpecifier) && nameSpaceSpecifier
        ? ', '
        : ''
    }${
      nameSpaceSpecifier ? importNamespaceSpecifier(nameSpaceSpecifier) : ''
    } from '${source.value}'`
  },
})

export const literal: StringableASTNode<estree.Literal> = ({
  value,
  raw,
  // @ts-expect-error TODO bigint
}) => ({
  value,
  raw,
  type: 'Literal',
  __pragma: 'ecu',
  toString: () => raw || String(value),
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
      // @ts-ignore
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

export const forStatement: StringableASTNode<estree.ForStatement> = ({
  body,
  init,
  test,
  update,
  ...other
}) => ({
  ...other,
  __pragma: 'ecu',
  init,
  body,
  test,
  update,
  type: 'ForStatement',
  toString: () =>
    `for (${init ? node(init) : ''};${test ? node(test) : ''};${
      update ? node(update) : ''
    }) {\n${node(body)}\n}`,
})

export const continueStatement: StringableASTNode<estree.ContinueStatement> = ({
  label,
  ...other
}) => ({
  ...other,
  toString: () => `continue${label ? ` ${node(label)}` : ''}`,
  __pragma: 'ecu',
  label,
  type: 'ContinueStatement',
})

export const debuggerStatement: StringableASTNode<estree.DebuggerStatement> = (
  node
) => ({
  ...node,
  toString: () => `debugger`,
  __pragma: 'ecu',
  type: 'DebuggerStatement',
})

export const conditionalExpression: StringableASTNode<
  estree.ConditionalExpression
> = ({ consequent, alternate, test, ...other }) => ({
  ...other,
  toString: () => `${node(test)} ? ${node(consequent)} : ${node(alternate)}`,
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

/**
 * __StaticBlock__
 *
 * @example
 * ```ts
 * class A {
 * // only applicable inside a class
 *  static { }
 *  ^^^^^^^^^^
 * }
 * ```
 */
export const staticBlock: StringableASTNode<estree.StaticBlock> = ({
  body,
  ...other
}) => {
  return {
    ...other,
    body,
    type: 'StaticBlock',
    __pragma: 'ecu',
    toString: () => `static {\n${body.map(node).map(String).join('\n')}\n}`,
  }
}

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
  toString: () =>
    `function ${id ? node(id) : ''}(${params
      .map(node)
      .map(String)
      .join(', ')}) {\n${node(body)}\n}`,
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
      String(classDeclaration({ superClass, id: id || null, body, ...other })),
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
