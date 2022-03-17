import {
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
  objectExpression,
  emptyStatement,
  spreadElement,
  arrowFunctionExpression,
} from './nodes'
import { identity } from './utils/identity'

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
    JSXNamespacedName: identity,
    JSXIdentifier: jsxIdentifier,
    ArrowFunctionExpression: arrowFunctionExpression,
    Identifier: identifier,
    Literal: literal,
    ImportSpecifier: importSpecifier,
    ImportDeclaration: importDeclaration,
    ThisExpression: thisExpression,
    ObjectExpression: objectExpression,
    MemberExpression: memberExpression,
    NewExpression: newExpression,
    SwitchStatement: switchStatement,
    EmptyStatement: emptyStatement,
    FunctionExpression: identity,
    FunctionDeclaration: functionDeclaration,
    CallExpression: callExpression,
    ContinueStatement: continueStatement,
    ClassDeclaration: classDeclaration,
    ClassExpression: classExpression,
    Super: identity,
    SpreadElement: spreadElement,
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
