import { AST_NODE_TYPES, TSESTree as ESTree } from '@typescript-eslint/types'
import { DEFAULT_WHITESPACE } from './constants'

import type {
  StringableASTNode,
  StringableASTNodeFn,
  WithoutType,
} from './types'
import { isNodeOfType } from './utils'
import { node } from './utils/node'

export const whiteSpace = (loc?: ESTree.SourceLocation) =>
  ''.padStart(loc?.start?.column || 0, ' ')

export const comments = (comments: ESTree.Comment[] = []) => ({
  comments,
  toString: () =>
    comments.length ? `${comments.map(comment).join('\n')}\n` : '',
})

export const comment = ({ value, type, loc, ...other }: ESTree.Comment) => ({
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
 * @param param Takes a string or the shape of a {ESTree.JSXIdentifier} node
 * @returns {ESTree.JSXIdentifier} node
 */
export const jsxIdentifier = (
  param: WithoutType<ESTree.JSXIdentifier> | string
): StringableASTNode<ESTree.JSXIdentifier> => {
  const name = typeof param === 'string' ? param : param.name
  const other = typeof param === 'object' ? param : ({} as any)
  return {
    ...other,
    name,
    type: AST_NODE_TYPES.JSXIdentifier,
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
  ESTree.JSXOpeningFragment
> = ({ ...other }) => {
  return {
    ...other,
    type: AST_NODE_TYPES.JSXOpeningFragment,
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
  ESTree.JSXClosingFragment
> = ({ ...other }) => {
  return {
    ...other,
    type: AST_NODE_TYPES.JSXClosingFragment,
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
export const jsxFragment: StringableASTNodeFn<ESTree.JSXFragment> = ({
  openingFragment,
  closingFragment,
  children,
  ...other
}) => ({
  ...other,
  openingFragment,
  closingFragment,
  children,
  type: AST_NODE_TYPES.JSXFragment,
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
export const jsxSpreadChild: StringableASTNodeFn<ESTree.JSXSpreadChild> = ({
  expression,
  ...other
}) => {
  return {
    ...other,
    expression,
    type: AST_NODE_TYPES.JSXSpreadChild,
    toString: () => `{...${node(expression)}}`,
  }
}

export const jsxMemberExpression: StringableASTNodeFn<
  ESTree.JSXMemberExpression
> = ({ object, property, ...other }) => ({
  ...other,
  type: AST_NODE_TYPES.JSXMemberExpression,
  object,
  property,
  toString: () =>
    `${
      isNodeOfType(object, AST_NODE_TYPES.JSXIdentifier)
        ? jsxIdentifier(object)
        : node(object)
    }.${jsxIdentifier(property)}`,
})

const DEFAULT_LOC: ESTree.SourceLocation = {
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
export const jsxElement: StringableASTNodeFn<ESTree.JSXElement> = ({
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
  type: AST_NODE_TYPES.JSXElement,
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
 *   argument: identifier({ name: 'spread' })
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
 * @returns {ESTree.JSXSpreadAttribute}
 */
export const jsxSpreadAttribute: StringableASTNodeFn<
  ESTree.JSXSpreadAttribute
> = ({ argument, ...other }) => ({
  ...other,
  type: AST_NODE_TYPES.JSXSpreadAttribute,
  argument,
  toString: () => `{...${node(argument)}}`,
})

export const jsxOpeningElement: StringableASTNodeFn<
  ESTree.JSXOpeningElement
> = ({ name, attributes = [], selfClosing = false, ...other }) => ({
  ...other,
  type: AST_NODE_TYPES.JSXOpeningElement,
  name,
  attributes,
  selfClosing,
  toString: () =>
    `<${
      name.type === AST_NODE_TYPES.JSXIdentifier
        ? jsxIdentifier(name)
        : name.type === AST_NODE_TYPES.JSXMemberExpression
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
 * @returns {ESTree.JSXClosingElement}
 */
export const jsxClosingElement: StringableASTNodeFn<
  ESTree.JSXClosingElement
> = ({ name, ...other }) => {
  return {
    ...other,
    type: AST_NODE_TYPES.JSXClosingElement,
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
 * @returns {ESTree.JSXText}
 */
export const jsxText: StringableASTNodeFn<ESTree.JSXText> = ({
  value,
  raw,
  ...other
}) => ({
  ...other,
  type: AST_NODE_TYPES.JSXText,
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
 * @returns {ESTree.JSXEmptyExpression}
 */
export const jsxEmptyExpression: StringableASTNodeFn<
  ESTree.JSXEmptyExpression
> = (node) => {
  return {
    ...node,
    type: AST_NODE_TYPES.JSXEmptyExpression,
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
 * @returns {ESTree.JSXExpressionContainer}
 */
export const jsxExpressionContainer: StringableASTNodeFn<
  ESTree.JSXExpressionContainer
> = ({ expression, ...other }) => ({
  ...other,
  expression,
  type: AST_NODE_TYPES.JSXExpressionContainer,
  toString: () => {
    if (isNodeOfType(expression, AST_NODE_TYPES.JSXEmptyExpression)) {
      return '{}'
    }

    if (isNodeOfType(expression, AST_NODE_TYPES.JSXExpressionContainer)) {
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
export const jsxAttribute: StringableASTNodeFn<ESTree.JSXAttribute> = ({
  name,
  value,
  ...other
}) => ({
  ...other,
  type: AST_NODE_TYPES.JSXAttribute,
  name,
  value,
  toString: () => `${name.name}${value ? `=${node(value)}` : ''}`,
})
