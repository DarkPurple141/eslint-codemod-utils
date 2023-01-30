import type { JSXElement } from 'estree-jsx'
import {
  jsxAttribute,
  jsxClosingElement,
  jsxElement,
  jsxIdentifier,
  jsxOpeningElement,
  literal,
} from '..'
import type { StringableASTNode } from '../types'

export const jsx = function (
  type: string | ((...args: any[]) => StringableASTNode<JSXElement>),
  props: Record<string, unknown>,
  ...children: any[]
): StringableASTNode<JSXElement> | undefined {
  if (!type) {
    return
  }

  if (typeof type === 'function') {
    // merge props and children
    const componentProps = {
      ...props,
      // @ts-expect-error
      children: (props.children || []).concat(children),
    }
    // render the function
    const element = type(componentProps)
    return element
  }

  const filteredChildren = children.filter(Boolean)
  const selfClosing = !Boolean(filteredChildren.length)

  const name = jsxIdentifier(type)
  return jsxElement({
    openingElement: jsxOpeningElement({
      name,
      selfClosing,
      attributes: Object.keys(props).map((prop) => {
        return jsxAttribute({
          name: jsxIdentifier(prop),
          value: literal('hello'),
        })
      }),
    }),
    closingElement: selfClosing ? null : jsxClosingElement({ name }),
    // @ts-expect-error
    children: filteredChildren.map(jsx),
  })
}
