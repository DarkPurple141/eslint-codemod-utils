import {
  identity,
  jsxAttribute,
  jsxClosingElement,
  jsxElement,
  jsxExpressionContainer,
  jsxIdentifier,
  jsxMemberExpression,
  jsxOpeningElement,
  jsxSpreadAttribute,
  jsxText,
} from './jsx-nodes'

import {
  importDeclaration,
  callExpression,
  identifier,
  importSpecifier,
  literal,
  newExpression,
  thisExpression,
  whileStatement,
  switchStatement,
} from './nodes'

export const typeToHelperLookup = {
  // TODO implement
  JSXFragment: identity,
  // TODO implement
  JSXSpreadChild: identity,
  JSXExpressionContainer: jsxExpressionContainer,
  JSXClosingElement: jsxClosingElement,
  JSXOpeningElement: jsxOpeningElement,
  JSXElement: jsxElement,
  JSXText: jsxText,
  JSXSpreadAttribute: jsxSpreadAttribute,
  JSXAttribute: jsxAttribute,
  JSXMemberExpression: jsxMemberExpression,
  JSXIdentifier: jsxIdentifier,
  Identifier: identifier,
  Literal: literal,
  ImportSpecifier: importSpecifier,
  ImportDeclaration: importDeclaration,
  ThisExpression: thisExpression,
  NewExpression: newExpression,
  SwitchStatement: switchStatement,
  FunctionExpression: identity,
  CallExpression: callExpression,
  WhileStatement: whileStatement,
} as const
