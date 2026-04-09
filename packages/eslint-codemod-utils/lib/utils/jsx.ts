import {
  TSESTree as ESTree,
  jsxAttribute,
  jsxClosingElement,
  jsxElement,
  jsxIdentifier,
  jsxOpeningElement,
  literal,
} from '..'
import type { Loose, StringableASTNode } from '../types'

/**
 * A `jsx(…)` runtime-style factory. Accepts a `type` (string or function
 * component) plus props/children and returns a `StringableASTNode<JSXElement>`.
 *
 * `children` are typed as `JsxChild` so that both raw string/number text and
 * nested `jsx()` results can be passed through uniformly.
 */
type JsxProps = Record<string, unknown> & {
  children?: JsxChild | JsxChild[]
}
type JsxChild =
  | StringableASTNode<ESTree.JSXElement>
  | Loose<ESTree.JSXChild>
  | string
  | number
  | false
  | null
  | undefined

export const jsx = function (
  type: string | ((...args: any[]) => StringableASTNode<ESTree.JSXElement>),
  props: JsxProps,
  ...children: JsxChild[]
): StringableASTNode<ESTree.JSXElement> | undefined {
  if (!type) {
    return
  }

  if (typeof type === 'function') {
    const existing = Array.isArray(props.children)
      ? props.children
      : props.children
      ? [props.children]
      : []
    const componentProps = {
      ...props,
      children: [...existing, ...children],
    }
    return type(componentProps)
  }

  const filteredChildren = children.filter(
    (child): child is Exclude<JsxChild, false | null | undefined> =>
      Boolean(child)
  )
  const selfClosing = filteredChildren.length === 0

  const name = jsxIdentifier(type)
  return jsxElement({
    openingElement: jsxOpeningElement({
      name,
      selfClosing,
      attributes: Object.keys(props)
        .filter((key) => key !== 'children')
        .map((prop) => {
          return jsxAttribute({
            name: jsxIdentifier(prop),
            value: literal('hello'),
          })
        }),
    }),
    closingElement: selfClosing ? null : jsxClosingElement({ name }),
    children: filteredChildren
      .map((child): Loose<ESTree.JSXChild> | undefined => {
        if (typeof child === 'string' || typeof child === 'number') {
          return undefined
        }
        return child
      })
      .filter((child): child is Loose<ESTree.JSXChild> => Boolean(child)),
  })
}
