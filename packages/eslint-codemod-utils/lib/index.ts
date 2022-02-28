import type {
  JSXOpeningElement,
  JSXClosingElement,
  JSXMemberExpression,
  JSXIdentifier,
  Comment,
  SourceLocation,
  JSXElement,
  JSXAttribute,
  JSXExpressionContainer,
  Literal,
  Identifier,
  JSXText,
  JSXSpreadAttribute,
  ImportDeclaration,
  ImportSpecifier,
  ImportDefaultSpecifier,
  ThisExpression,
  NewExpression,
  SimpleCallExpression,
} from 'estree-jsx'
import type { StringableASTNode } from './types'

export const identity = <T>(node: T) => node

export const whiteSpace = (loc: SourceLocation) =>
  ''.padStart(loc?.start?.column || 0, ' ')

export const comments = (comments: Comment[] = []) => ({
  comments,
  toString: () =>
    comments.length ? `${comments.map(comment).join('\n')}\n` : '',
})

export const comment = ({ value, type, loc }: Comment) => ({
  value,
  type,
  __pragma: 'ecu',
  toString: () =>
    whiteSpace(loc) + (type === 'Line' ? `// ${value}` : `/* ${value} */`),
})

export const importDefaultSpecifier: StringableASTNode<
  ImportDefaultSpecifier
> = ({ local }) => ({
  __pragma: 'ecu',
  local,
  type: 'ImportDefaultSpecifier',
  toString: () => local.name,
})

export const importSpecifier: StringableASTNode<ImportSpecifier> = ({
  imported,
  local,
}) => ({
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

export const importDeclaration: StringableASTNode<ImportDeclaration> = ({
  specifiers,
  source,
}) => ({
  __pragma: 'ecu',
  type: 'ImportDeclaration',
  specifiers,
  source,
  toString: () => {
    if (!specifiers.length) {
      return `import '${source.value}'`
    }

    const defaultSpecifier = specifiers.find(
      (spec): spec is ImportDefaultSpecifier =>
        spec.type === 'ImportDefaultSpecifier'
    )
    const otherSpecifiers = specifiers.filter(
      (spec): spec is ImportSpecifier => spec.type === 'ImportSpecifier'
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

export const literal: StringableASTNode<Literal> = ({
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

export const identifier: StringableASTNode<Identifier> = ({ name }) => ({
  type: 'Identifier',
  __pragma: 'ecu',
  name,
  toString: () => name,
})

export const jsxIdentifier: StringableASTNode<JSXIdentifier> = ({ name }) => ({
  name,
  type: 'JSXIdentifier',
  __pragma: 'ecu',
  toString: () => name,
})

export const jsxMemberExpression: StringableASTNode<JSXMemberExpression> = ({
  object,
  property,
}) => ({
  type: 'JSXMemberExpression',
  __pragma: 'ecu',
  object,
  property,
  toString: () =>
    `${
      object.type === 'JSXIdentifier'
        ? jsxIdentifier(object)
        : jsxMemberExpression(object)
    }.${jsxIdentifier(property)}`,
})

const DEFAULT_LOC: SourceLocation = {
  start: {
    column: 0,
    line: 0,
  },
  end: {
    column: 0,
    line: 0,
  },
}

/**
 * __JSXElement__
 *
 * @example
 *
 * Usage
 * ```
 * import { jsxElement, jsxOpeningElement, jsxClosingElement, identifier } from 'eslint-codemod-utils'
 *
 * const modalName = identifier({ name: 'Modal' })
 * const modal = jsxElement({
 *  openingElement: jsxOpeningElement({ name: modalName, selfClosing: false }),
 *  closingElement: jsxClosingElement({ name: modalName }),
 * })
 * ```
 *
 * @example
 *
 * Produces
 * ```js
 * <Modal></Modal>
 * ```
 *
 * @returns {JSXElement}
 */
export const jsxElement: StringableASTNode<JSXElement> = ({
  openingElement,
  closingElement,
  children = [],
  loc = DEFAULT_LOC,
}) => ({
  openingElement,
  closingElement,
  children,
  loc,
  type: 'JSXElement',
  __pragma: 'ecu',
  toString: (): string => {
    const indent = whiteSpace(loc)
    const spacing = '\n  ' + indent
    return `${jsxOpeningElement(openingElement)}${
      children.length
        ? spacing +
          children
            // @ts-expect-error TODO revisit
            .map((child) => typeToHelperLookup[child.type](child))
            .map(String)
            .join(spacing) +
          '\n'
        : ''
    }${closingElement ? `${indent}${jsxClosingElement(closingElement)}` : ''}`
  },
})

export const newExpression: StringableASTNode<NewExpression> = (node) => ({
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
export const callExpression: StringableASTNode<SimpleCallExpression> = ({
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

export const jsxSpreadAttribute: StringableASTNode<JSXSpreadAttribute> = ({
  argument,
}) => ({
  __pragma: 'ecu',
  type: 'JSXSpreadAttribute',
  argument,
  // @ts-ignore TODO fix this when mapping is complete
  toString: () => `{...${typeToHelperLookup[argument.type](argument)}}`,
})

export const jsxOpeningElement: StringableASTNode<JSXOpeningElement> = ({
  name,
  attributes = [],
  selfClosing = false,
  leadingComments = [],
}) => ({
  type: 'JSXOpeningElement',
  name,
  attributes,
  selfClosing,
  __pragma: 'ecu',
  toString: () =>
    `${comments(leadingComments)}<${
      name.type === 'JSXIdentifier'
        ? jsxIdentifier(name)
        : name.type === 'JSXMemberExpression'
        ? jsxMemberExpression(name)
        : // namespaced name not yet implemeneted
          name
    }${
      attributes && attributes.length
        ? ' ' +
          attributes
            .map((attr) => {
              if ('__pragma' in attr) {
                return attr
                // TS wanted this extra branch :thinking
              } else if (attr.type === 'JSXAttribute') {
                return typeToHelperLookup[attr.type](attr)
              } else {
                return typeToHelperLookup[attr.type](attr)
              }
            })
            .map(String)
            .join(' ')
        : ''
    }${selfClosing ? ' />' : '>'}`,
})

/**
 * __JSXClosingElement__
 *
 * @example
 *
 * ```js
 * // The below jsx div is a closing element.
 * // A closing element is expected to match a valid opening element of the same name
 * </div>
 * ```
 *
 * @returns {JSXClosingElement}
 */
export const jsxClosingElement: StringableASTNode<JSXClosingElement> = ({
  name,
}) => ({
  type: 'JSXClosingElement',
  __pragma: 'ecu',
  // @ts-ignore // TODO revist this later
  name: typeToHelperLookup[name.type](name),
  toString: () => `</${name}>`,
})

/**
 * __JSXText__
 *
 * @example
 *
 * ```js
 * // In the below jsx, the string, "hello world" is considered JSXText.
 * // JSXText can be a any number, boolean, or string value.
 * <div>hello world</div>
 * ```
 *
 * @returns {JSXText}
 */
export const jsxText: StringableASTNode<JSXText> = ({ value, raw }) => ({
  type: 'JSXText',
  value,
  raw,
  __pragma: 'ecu',
  toString: () => value,
})

export const jsxExpressionContainer: StringableASTNode<
  JSXExpressionContainer
> = ({ expression }) => ({
  expression,
  type: 'JSXExpressionContainer',
  __pragma: 'ecu',
  toString: () => {
    if (expression.type === 'JSXEmptyExpression') {
      return '{}'
    }

    // @ts-ignore This should never happen but makes the API more accomodating
    if (expression.type === 'JSXExpressionContainer') {
      return String(jsxExpressionContainer(expression))
    }

    // @ts-expect-error TODO this is because the lookup is incomplete
    const expressionType = typeToHelperLookup[expression.type]

    if (expressionType) {
      // @ts-expect-error
      return `{${typeToHelperLookup[expression.type](expression)}}`
    }

    throw new Error(
      `eslint-codemod-utils: Unknown node type ${expression.type}`
    )
  },
})

/**
 * __JSXAttribute__
 *
 * @example
 *
 * ```js
 * // In the below jsx, `a`, `b` and `c` reflect different valid
 * // jsx attributes. There values can come in many forms.
 * <div a={10} b="string" c={object} />
 * ```
 *
 * @returns {JSXAttribute}
 */
export const jsxAttribute: StringableASTNode<JSXAttribute> = ({
  name,
  value,
}) => ({
  type: 'JSXAttribute',
  __pragma: 'ecu',
  name,
  value,
  toString: () =>
    `${name.name}${
      value
        ? `=${
            value.type === 'Literal'
              ? literal(value)
              : value.type === 'JSXElement'
              ? jsxElement(value)
              : jsxExpressionContainer(value as JSXExpressionContainer)
          }`
        : ''
    }`,
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
 * @returns {ThisExpression}
 */
export const thisExpression: StringableASTNode<ThisExpression> = (node) => ({
  ...node,
  type: 'ThisExpression',
  __pragma: 'ecu',
  toString: () => `this`,
})

const typeToHelperLookup = {
  // TODO implement
  JSXFragment: identity,
  // TODO implement
  JSXSpreadChild: identity,
  JSXExpressionContainer: jsxExpressionContainer,
  JSXElement: jsxElement,
  JSXText: jsxText,
  JSXSpreadAttribute: jsxSpreadAttribute,
  JSXAttribute: jsxAttribute,
  JSXMemberExpression: jsxMemberExpression,
  JSXIdentifier: jsxIdentifier,
  Identifier: identifier,
  Literal: literal,
  ImportSpecifier: importSpecifier,
  ThisExpression: thisExpression,
  NewExpression: newExpression,
  // TODO implement
  SwitchStatement: identity,
  FunctionExpression: identity,
  CallExpression: callExpression,
} as const
