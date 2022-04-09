import type { JSXElement, JSXIdentifier } from 'estree-jsx'
import type { EslintCodemodUtilsBaseNode, EslintNode } from '../types'

export function isNode<
  T extends EslintCodemodUtilsBaseNode,
  K extends EslintCodemodUtilsBaseNode
>(node: T, type: K['type']) {
  return node.type === type
}

export function closestOfType<T extends EslintNode>(
  node: T,
  type: EslintNode['type']
): EslintNode | null {
  if (isNode(node, type)) {
    return node
  }

  if (node.parent) {
    return closestOfType(node.parent, type)
  }

  return null
}

export function hasJSXAttribute(node: JSXElement, attributeName: string) {
  if (!node.openingElement) return false

  if (!node.openingElement.attributes.length) return false

  return node.openingElement.attributes.some(
    (attr) => attr.type === 'JSXAttribute' && attr.name.name === attributeName
  )
}

function isJSXIdentifier(node: JSXIdentifier, id: string) {
  return node.name === id
}

export function hasJSXChild(
  node: JSXElement,
  childIdentifier: string
): boolean {
  const jsxIdentifierMatch =
    node.openingElement.name.type === 'JSXIdentifier' &&
    node.openingElement.name.name &&
    isJSXIdentifier(node.openingElement.name, childIdentifier)

  return (
    jsxIdentifierMatch ||
    Boolean(
      node.children &&
        node.children
          .filter((child): child is JSXElement => isNode(child, 'JSXElement'))
          .find((child) => hasJSXChild(child, childIdentifier))
    )
  )
}
