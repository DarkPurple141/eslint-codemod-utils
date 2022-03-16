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
  JSXText,
  JSXSpreadAttribute,
} from 'estree-jsx'

import { typeToHelperLookup } from './constants'
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
            /* @ts-expect-error */
            .map((child) => typeToHelperLookup[child.type](child))
            .map(String)
            .join(spacing) +
          '\n'
        : ''
    }${closingElement ? `${indent}${jsxClosingElement(closingElement)}` : ''}`
  },
})

/**
 * __JSXSpreadAttribute__
 *
 * @example Usage
 *
 * ```js
 * import { jsxSpreadAttribute, identifier } from 'eslint-codemod-utils'
 *
 * const spreadAttr = jsxSpreadAttribute({
 *  argument: identifier({ name: 'spread' })
 * })
 * ```
 * @example
 *
 * ```js
 * // Produces a spread attribute
 * <div {...spread}>
 *      ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃
 * ```
 *
 * @returns {JSXSpreadAttribute}
 */
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
}) => {
  return {
    type: 'JSXClosingElement',
    __pragma: 'ecu',
    // @ts-ignore // TODO revist this later
    name: typeToHelperLookup[name.type](name),
    toString: () => `</${name}>`,
  }
}

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
              ? typeToHelperLookup.Literal(value)
              : value.type === 'JSXElement'
              ? jsxElement(value)
              : jsxExpressionContainer(value as JSXExpressionContainer)
          }`
        : ''
    }`,
})
