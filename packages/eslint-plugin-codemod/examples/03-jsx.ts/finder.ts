import { isNodeOfType, JSXElement } from 'eslint-codemod-utils'

export function findModal(node: JSXElement) {
  if (!isNodeOfType(node, 'JSXElement')) {
    return false
  }

  if (!isNodeOfType(node.openingElement.name, 'JSXIdentifier')) {
    return false
  }

  if (node.openingElement.name.name !== 'Modal') {
    return false
  }

  return node.openingElement.attributes.some((innerNode) => {
    return (
      isNodeOfType(innerNode, 'JSXAttribute') &&
      isNodeOfType(innerNode.name, 'JSXIdentifier') &&
      innerNode.name.name === 'title'
    )
  })
}
