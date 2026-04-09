import { AST_NODE_TYPES, TSESTree as ESTree } from '@typescript-eslint/types'

import type {
  Loose,
  StringableASTNode,
  StringableASTNodeFn,
  WithoutType,
} from './types'
import { node } from './utils/node'
import { DEFAULT_WHITESPACE } from './constants'
import { isNodeOfType } from './utils'

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
 * @returns {ESTree.CallExpression}
 */
export const callExpression: StringableASTNodeFn<ESTree.CallExpression> = ({
  arguments: calleeArgs,
  callee,
  optional = false,
  ...other
}) => {
  return {
    ...other,
    arguments: calleeArgs,
    callee,
    optional,
    type: AST_NODE_TYPES.CallExpression,
    toString: () =>
      `${node(callee)}${optional ? '?.' : ''}(${calleeArgs
        .map(node)
        .join(', ')})`,
  }
}

/**
 * __Super__
 *
 * @example
 *
 * ```
 * // note the whole expression is a `CallExpression`
 * // super is simply the callee / identifier
 * super()
 * ^^^^^
 * ```
 *
 * @returns {ESTree.Super}
 */
export const superCallExpression: StringableASTNodeFn<ESTree.Super> = ({
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.Super,
    toString: () => `super`,
  }
}

export const chainExpression: StringableASTNodeFn<ESTree.ChainExpression> = ({
  expression,
  ...other
}) => {
  return {
    ...other,
    expression,
    type: AST_NODE_TYPES.ChainExpression,
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
export const binaryExpression: StringableASTNodeFn<ESTree.BinaryExpression> = ({
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
    type: AST_NODE_TYPES.BinaryExpression,
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
export const sequenceExpression: StringableASTNodeFn<
  ESTree.SequenceExpression
> = ({ expressions, ...other }) => {
  return {
    ...other,
    expressions,
    type: AST_NODE_TYPES.SequenceExpression,
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
 * @returns {ESTree.ArrowFunctionExpression}
 */
export const arrowFunctionExpression: StringableASTNodeFn<
  ESTree.ArrowFunctionExpression
> = ({
  async = false,
  generator = false,
  body,
  expression,
  params,
  ...other
}) => {
  return {
    ...other,
    generator,
    async,
    expression,
    body,
    params,
    type: AST_NODE_TYPES.ArrowFunctionExpression,
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
export const taggedTemplateExpression: StringableASTNodeFn<
  ESTree.TaggedTemplateExpression
> = ({ quasi, tag, ...other }) => {
  return {
    ...other,
    quasi,
    tag,
    type: AST_NODE_TYPES.TaggedTemplateExpression,
    toString: () => `${node(tag)}${node(quasi)}`,
  }
}

export const functionExpression: StringableASTNodeFn<
  ESTree.FunctionExpression
> = ({ async = false, generator = false, body, params, id, ...other }) => {
  return {
    ...other,
    id,
    async,
    generator,
    body,
    params,
    type: AST_NODE_TYPES.FunctionExpression,
    toString: () =>
      `${async ? 'async ' : ''}function ${id ? node(id) : ''}(${params
        .map(node)
        .join(', ')}) ${node(body)}`,
  }
}

export const blockStatement: StringableASTNodeFn<ESTree.BlockStatement> = ({
  body,
  ...other
}) => {
  return {
    ...other,
    body,
    type: AST_NODE_TYPES.BlockStatement,
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

export const returnStatement: StringableASTNodeFn<ESTree.ReturnStatement> = ({
  argument,
  ...other
}) => {
  return {
    ...other,
    argument,
    type: AST_NODE_TYPES.ReturnStatement,
    toString: () =>
      `return${
        argument
          ? argument.type === 'JSXElement'
            ? ` (${DEFAULT_WHITESPACE}${node(argument)}${DEFAULT_WHITESPACE})`
            : ` ${node(argument)}`
          : ''
      };`,
  }
}

export const throwStatement: StringableASTNodeFn<ESTree.ThrowStatement> = ({
  argument,
  ...other
}) => {
  return {
    ...other,
    argument,
    type: AST_NODE_TYPES.ThrowStatement,
    toString: () => {
      if (!argument) {
        return `throw;`
      }
      // `TSESTree.ThrowStatement.argument` is typed as
      // `Statement | TSAsExpression | null` in `@typescript-eslint/types@5.45`
      // which notably excludes JSX nodes, even though `espree` happily emits
      // `JSXElement`/`JSXFragment` here at runtime for `throw (<el />)`. Cast
      // the discriminant to the full `AST_NODE_TYPES` enum so the comparison
      // reflects the real parser output rather than the narrow declared type.
      const argumentType = argument.type as AST_NODE_TYPES
      const needsParens =
        argumentType === AST_NODE_TYPES.JSXElement ||
        argumentType === AST_NODE_TYPES.JSXFragment
      return `throw${
        needsParens
          ? ` (${DEFAULT_WHITESPACE}${node(argument)}${DEFAULT_WHITESPACE})`
          : ` ${node(argument)}`
      };`
    },
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
 * @returns {ESTree.UnaryExpression}
 */
export const unaryExpression: StringableASTNodeFn<ESTree.UnaryExpression> = ({
  operator,
  argument,
  prefix,
  ...other
}) => {
  return {
    ...other,
    operator,
    prefix,
    argument,
    type: AST_NODE_TYPES.UnaryExpression,
    toString: () => `${operator} ${node(argument)}`,
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
 * @returns {ESTree.ThisExpression}
 */
export const thisExpression: StringableASTNodeFn<ESTree.ThisExpression> = (
  node
) => ({
  ...node,
  type: AST_NODE_TYPES.ThisExpression,
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
 * @returns {ESTree.IfStatement}
 */
export const ifStatement: StringableASTNodeFn<ESTree.IfStatement> = ({
  test,
  alternate,
  consequent,
  ...other
}) => ({
  ...other,
  test,
  alternate,
  consequent,
  type: AST_NODE_TYPES.IfStatement,
  toString: () =>
    `if (${node(test)}) ${node(consequent)} ${
      alternate ? `else ${node(alternate)}` : ''
    }`,
})

/**
 * __CatchClause__
 *
 * @example
 *
 * ```ts
 * // always inside a try statement
 * catch (e) {}
 * ⌃⌃⌃⌃^^^^^^^^
 * ```
 *
 * @returns {ESTree.CatchClause}
 */
export const catchClause: StringableASTNodeFn<ESTree.CatchClause> = ({
  body,
  param,
  ...other
}) => ({
  ...other,
  body,
  param,
  type: AST_NODE_TYPES.CatchClause,
  toString: () => `catch${param ? ` (${node(param)})` : ''} ${node(body)}`,
})

/**
 * __TryStatement__
 *
 * @example
 *
 * ```ts
 * try {
 * // block
 * } catch(e) { // <--- handler
 *
 * } finally {} // <--- finalizer
 * ⌃⌃⌃⌃^^^^^^^^
 * ```
 *
 * @returns {ESTree.TryStatement}
 */
export const tryStatement: StringableASTNodeFn<ESTree.TryStatement> = ({
  block,
  finalizer,
  handler,
  ...other
}) => ({
  ...other,
  block,
  finalizer,
  handler,
  type: AST_NODE_TYPES.TryStatement,
  toString: () =>
    `try ${node(block)} ${handler ? node(handler) : ''} ${
      finalizer ? `finally ${node(finalizer)}` : ''
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
 * @returns {ESTree.WithStatement}
 */
export const withStatement: StringableASTNodeFn<ESTree.WithStatement> = ({
  object,
  body,
  ...other
}) => ({
  ...other,
  type: AST_NODE_TYPES.WithStatement,
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
 * @returns {ESTree.ImportExpression}
 */
export const importExpression: StringableASTNodeFn<ESTree.ImportExpression> = ({
  source,
  ...other
}) => ({
  ...other,
  type: AST_NODE_TYPES.ImportExpression,
  source,
  toString: () => `import(${node(source)})`,
})

/**
 * __ImportDefaultSpecifier__
 *
 * @example
 *
 * ```ts
 * import Hello from 'world'
 *        ^^^^^
 * ```
 *
 * @returns {ESTree.ImportDefaultSpecifier}
 */
export const importDefaultSpecifier: StringableASTNodeFn<
  ESTree.ImportDefaultSpecifier
> = ({ local, ...other }) => ({
  ...other,
  local,
  type: AST_NODE_TYPES.ImportDefaultSpecifier,
  toString: () => local.name,
})

/**
 * __ExportNamedDeclaration__
 *
 * @example
 *
 * ```ts
 * export { Hello } from 'world'
 * ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @returns {ESTree.ExportNamedDeclaration}
 */
export const exportNamedDeclaration: StringableASTNodeFn<
  ESTree.ExportNamedDeclaration
> = ({
  declaration,
  specifiers,
  source,
  assertions = [],
  exportKind = 'value',
  ...other
}) => {
  // `ExportNamedDeclaration` is a discriminated union with mutually-exclusive
  // `source`/`declaration`/`specifiers` invariants that depend on runtime
  // values. TypeScript can't narrow to one variant here, so fall back to a
  // structural cast — the runtime shape is always valid for exactly one
  // variant depending on the inputs the caller provided.
  return {
    ...other,
    declaration,
    specifiers,
    source,
    assertions,
    exportKind,
    type: AST_NODE_TYPES.ExportNamedDeclaration,
    toString: () =>
      `export ${declaration ? node(declaration) : ''}${
        specifiers.length
          ? `{ ${specifiers.map(node).map(String).join(', ')} }`
          : ''
      }${source ? `from ${node(source)}` : ''}`,
  } as StringableASTNode<ESTree.ExportNamedDeclaration>
}

/**
 * __ExportDefaultDeclaration__
 *
 * @example
 *
 * ```ts
 * export default HelloWorld
 * ^^^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @returns {ESTree.ExportDefaultDeclaration}
 */
export const exportDefaultDeclaration: StringableASTNodeFn<
  ESTree.ExportDefaultDeclaration
> = ({ declaration, ...other }) => {
  return {
    ...other,
    type: AST_NODE_TYPES.ExportDefaultDeclaration,
    declaration,

    toString: () => `export default ${node(declaration)}`,
  }
}

/**
 * __ExportAllDeclaration__
 *
 * @example
 *
 * ```ts
 * export * from 'world'
 * ^^^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 * ```ts
 * export * as Hello from 'world'
 * ^^^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @returns {ESTree.ExportAllDeclaration}
 */
/**
 * `exported` is made optional here (defaults to `null`) via a narrowed input
 * type so callers don't have to write `exported: null` for the common
 * `export * from '…'` case. It stays required on the underlying TSESTree type
 * (and on `ExportSpecifier`, which is why it's deliberately excluded from the
 * shared `DefaultableFields` list).
 */
export const exportAllDeclaration: (
  node: Omit<WithoutType<ESTree.ExportAllDeclaration>, 'exported'> & {
    exported?: WithoutType<ESTree.ExportAllDeclaration>['exported']
  }
) => StringableASTNode<ESTree.ExportAllDeclaration> = ({
  source,
  exported = null,
  assertions = [],
  exportKind = 'value',
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.ExportAllDeclaration,
    source,
    exported,
    assertions,
    exportKind,
    toString: () =>
      `export * ${exported ? `as ${node(exported)} ` : ''}from ${node(source)}`,
  }
}

export const exportSpecifier: StringableASTNodeFn<ESTree.ExportSpecifier> = ({
  exported,
  local,
  exportKind = 'value',
  ...other
}) => {
  return {
    ...other,
    exported,
    local,
    exportKind,
    type: AST_NODE_TYPES.ExportSpecifier,
    toString: () =>
      local.name !== exported.name
        ? `${node(exported)} as ${node(local)}`
        : String(node(local)),
  }
}

export const importSpecifier: StringableASTNodeFn<ESTree.ImportSpecifier> = ({
  imported,
  local,
  importKind = 'value',
  ...other
}) => ({
  ...other,
  type: AST_NODE_TYPES.ImportSpecifier,
  imported,
  importKind,
  local,
  toString: () =>
    `${importKind === 'type' ? 'type ' : ''}${
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
 * @returns {ESTree.YieldExpression}
 */
export const yieldExpression: StringableASTNodeFn<ESTree.YieldExpression> = ({
  argument,
  delegate,
  ...other
}) => {
  return {
    ...other,
    argument,
    delegate,
    type: AST_NODE_TYPES.YieldExpression,
    toString: () => `yield ${argument ? node(argument) : ''}`,
  }
}

export const arrayExpression: StringableASTNodeFn<ESTree.ArrayExpression> = ({
  elements,
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.ArrayExpression,
    elements,
    toString: () =>
      `[${elements
        .filter((n): n is ESTree.SpreadElement | ESTree.Expression =>
          Boolean(n)
        )
        .map(node)
        .map(String)
        .join(', ')}]`,
  }
}

export const arrayPattern: StringableASTNodeFn<ESTree.ArrayPattern> = ({
  elements,
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.ArrayPattern,
    elements,
    toString: () =>
      `[${elements
        .filter((node): node is ESTree.DestructuringPattern => node !== null)
        .map(node)
        .map(String)
        .join(', ')}]`,
  }
}

export const updateExpression: StringableASTNodeFn<ESTree.UpdateExpression> = ({
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
    type: AST_NODE_TYPES.UpdateExpression,
    toString: () =>
      `${
        prefix ? `${operator}${node(argument)}` : `${node(argument)}${operator}`
      }`,
  }
}

export const expressionStatement: StringableASTNodeFn<
  ESTree.ExpressionStatement
> = ({ expression, ...other }) => ({
  ...other,
  expression,
  type: AST_NODE_TYPES.ExpressionStatement,
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
export const newExpression: StringableASTNodeFn<ESTree.NewExpression> = ({
  callee,
  arguments: argumentsParam,
  ...other
}) => ({
  ...other,
  callee,
  arguments: argumentsParam,
  type: AST_NODE_TYPES.NewExpression,
  toString: () => `new ${node(callee)}(${argumentsParam.map(node).join(', ')})`,
})

export const property: StringableASTNodeFn<ESTree.Property> = ({
  kind = 'init',
  key,
  value,
  method = false,
  computed = false,
  shorthand = false,
  ...other
}) => {
  // `Property` is a union discriminated on `computed: boolean`. The runtime
  // value of `computed` chooses the variant, but TS can't narrow a runtime
  // boolean so structurally cast the return.
  return {
    ...other,
    key,
    kind,
    value,
    method,
    shorthand,
    computed,
    type: AST_NODE_TYPES.Property,
    toString: () =>
      `${kind === 'init' ? '' : kind + ' '}${computed ? '[' : ''}${node(key)}${
        computed ? ']' : ''
      }${kind !== 'init' ? '' : ': '}${
        kind !== 'init' &&
        isNodeOfType(value, AST_NODE_TYPES.FunctionExpression)
          ? methodOrPropertyFn(value)
          : node(value)
      }`,
  } as StringableASTNode<ESTree.Property>
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
export const objectPattern: StringableASTNodeFn<ESTree.ObjectPattern> = ({
  properties,
  ...other
}) => {
  return {
    ...other,
    properties,
    type: AST_NODE_TYPES.ObjectPattern,
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
 * @returns {ESTree.SpreadElement}
 */
export const spreadElement: StringableASTNodeFn<ESTree.SpreadElement> = ({
  argument,
  ...other
}) => {
  return {
    ...other,
    argument,
    type: AST_NODE_TYPES.SpreadElement,
    toString: () => `...${node(argument)}`,
  }
}

/**
 * __RestElement__
 *
 * @example
 * ```ts
 * const [a, ...b] = c
 *           ^^^^
 * ```
 *
 *  * @example
 * ```ts
 * const { a, ...b } = c
 *            ^^^^
 * ```
 *
 * @returns {ESTree.RestElement}
 */
export const restElement: StringableASTNodeFn<ESTree.RestElement> = ({
  argument,
  ...other
}) => {
  return {
    ...other,
    argument,
    type: AST_NODE_TYPES.RestElement,
    toString: () => `...${node(argument)}`,
  }
}

/**
 * __ObjectExpression__
 * @example
 * ```ts
 * const x = {
 *  key: value,
 *  get x() { return 1 },
 * }
 * ^^^^^^^^^^^^
 * ```
 */
export const objectExpression: StringableASTNodeFn<ESTree.ObjectExpression> = ({
  properties,
  ...other
}) => {
  return {
    ...other,
    properties,
    type: AST_NODE_TYPES.ObjectExpression,
    toString: () =>
      `{${DEFAULT_WHITESPACE}${properties
        .map(node)
        .map(String)
        .join(`,${DEFAULT_WHITESPACE}`)}\n}`,
  }
}

export const emptyStatement: StringableASTNodeFn<ESTree.EmptyStatement> = ({
  ...other
}) => ({
  ...other,
  type: AST_NODE_TYPES.EmptyStatement,
  toString: () => `;`,
})

export const memberExpression: StringableASTNodeFn<ESTree.MemberExpression> = ({
  object,
  property,
  computed = false,
  optional = false,
  ...other
}) =>
  // `MemberExpression` is a union discriminated on `computed` — see the note
  // on `property` above for why a structural cast is needed here.
  ({
    ...other,
    type: AST_NODE_TYPES.MemberExpression,
    computed,
    optional,
    object,
    property,
    toString: () => {
      const translatedNode = node(property)
      return `${node(object)}${
        computed ? `[${translatedNode}]` : `.${translatedNode}`
      }`
    },
  } as StringableASTNode<ESTree.MemberExpression>)

export const logicalExpression: StringableASTNodeFn<
  ESTree.LogicalExpression
> = ({ left, right, operator, ...other }) => {
  return {
    ...other,
    left,
    right,
    operator,
    type: AST_NODE_TYPES.LogicalExpression,
    toString: () => `${node(left)} ${operator} ${node(right)}`,
  }
}

export const variableDeclarator: StringableASTNodeFn<
  ESTree.VariableDeclarator
> = ({ id, init, ...other }) => {
  return {
    ...other,
    id,
    init,
    type: AST_NODE_TYPES.VariableDeclarator,
    toString: () => `${node(id)}${init ? ` = ${node(init)}` : ''}`,
  }
}

export const variableDeclaration: StringableASTNodeFn<
  ESTree.VariableDeclaration
> = ({ declarations, kind, ...other }) => {
  return {
    ...other,
    declarations,
    kind,
    type: AST_NODE_TYPES.VariableDeclaration,
    toString: () =>
      `${kind ? `${kind} ` : ''}${declarations
        .map(variableDeclarator)
        .map(String)
        .join()}`,
  }
}

export const importNamespaceSpecifier: StringableASTNodeFn<
  ESTree.ImportNamespaceSpecifier
> = ({ local, ...other }) => {
  return {
    ...other,
    type: AST_NODE_TYPES.ImportNamespaceSpecifier,
    local,
    toString: () => `* as ${local.name}`,
  }
}

export const templateElement: StringableASTNodeFn<ESTree.TemplateElement> = ({
  value,
  ...other
}) => {
  return {
    ...other,
    value,
    type: AST_NODE_TYPES.TemplateElement,
    toString: () => `${value.raw}`,
  }
}

export const importDeclaration: StringableASTNodeFn<
  ESTree.ImportDeclaration
> = ({
  specifiers,
  source,
  importKind = 'value',
  assertions = [],
  ...other
}) => ({
  ...other,
  type: AST_NODE_TYPES.ImportDeclaration,
  specifiers,
  source,
  importKind,
  assertions,
  toString: () => {
    if (!specifiers.length) {
      return `import '${source.value}'`
    }

    const defaultSpecifier = specifiers.find(
      (spec): spec is ESTree.ImportDefaultSpecifier =>
        isNodeOfType(spec, AST_NODE_TYPES.ImportDefaultSpecifier)
    )
    const otherSpecifiers = specifiers.filter(
      (spec): spec is ESTree.ImportSpecifier =>
        isNodeOfType(spec, AST_NODE_TYPES.ImportSpecifier)
    )

    const nameSpaceSpecifier = specifiers.find(
      (node): node is ESTree.ImportNamespaceSpecifier =>
        isNodeOfType(node, AST_NODE_TYPES.ImportNamespaceSpecifier)
    )

    const seperator =
      otherSpecifiers.length > 4 ? `,${DEFAULT_WHITESPACE}` : ', '
    const leadOrEndSpecifier = otherSpecifiers.length > 4 ? '\n' : ' '

    return `import ${importKind === 'type' ? 'type ' : ''}${
      defaultSpecifier ? defaultSpecifier.local.name : ''
    }${
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

export const bigIntLiteral: StringableASTNodeFn<ESTree.BigIntLiteral> = ({
  value,
  raw,
  bigint,
  ...other
}) => ({
  ...other,
  value,
  raw,
  bigint,
  type: AST_NODE_TYPES.Literal,
  toString: () => raw || String(value),
})

export const regExpLiteral: StringableASTNodeFn<ESTree.RegExpLiteral> = ({
  value,
  raw,
  regex,
  ...other
}) => ({
  ...other,
  value,
  raw,
  regex,
  type: AST_NODE_TYPES.Literal,
  toString: () => raw || String(value),
})

export const stringLiteral: StringableASTNodeFn<ESTree.StringLiteral> = ({
  raw,
  ...node
}) => {
  return {
    ...node,
    raw,
    type: AST_NODE_TYPES.Literal,
    toString: () => raw,
  }
}

export const booleanLiteral = (
  n: boolean | WithoutType<ESTree.BooleanLiteral>
): StringableASTNode<ESTree.BooleanLiteral> => {
  if (typeof n === 'boolean') {
    return {
      value: n,
      raw: String(n) as 'true' | 'false',
      type: AST_NODE_TYPES.Literal,
      toString: () => String(n),
    }
  } else {
    return {
      ...n,
      type: AST_NODE_TYPES.Literal,
      toString: () => n.raw || String(n.value),
    }
  }
}

export const numberLiteral = (
  n: number | WithoutType<ESTree.NumberLiteral>
): StringableASTNode<ESTree.NumberLiteral> => {
  if (typeof n === 'number') {
    return {
      value: n,
      raw: String(n),
      type: AST_NODE_TYPES.Literal,
      toString: () => String(n),
    }
  }

  return {
    ...n,
    type: AST_NODE_TYPES.Literal,
    toString: () => n.raw || String(n.value),
  }
}

export const nullLiteral = (
  n: null | WithoutType<ESTree.NullLiteral>
): StringableASTNode<ESTree.NullLiteral> => {
  if (n === null) {
    return {
      raw: 'null',
      value: null,
      type: AST_NODE_TYPES.Literal,
      toString: () => 'null',
    }
  }

  return {
    ...n,
    type: AST_NODE_TYPES.Literal,
    toString: () => 'null',
  }
}

/**
 * __Literal__
 *
 * Polymorphic helper for building a `Literal` node. Call it with a raw JS
 * primitive (`'x'`, `42`, `true`, `null`) or with a pre-built `WithoutType<…>`
 * node to construct the corresponding `StringLiteral`, `NumberLiteral`,
 * `BooleanLiteral`, `NullLiteral`, `BigIntLiteral`, or `RegExpLiteral`.
 *
 * Overloads are used so that call sites get a narrowed return type:
 * `literal('x')` is `StringableASTNode<StringLiteral>`, not a wide union —
 * this matters when passing the result into helpers that expect a specific
 * variant (e.g. `importDeclaration({ source: literal('x') })` where `source`
 * is typed as `StringLiteral`).
 */
export function literal(n: string): StringableASTNode<ESTree.StringLiteral>
export function literal(n: number): StringableASTNode<ESTree.NumberLiteral>
export function literal(n: boolean): StringableASTNode<ESTree.BooleanLiteral>
export function literal(n: null): StringableASTNode<ESTree.NullLiteral>
export function literal(
  n: WithoutType<ESTree.BigIntLiteral>
): StringableASTNode<ESTree.BigIntLiteral>
export function literal(
  n: WithoutType<ESTree.RegExpLiteral>
): StringableASTNode<ESTree.RegExpLiteral>
export function literal(
  n: WithoutType<ESTree.StringLiteral>
): StringableASTNode<ESTree.StringLiteral>
export function literal(
  n: WithoutType<ESTree.NumberLiteral>
): StringableASTNode<ESTree.NumberLiteral>
export function literal(
  n: WithoutType<ESTree.BooleanLiteral>
): StringableASTNode<ESTree.BooleanLiteral>
export function literal(
  n: WithoutType<ESTree.NullLiteral>
): StringableASTNode<ESTree.NullLiteral>
export function literal(
  n: string | number | boolean | null | WithoutType<ESTree.Literal>
): StringableASTNode<ESTree.Literal> {
  if (typeof n === 'string') {
    return stringLiteral({ value: n, raw: `'${n}'` })
  }

  if (typeof n === 'boolean') {
    return booleanLiteral(n)
  }

  if (typeof n === 'number') {
    return numberLiteral(n)
  }

  if (n === null) {
    return nullLiteral(n)
  }

  // At this point `n` is `WithoutType<Literal>` — a discriminated union across
  // the concrete literal variants. Dispatch by the discriminator field. The
  // `in` narrowing loses `WithoutType<…>` through the distributive intersection
  // produced by `Loose<…>`, so re-assert the concrete shape.
  if ('bigint' in n) {
    return bigIntLiteral(n as WithoutType<ESTree.BigIntLiteral>)
  }
  if ('regex' in n) {
    return regExpLiteral(n as WithoutType<ESTree.RegExpLiteral>)
  }
  if (typeof n.value === 'string') {
    return stringLiteral(n as WithoutType<ESTree.StringLiteral>)
  }
  if (typeof n.value === 'number') {
    return numberLiteral(n as WithoutType<ESTree.NumberLiteral>)
  }
  if (typeof n.value === 'boolean') {
    return booleanLiteral(n as WithoutType<ESTree.BooleanLiteral>)
  }
  if (n.value === null) {
    return nullLiteral(n as WithoutType<ESTree.NullLiteral>)
  }

  // Unreachable in well-typed callers — fall back to stringifying as a string
  // literal so this degrades gracefully at runtime.
  return stringLiteral(n as WithoutType<ESTree.StringLiteral>)
}

export const identifier = (
  param: WithoutType<ESTree.Identifier> | string
): StringableASTNode<ESTree.Identifier> => {
  const name = typeof param === 'string' ? param : param.name
  const other = typeof param === 'object' ? param : {}
  return {
    ...other,
    type: AST_NODE_TYPES.Identifier,
    name,
    toString: () => name,
  }
}

export const doWhileStatement: StringableASTNodeFn<ESTree.DoWhileStatement> = ({
  test,
  body,
  ...other
}) => ({
  ...other,
  test,
  body,
  type: AST_NODE_TYPES.DoWhileStatement,
  toString() {
    return `do ${node(body)} while (${node(test)})`
  },
})

export const whileStatement: StringableASTNodeFn<ESTree.WhileStatement> = ({
  test,
  body,
  ...other
}) => ({
  ...other,
  test,
  body,
  type: AST_NODE_TYPES.WhileStatement,
  toString() {
    return `while (${node(test)}) ${node(body)}`
  },
})

export const switchCase: StringableASTNodeFn<ESTree.SwitchCase> = ({
  consequent,
  test,
  ...other
}) => {
  return {
    ...other,
    consequent,
    test,
    type: AST_NODE_TYPES.SwitchCase,
    toString: () =>
      `${!test ? 'default' : `case ${node(test)}`}: ${consequent
        .map(node)
        .map(String)
        .join('; ')};`,
  }
}

export const switchStatement: StringableASTNodeFn<ESTree.SwitchStatement> = ({
  cases,
  discriminant,
  ...other
}) => ({
  ...other,
  toString: () => `switch (${node(discriminant)}) {
  ${cases.map(switchCase).join(DEFAULT_WHITESPACE)}\n}`,
  cases,
  discriminant,
  type: AST_NODE_TYPES.SwitchStatement,
})

export const templateLiteral: StringableASTNodeFn<ESTree.TemplateLiteral> = ({
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
    type: AST_NODE_TYPES.TemplateLiteral,
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

export const forStatement: StringableASTNodeFn<ESTree.ForStatement> = ({
  body,
  init,
  test,
  update,
  ...other
}) => ({
  ...other,
  init,
  body,
  test,
  update,
  type: AST_NODE_TYPES.ForStatement,
  toString: () =>
    `for (${init ? node(init) : ''};${test ? node(test) : ''};${
      update ? node(update) : ''
    }) ${node(body)}`,
})

export const forInStatement: StringableASTNodeFn<ESTree.ForInStatement> = ({
  body,
  left,
  right,
  ...other
}) => ({
  ...other,
  body,
  left,
  right,
  type: AST_NODE_TYPES.ForInStatement,
  toString: () => `for (${node(left)} in ${node(right)}) ${node(body)}`,
})

export const forOfStatement: StringableASTNodeFn<ESTree.ForOfStatement> = ({
  body,
  left,
  right,
  ...other
}) => ({
  ...other,
  body,
  left,
  right,
  type: AST_NODE_TYPES.ForOfStatement,
  toString: () => `for (${node(left)} of ${node(right)}) ${node(body)}`,
})

export const continueStatement: StringableASTNodeFn<
  ESTree.ContinueStatement
> = ({ label, ...other }) => ({
  ...other,
  toString: () => `continue${label ? ` ${node(label)}` : ''}`,
  label,
  type: AST_NODE_TYPES.ContinueStatement,
})

export const breakStatement: StringableASTNodeFn<ESTree.BreakStatement> = ({
  label,
  ...other
}) => ({
  ...other,
  toString: () => `break${label ? ` ${node(label)}` : ''}`,
  label,
  type: AST_NODE_TYPES.BreakStatement,
})

export const debuggerStatement: StringableASTNodeFn<
  ESTree.DebuggerStatement
> = (node) => ({
  ...node,
  toString: () => `debugger`,
  type: AST_NODE_TYPES.DebuggerStatement,
})

export const conditionalExpression: StringableASTNodeFn<
  ESTree.ConditionalExpression
> = ({ consequent, alternate, test, ...other }) => ({
  ...other,
  toString: () => `${node(test)} ? ${node(consequent)} : ${node(alternate)}`,
  consequent,
  alternate,
  test,
  type: AST_NODE_TYPES.ConditionalExpression,
})

export const assignmentExpression: StringableASTNodeFn<
  ESTree.AssignmentExpression
> = ({ left, right, operator, ...other }) => {
  return {
    ...other,
    type: AST_NODE_TYPES.AssignmentExpression,
    left,
    right,
    operator,
    toString: () => `${node(left)}${operator as string}${node(right)}`,
  }
}

export const awaitExpression: StringableASTNodeFn<ESTree.AwaitExpression> = ({
  argument,
  ...other
}) => ({
  ...other,
  toString: () => `await ${node(argument)}`,
  argument,
  type: AST_NODE_TYPES.AwaitExpression,
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
export const staticBlock: StringableASTNodeFn<ESTree.StaticBlock> = ({
  body,
  ...other
}) => {
  return {
    ...other,
    body,
    type: AST_NODE_TYPES.StaticBlock,
    toString: () =>
      `static {\n${body.map(node).map(String).join(DEFAULT_WHITESPACE)}\n}`,
  }
}

export const functionDeclaration: StringableASTNodeFn<
  ESTree.FunctionDeclaration
> = ({ body, async = false, id, generator = false, params, ...other }) => ({
  ...other,
  type: AST_NODE_TYPES.FunctionDeclaration,
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

export const methodOrPropertyFn = ({
  params,
  body,
}:
  | Loose<ESTree.FunctionExpression>
  | Loose<ESTree.TSEmptyBodyFunctionExpression>) => {
  return `(${params.map(node).join(', ')}) ${body ? node(body) : `{}`}`
}

export const methodDefinition: StringableASTNodeFn<ESTree.MethodDefinition> = ({
  computed,
  key,
  kind,
  value,
  ...other
}) => {
  // `MethodDefinition` is a union discriminated on `computed: boolean` — TS
  // can't narrow a runtime boolean to one variant, so cast the result.
  return {
    ...other,
    computed,
    key,
    kind,
    value,
    type: AST_NODE_TYPES.MethodDefinition,
    toString: () =>
      `${computed ? `[${node(key)}]` : node(key)} ${methodOrPropertyFn(value)}`,
  } as StringableASTNode<ESTree.MethodDefinition>
}

export const propertyDefinition: StringableASTNodeFn<
  ESTree.PropertyDefinition
> = ({ computed, key, static: staticKeyWord, value, ...other }) => {
  // `PropertyDefinition` is a union discriminated on `computed: boolean` —
  // cast the structural return to satisfy the union.
  return {
    ...other,
    computed,
    key,
    static: staticKeyWord,
    value,
    type: AST_NODE_TYPES.PropertyDefinition,
    toString: () => `UNIMPLEMENTED`,
  } as StringableASTNode<ESTree.PropertyDefinition>
}

export const classBody: StringableASTNodeFn<ESTree.ClassBody> = ({
  body,
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.ClassBody,
    body,
    toString: () =>
      body.length
        ? `${DEFAULT_WHITESPACE}${body
            .map(node)
            .map(String)
            .join(DEFAULT_WHITESPACE)}\n`
        : '',
  }
}

export const classDeclaration: StringableASTNodeFn<ESTree.ClassDeclaration> = ({
  superClass,
  id,
  body,
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.ClassDeclaration,
    superClass,
    body,
    id,
    toString: () =>
      `class${id ? ` ${node(id)}` : ''}${
        superClass ? ` extends ${node(superClass)}` : ''
      } {${node(body)}}`,
  }
}

export const classExpression: StringableASTNodeFn<ESTree.ClassExpression> = ({
  superClass,
  id,
  body,
  ...other
}) => {
  return {
    ...other,
    type: AST_NODE_TYPES.ClassExpression,
    superClass,
    body,
    id,
    toString: () =>
      String(classDeclaration({ superClass, id: id || null, body, ...other })),
  }
}

export const program: StringableASTNodeFn<ESTree.Program> = ({
  body,
  ...other
}) => ({
  ...other,
  type: AST_NODE_TYPES.Program,
  toString: () => body.map(node).map(String).join('\n'),
  body,
})

export const privateIdentifier: StringableASTNodeFn<
  ESTree.PrivateIdentifier
> = ({ name, ...other }) => ({
  ...other,
  type: AST_NODE_TYPES.PrivateIdentifier,
  name,
  toString: () => `#${name}`,
})

export const decorator: StringableASTNodeFn<ESTree.Decorator> = ({
  expression,
  ...other
}) => ({
  expression,
  ...other,
  type: AST_NODE_TYPES.Decorator,
  toString: () => `@${node(expression)}`,
})
