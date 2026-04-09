import { TSESTree as ESTree } from '@typescript-eslint/types'
import { jsxAttribute, jsxElement, jsxIdentifier, jsxOpeningElement } from '..'
import type { Loose, StringableASTNode } from '../types'

/**
 * Adds a prop to a JSXElement.
 *
 * Returns a `StringableASTNode<JSXElement>` so that callers can immediately
 * `.toString()` the result inside an ESLint fixer, and so the result can be
 * composed with other node helpers without forcing callers to supply a
 * synthetic `loc`/`range`.
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
  propValue: Loose<ESTree.JSXAttribute['value']>
): StringableASTNode<ESTree.JSXElement> {
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
