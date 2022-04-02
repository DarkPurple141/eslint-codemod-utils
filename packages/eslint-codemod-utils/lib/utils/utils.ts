import { JSXElement } from 'estree-jsx'
import type { EslintNode } from '../types'

export function isNode<T extends EslintNode>(node: T, type: unknown): boolean {
  return node.type === type
}

export function closestOfType<T extends EslintNode>(
  node: T,
  type: EslintNode['type']
): EslintNode | null {
  console.info(node)
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
