import type * as ESTree from 'estree-jsx'
import { jsxAttribute, jsxElement, jsxIdentifier, jsxOpeningElement } from '..'

/**
 * Adds a prop to a JSXElement.
 *
 * @author Sam Scheding
 * @example
 * ```
 *  const boxNode = jsxElement({ ...node })
 *  console.log(boxNode.toString()) // --> "<Box></Box>"
 *
 *  const boxNodeWithProp = insertJSXAttribute(node, 'display', 'block')
 *  console.log(boxNodeWithProp.toString()) // --> "<Box display='block'></Box>"
 * ```
 */
export function insertJSXAttribute(
  node: ESTree.JSXElement,
  propName: string,
  propValue: ESTree.JSXAttribute['value']
): ESTree.JSXElement {
  const { openingElement } = node
  const { attributes = [] } = openingElement
  return jsxElement({
    ...node,
    openingElement: jsxOpeningElement({
      ...openingElement,
      attributes: [
        ...attributes,
        jsxAttribute({
          name: jsxIdentifier(propName),
          value: propValue,
        }),
      ],
    }),
  })
}
