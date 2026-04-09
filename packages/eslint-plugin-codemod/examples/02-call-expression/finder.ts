import { AST_NODE_TYPES, isNodeOfType, TSESTree } from 'eslint-codemod-utils'

export function findF(node: TSESTree.CallExpression) {
  if (!isNodeOfType(node.callee, AST_NODE_TYPES.Identifier)) {
    return false
  }

  if (node.callee.name !== 'f') {
    return false
  }

  if (node.arguments.length < 1) {
    return false
  }

  if (isNodeOfType(node.arguments[0], AST_NODE_TYPES.ObjectExpression)) {
    return false
  }

  return true
}
