import * as estree from 'estree'

import { StringableASTNode } from './types'
import { node } from './utils/node'
import { DEFAULT_WHITESPACE } from './constants'

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

export const chainExpression: StringableASTNode<estree.ChainExpression> = ({
  expression,
  ...other
}) => {
  return {
    ...other,
    expression,
    type: 'ChainExpression',
    __pragma: 'ecu',
    toString: () => `${node(expression)}`,
  }
}

/**
 * __BinaryExpression__
 *
 * @example
 * ```ts
 * const x = 'left' + 'right'
 *           ^^^^^^^^^^^^^^^^
 * ```
 */
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
 * __SequenceExpression__
 *
 * @example
 * ```ts
 * const x = (4, 8)
 *           ^^^^^^
 * ```
 */
export const sequenceExpression: StringableASTNode<
  estree.SequenceExpression
> = ({ expressions, ...other }) => {
  return {
    ...other,
    __pragma: 'ecu',
    expressions,
    type: 'SequenceExpression',
    toString: () => `(${expressions.map(node).map(String).join(', ')})`,
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
      `${async ? 'async ' : ''}(${params
        .map(node)
        .map(String)
        .join(', ')}) => ${node(body)}`,
  }
}

/**
 * __TaggedTemplateExpression__
 *
 * @example
 * ```ts
 * const style = css`color: red;`
 *                   ^^^^^^^^^^^
 * ```
 */
export const taggedTemplateExpression: StringableASTNode<
  estree.TaggedTemplateExpression
> = ({ quasi, tag, ...other }) => {
  return {
    ...other,
    quasi,
    tag,
    __pragma: 'ecu',
    type: 'TaggedTemplateExpression',
    toString: () => `${node(tag)}${node(quasi)}`,
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
      `${async ? 'async ' : ''}function ${id ? node(id) : ''}(${params
        .map(node)
        .join(', ')}) ${node(body)}`,
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
    toString: () =>
      `{${
        body.length
          ? DEFAULT_WHITESPACE +
            body.map(node).map(String).join(DEFAULT_WHITESPACE) +
            '\n'
          : ''
      }}`,
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
            ? ` (${DEFAULT_WHITESPACE}${node(argument)}${DEFAULT_WHITESPACE})`
            : ` ${node(argument)}`
          : ''
      };`,
  }
}

export const throwStatement: StringableASTNode<estree.ThrowStatement> = ({
  argument,
  ...other
}) => {
  return {
    ...other,
    argument,
    __pragma: 'ecu',
    type: 'ThrowStatement',
    toString: () =>
      `throw${
        argument
          ? // @ts-expect-error
            argument.type === 'JSXElement' || argument.type === 'JSXFragment'
            ? ` (${DEFAULT_WHITESPACE}${node(argument)}${DEFAULT_WHITESPACE})`
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

/**
 * __IfStatement__
 *
 * @example
 *
 * ```ts
 * if (test) {
 * // consequant
 * } else {
 * // alternate
 * }
 * ⌃⌃⌃⌃^^^^^^^^
 * ```
 *
 * @returns {estree.IfStatement}
 */
export const ifStatement: StringableASTNode<estree.IfStatement> = ({
  test,
  alternate,
  consequent,
  ...other
}) => ({
  ...other,
  test,
  alternate,
  consequent,
  type: 'IfStatement',
  __pragma: 'ecu',
  toString: () =>
    `if (${node(test)}) ${node(consequent)} ${
      alternate ? `else ${node(alternate)}` : ''
    }`,
})

/**
 * __WithStatement__
 *
 * @example
 *
 * ```ts
 * with (Math) {
 *   a = PI * r * r;
 *   x = r * cos(PI);
 *   y = r * sin(PI / 2);
 * }
 * ```
 *
 * @returns {estree.WithStatement}
 */
export const withStatement: StringableASTNode<estree.WithStatement> = ({
  object,
  body,
  ...other
}) => ({
  ...other,
  type: 'WithStatement',
  __pragma: 'ecu',
  object,
  body,
  toString: () => `with (${node(object)}) ${node(body)}`,
})

/**
 * __ImportExpression__
 *
 * @example
 *
 * ```ts
 * import('some-path')
 * ⌃⌃⌃⌃^^^^^^^^^^^^^^^
 * ```
 *
 * @returns {estree.ImportExpression}
 */
export const importExpression: StringableASTNode<estree.ImportExpression> = ({
  source,
  ...other
}) => ({
  ...other,
  type: 'ImportExpression',
  __pragma: 'ecu',
  source,
  toString: () => `import(${node(source)})`,
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

/**
 * __YieldExpression__
 *
 * @example
 *
 * ```ts
 * const thing = yield someYieldExpression
 *               ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃^^^^^^^^^^^^^
 * ```
 *
 * @returns {estree.YieldExpression}
 */
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
    toString: () => `yield ${argument ? node(argument) : ''}`,
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

/**
 * __NewExpression__
 *
 * @example
 * ```ts
 * new SomeThing()
 * ^^^^^^^^^^^^^^^
 * ```
 */
export const newExpression: StringableASTNode<estree.NewExpression> = ({
  callee,
  arguments: argumentsParam,
  ...other
}) => ({
  ...other,
  callee,
  arguments: argumentsParam,
  type: 'NewExpression',
  __pragma: 'ecu',
  toString: () => `new ${node(callee)}(${argumentsParam.map(node).join(', ')})`,
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
        kind !== 'init' ? '' : ': '
      }${
        kind !== 'init' && value.type === 'FunctionExpression'
          ? methodOrPropertyFn(value)
          : node(value)
      }`,
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
      `{${DEFAULT_WHITESPACE}${properties
        .map((node) =>
          node.type === 'Property' ? property(node) : spreadElement(node)
        )
        .map(String)
        .join(`,${DEFAULT_WHITESPACE}`)}\n}`,
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

export const templateElement: StringableASTNode<estree.TemplateElement> = ({
  value,
  ...other
}) => {
  return {
    ...other,
    value,
    __pragma: 'ecu',
    type: 'TemplateElement',
    toString: () => `${value.raw}`,
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

    const seperator =
      otherSpecifiers.length > 4 ? `,${DEFAULT_WHITESPACE}` : ', '
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
    return `while (${node(test)}) ${node(body)}`
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
      `${!test ? 'default' : `case ${node(test)}`}: ${consequent
        .map(node)
        .map(String)
        .join('; ')};`,
  }
}

export const switchStatement: StringableASTNode<estree.SwitchStatement> = ({
  cases,
  discriminant,
  ...other
}) => ({
  ...other,
  toString: () => `switch (${node(discriminant)}) {
  ${cases.map(switchCase).join(DEFAULT_WHITESPACE)}\n}`,
  __pragma: 'ecu',
  cases,
  discriminant,
  type: 'SwitchStatement',
})

export const templateLiteral: StringableASTNode<estree.TemplateLiteral> = ({
  expressions,
  quasis,
  ...other
}) => {
  if (quasis.length < expressions.length) {
    throw new Error(
      'invariant: quasis should always outnumber expressions in a TemplateLiteral'
    )
  }
  return {
    ...other,
    __pragma: 'ecu',
    type: 'TemplateLiteral',
    quasis,
    expressions,
    toString: () => {
      const range = Array.from({ length: quasis.length + expressions.length })
      return (
        '`' +
        range
          .map((_, index) => {
            if (index % 2 === 0) {
              return node(quasis[Math.floor(index / 2)])
            } else {
              return `\${${node(expressions[Math.floor(index / 2)])}}`
            }
          })
          .map(String)
          .join('') +
        '`'
      )
    },
  }
}

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
    }) ${node(body)}`,
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

export const breakStatement: StringableASTNode<estree.BreakStatement> = ({
  label,
  ...other
}) => ({
  ...other,
  toString: () => `break${label ? ` ${node(label)}` : ''}`,
  __pragma: 'ecu',
  label,
  type: 'BreakStatement',
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

export const assignmentExpression: StringableASTNode<
  estree.AssignmentExpression
> = ({ left, right, operator, ...other }) => {
  return {
    ...other,
    type: 'AssignmentExpression',
    __pragma: 'ecu',
    left,
    right,
    operator,
    toString: () => `${node(left)}${operator}${node(right)}`,
  }
}

export const awaitExpression: StringableASTNode<estree.AwaitExpression> = ({
  argument,
  ...other
}) => ({
  ...other,
  toString: () => `await ${node(argument)}`,
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
    toString: () =>
      `static {\n${body.map(node).map(String).join(DEFAULT_WHITESPACE)}\n}`,
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
    `${async ? 'async ' : ''}function ${id ? node(id) : ''}(${params
      .map(node)
      .map(String)
      .join(', ')}) ${node(body)}`,
})

export const methodOrPropertyFn = (fn: estree.FunctionExpression) => {
  return `(${fn.params.map(node).join(', ')}) ${node(fn.body)}`
}

export const methodDefinition: StringableASTNode<estree.MethodDefinition> = ({
  computed,
  key,
  kind,
  value,
  ...other
}) => {
  return {
    ...other,
    computed,
    key,
    kind,
    value,
    __pragma: 'ecu',
    type: 'MethodDefinition',
    toString: () => `${node(key)} ${methodOrPropertyFn(value)}`,
  }
}

export const propertyDefinition: StringableASTNode<
  estree.PropertyDefinition
> = ({ computed, key, static: staticKeyWord, value, ...other }) => {
  return {
    ...other,
    computed,
    key,
    static: staticKeyWord,
    value,
    type: 'PropertyDefinition',
    __pragma: 'ecu',
    toString: () => `UNIMPLEMENTED`,
  }
}

export const classBody: StringableASTNode<estree.ClassBody> = ({
  body,
  ...other
}) => {
  return {
    ...other,
    type: 'ClassBody',
    body,
    __pragma: 'ecu',
    toString: () =>
      body.length
        ? `${DEFAULT_WHITESPACE}${body
            .map(node)
            .map(String)
            .join(DEFAULT_WHITESPACE)}\n`
        : '',
  }
}

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
    toString: () =>
      `class${id ? ` ${node(id)}` : ''}${
        superClass ? ` extends ${node(superClass)}` : ''
      } {${node(body)}}`,
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
