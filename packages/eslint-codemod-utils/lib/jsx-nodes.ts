import type * as estree from 'estree-jsx'
import { DEFAULT_WHITESPACE } from './constants'

import type {
  StringableASTNode,
  StringableASTNodeFn,
  WithoutType,
} from './types'
import { node } from './utils/node'

export const whiteSpace = (loc?: estree.SourceLocation) =>
  ''.padStart(loc?.start?.column || 0, ' ')

export const comments = (comments: estree.Comment[] = []) => ({
  comments,
  toString: () =>
    comments.length ? `${comments.map(comment).join('\n')}\n` : '',
})

export const comment = ({ value, type, loc, ...other }: estree.Comment) => ({
  ...other,
  value,
  type,
  toString: () =>
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    whiteSpace(loc!) + (type === 'Line' ? `// ${value}` : `/* ${value} */`),
})

/**
 * __JSXIdentifier__
 *
 * @param param Takes a string or the shape of a {estree.JSXIdentifier} node
 * @returns {estree.JSXIdentifier} node
 */
export const jsxIdentifier = (
  param: WithoutType<estree.JSXIdentifier> | string
): StringableASTNode<estree.JSXIdentifier> => {
  const name = typeof param === 'string' ? param : param.name
  const other = typeof param === 'object' ? param : {}
  return {
    ...other,
    name,
    type: 'JSXIdentifier',
    toString: () => name,
  }
}

/**
 * __JSXOpeningFragment__
 *
 * @example
 * ```ts
 * <>hello</>
 * ^^
 * ```
 */
export const jsxOpeningFragment: StringableASTNodeFn<
  estree.JSXOpeningFragment
> = ({ ...other }) => {
  return {
    ...other,
    type: 'JSXOpeningFragment',
    toString: () => `<>`,
  }
}

/**
 * __JSXClosingFragment__
 *
 * @example
 * ```ts
 * <>hello</>
 *        ^^
 * ```
 */
export const jsxClosingFragment: StringableASTNodeFn<
  estree.JSXClosingFragment
> = ({ ...other }) => {
  return {
    ...other,
    type: 'JSXClosingFragment',
    toString: () => `</>`,
  }
}

/**
 * __JSXFragment__
 *
 * @example
 * ```ts
 * <>hello</>
 * ^^^^^^^^^^
 * ```
 */
export const jsxFragment: StringableASTNodeFn<estree.JSXFragment> = ({
  openingFragment,
  closingFragment,
  children,
  ...other
}) => ({
  ...other,
  openingFragment,
  closingFragment,
  children,
  type: 'JSXFragment',
  toString: () => {
    return `${node(openingFragment)}${children
      .map(node)
      .map(String)
      .join('\n')}${node(closingFragment)}`
  },
})

/**
 * __JSXSpreadChild__
 *
 * @example
 * ```ts
 * <>{...child}</>
 *   ^^^^^^^^^^
 * ```
 */
export const jsxSpreadChild: StringableASTNodeFn<estree.JSXSpreadChild> = ({
  expression,
  ...other
}) => {
  return {
    ...other,
    expression,
    type: 'JSXSpreadChild',
    toString: () => `{...${node(expression)}}`,
  }
}

export const jsxMemberExpression: StringableASTNodeFn<
  estree.JSXMemberExpression
> = ({ object, property }) => ({
  type: 'JSXMemberExpression',
  object,
  property,
  toString: () =>
    `${
      object.type === 'JSXIdentifier'
        ? jsxIdentifier(object)
        : jsxMemberExpression(object)
    }.${jsxIdentifier(property)}`,
})

const DEFAULT_LOC: estree.SourceLocation = {
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
export const jsxElement: StringableASTNodeFn<
  estree.JSXElement,
  'children' | 'closingElement'
> = ({
  openingElement,
  closingElement = null,
  children = [],
  loc = DEFAULT_LOC,
  ...other
}) => ({
  ...other,
  openingElement,
  closingElement,
  children,
  loc,
  type: 'JSXElement',
  toString: (): string => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const indent = whiteSpace(loc!)
    const spacing = DEFAULT_WHITESPACE + indent
    return `${jsxOpeningElement(openingElement)}${
      children.length
        ? spacing + children.map(node).map(String).join(spacing) + '\n'
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
 * @returns {estree.JSXSpreadAttribute}
 */
export const jsxSpreadAttribute: StringableASTNodeFn<
  estree.JSXSpreadAttribute
> = ({ argument, ...other }) => ({
  ...other,
  type: 'JSXSpreadAttribute',
  argument,
  toString: () => `{...${node(argument)}}`,
})

export const jsxOpeningElement: StringableASTNodeFn<
  estree.JSXOpeningElement,
  'attributes' | 'selfClosing'
> = ({
  name,
  attributes = [],
  selfClosing = false,
  leadingComments = [],
  ...other
}) => ({
  ...other,
  type: 'JSXOpeningElement',
  name,
  attributes,
  selfClosing,
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
        ? ' ' + attributes.map(node).map(String).join(' ')
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
 * @returns {estree.JSXClosingElement}
 */
export const jsxClosingElement: StringableASTNodeFn<
  estree.JSXClosingElement
> = ({ name, ...other }) => {
  return {
    ...other,
    type: 'JSXClosingElement',
    name,
    toString: () => `</${node(name)}>`,
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
 * @returns {estree.JSXText}
 */
export const jsxText: StringableASTNodeFn<estree.JSXText> = ({
  value,
  raw,
  ...other
}) => ({
  ...other,
  type: 'JSXText',
  value,
  raw,
  toString: () => value,
})

/**
 * __JSXEmptyExpression__
 *
 * @example
 *
 * ```tsx
 * <SomeJSX attribute={} />
 *                    ^^
 * ```
 *
 * @returns {estree.JSXEmptyExpression}
 */
export const jsxEmptyExpression: StringableASTNodeFn<
  estree.JSXEmptyExpression
> = (node) => {
  return {
    ...node,
    type: 'JSXEmptyExpression',
    toString: () => `{}`,
  }
}

/**
 * __JSXExpressionContainer__
 *
 * @example
 *
 * ```tsx
 * <SomeJSX attribute={someValue} />
 *                    ^^^^^^^^^^^
 * ```
 *
 * @returns {estree.JSXExpressionContainer}
 */
export const jsxExpressionContainer: StringableASTNodeFn<
  estree.JSXExpressionContainer
> = ({ expression, ...other }) => ({
  ...other,
  expression,
  type: 'JSXExpressionContainer',
  toString: () => {
    if (expression.type === 'JSXEmptyExpression') {
      return '{}'
    }

    // @ts-ignore This should never happen but makes the API more accomodating
    if (expression.type === 'JSXExpressionContainer') {
      return String(jsxExpressionContainer(expression))
    }

    return `{${node(expression)}}`
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
export const jsxAttribute: StringableASTNodeFn<estree.JSXAttribute> = ({
  name,
  value,
  ...other
}) => ({
  ...other,
  type: 'JSXAttribute',
  name,
  value,
  toString: () => `${name.name}${value ? `=${node(value)}` : ''}`,
})
