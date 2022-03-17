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
  functionDeclaration,
  expressionStatement,
  variableDeclaration,
  continueStatement,
  classDeclaration,
  memberExpression,
  arrayExpression,
  variableDeclarator,
  classExpression,
} from './nodes'

export const typeToHelperLookup = new Proxy(
  {
    ArrayExpression: arrayExpression,
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
    MemberExpression: memberExpression,
    NewExpression: newExpression,
    SwitchStatement: switchStatement,
    FunctionExpression: identity,
    FunctionDeclaration: functionDeclaration,
    CallExpression: callExpression,
    ContinueStatement: continueStatement,
    ClassDeclaration: classDeclaration,
    ClassExpression: classExpression,
    WhileStatement: whileStatement,
    ExpressionStatement: expressionStatement,
    VariableDeclaration: variableDeclaration,
    VariableDeclarator: variableDeclarator,
  } as const,
  {
    // dynamic getter will fail and provide debug information
    get(target, name, receiver) {
      if (Reflect.has(target, name)) {
        return Reflect.get(target, name, receiver)
      }

      throw new Error(`ecu: key ${name.toString()} missing in typeMap`)
    },
  }
)
