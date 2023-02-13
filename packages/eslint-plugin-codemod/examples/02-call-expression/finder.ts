import { CallExpression, isNodeOfType } from 'eslint-codemod-utils'

export function findF(node: CallExpression) {
  if (!isNodeOfType(node.callee, 'Identifier')) {
    return false
  }

  if (node.callee.name !== 'f') {
    return false
  }

  if (node.arguments.length < 1) {
    return false
  }

  if (isNodeOfType(node.arguments[0], 'ObjectExpression')) {
    return false
  }

  return true
}
