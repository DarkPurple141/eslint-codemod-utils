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
  yieldExpression,
  unaryExpression,
  blockStatement,
  objectPattern,
  staticBlock,
  debuggerStatement,
  forStatement,
  binaryExpression,
  updateExpression,
  returnStatement,
  exportNamedDeclaration,
  exportSpecifier,
  exportDefaultDeclaration,
  exportAllDeclaration,
  logicalExpression,
  functionExpression,
} from './nodes'
import { identity } from './utils/identity'

export const typeToHelperLookup = new Proxy(
  {
    // TODO implement
    AssignmentProperty: identity,
    // TODO implement
    AssignmentExpression: identity,
    ArrayExpression: arrayExpression,
    BlockStatement: blockStatement,
    BinaryExpression: binaryExpression,
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
    FunctionExpression: functionExpression,
    Identifier: identifier,
    Literal: literal,
    LogicalExpression: logicalExpression,
    /** this isn't a concrete node type */
    Expression: identity,
    ForStatement: forStatement,
    ImportSpecifier: importSpecifier,
    ImportDeclaration: importDeclaration,
    ThisExpression: thisExpression,
    ObjectExpression: objectExpression,
    ObjectPattern: objectPattern,
    RestElement: identity,
    MemberExpression: memberExpression,
    NewExpression: newExpression,
    SwitchStatement: switchStatement,
    EmptyStatement: emptyStatement,
    FunctionDeclaration: functionDeclaration,
    CallExpression: callExpression,
    ContinueStatement: continueStatement,
    ClassDeclaration: classDeclaration,
    ClassExpression: classExpression,
    DebuggerStatement: debuggerStatement,
    ExportNamedDeclaration: exportNamedDeclaration,
    ExportSpecifier: exportSpecifier,
    ExportAllDeclaration: exportAllDeclaration,
    ExportDefaultDeclaration: exportDefaultDeclaration,
    /** this isn't a concrete node type */
    Pattern: identity,
    /** this isn't a concrete node type */
    Statement: identity,
    PrivateIdentifier: identity,
    ReturnStatement: returnStatement,
    Super: identity,
    SpreadElement: spreadElement,
    StaticBlock: staticBlock,
    WhileStatement: whileStatement,
    ExpressionStatement: expressionStatement,
    UnaryExpression: unaryExpression,
    UpdateExpression: updateExpression,
    VariableDeclaration: variableDeclaration,
    VariableDeclarator: variableDeclarator,
    YieldExpression: yieldExpression,
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
