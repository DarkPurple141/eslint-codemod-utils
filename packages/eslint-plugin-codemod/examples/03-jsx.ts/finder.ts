import { AST_NODE_TYPES, isNodeOfType, TSESTree } from 'eslint-codemod-utils'

export function findModal(node: TSESTree.JSXElement) {
  if (!isNodeOfType(node, AST_NODE_TYPES.JSXElement)) {
    return false
  }

  if (!isNodeOfType(node.openingElement.name, AST_NODE_TYPES.JSXIdentifier)) {
    return false
  }

  if (node.openingElement.name.name !== 'Modal') {
    return false
  }

  return node.openingElement.attributes.some((innerNode) => {
    return (
      isNodeOfType(innerNode, AST_NODE_TYPES.JSXAttribute) &&
      isNodeOfType(innerNode.name, AST_NODE_TYPES.JSXIdentifier) &&
      innerNode.name.name === 'title'
    )
  })
}
