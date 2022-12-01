import {
  jsxAttribute,
  jsxClosingElement,
  jsxClosingFragment,
  jsxElement,
  jsxEmptyExpression,
  jsxExpressionContainer,
  jsxFragment,
  jsxIdentifier,
  jsxMemberExpression,
  jsxOpeningElement,
  jsxOpeningFragment,
  jsxSpreadAttribute,
  jsxSpreadChild,
  jsxText,
} from './jsx-nodes'

import {
  arrayExpression,
  arrayPattern,
  arrowFunctionExpression,
  assignmentExpression,
  awaitExpression,
  binaryExpression,
  blockStatement,
  breakStatement,
  callExpression,
  catchClause,
  chainExpression,
  classBody,
  classDeclaration,
  classExpression,
  conditionalExpression,
  continueStatement,
  debuggerStatement,
  doWhileStatement,
  emptyStatement,
  exportAllDeclaration,
  exportDefaultDeclaration,
  exportNamedDeclaration,
  exportSpecifier,
  expressionStatement,
  forInStatement,
  forOfStatement,
  forStatement,
  functionDeclaration,
  functionExpression,
  identifier,
  ifStatement,
  importDeclaration,
  importDefaultSpecifier,
  importExpression,
  importNamespaceSpecifier,
  importSpecifier,
  literal,
  logicalExpression,
  memberExpression,
  methodDefinition,
  newExpression,
  objectExpression,
  objectPattern,
  program,
  property,
  propertyDefinition,
  returnStatement,
  sequenceExpression,
  spreadElement,
  staticBlock,
  switchCase,
  switchStatement,
  taggedTemplateExpression,
  templateElement,
  templateLiteral,
  thisExpression,
  throwStatement,
  tryStatement,
  unaryExpression,
  updateExpression,
  variableDeclaration,
  variableDeclarator,
  whileStatement,
  withStatement,
  yieldExpression,
} from './nodes'
import { tsAsExpression, tsStringKeyword, tsTypeReference } from './ts-nodes'
import { identity } from './utils/identity'
import { NodeMap } from './utils/node'

export const DEFAULT_WHITESPACE = '\n  '

export const typeToHelperLookup = new Proxy(
  // @ts-expect-error
  {
    // TODO implement
    AssignmentProperty: identity,
    // TODO implement
    AssignmentPattern: identity,
    AssignmentExpression: assignmentExpression,
    AwaitExpression: awaitExpression,
    ArrayExpression: arrayExpression,
    ArrayPattern: arrayPattern,
    BlockStatement: blockStatement,
    BinaryExpression: binaryExpression,
    ConditionalExpression: conditionalExpression,
    ChainExpression: chainExpression,
    JSXFragment: jsxFragment,
    JSXSpreadChild: jsxSpreadChild,
    JSXExpressionContainer: jsxExpressionContainer,
    JSXClosingElement: jsxClosingElement,
    JSXOpeningElement: jsxOpeningElement,
    JSXOpeningFragment: jsxOpeningFragment,
    JSXClosingFragment: jsxClosingFragment,
    JSXElement: jsxElement,
    JSXText: jsxText,
    JSXSpreadAttribute: jsxSpreadAttribute,
    JSXAttribute: jsxAttribute,
    JSXMemberExpression: jsxMemberExpression,
    JSXNamespacedName: identity,
    JSXIdentifier: jsxIdentifier,
    JSXEmptyExpression: jsxEmptyExpression,
    ArrowFunctionExpression: arrowFunctionExpression,
    FunctionExpression: functionExpression,
    Identifier: identifier,
    IfStatement: ifStatement,
    // TODO implement
    LabeledStatement: identity,
    Literal: literal,
    LogicalExpression: logicalExpression,
    /** this isn't a concrete node type */
    Expression: identity,
    ForStatement: forStatement,
    ForInStatement: forInStatement,
    ForOfStatement: forOfStatement,
    ImportSpecifier: importSpecifier,
    ImportNamespaceSpecifier: importNamespaceSpecifier,
    ImportDefaultSpecifier: importDefaultSpecifier,
    ImportDeclaration: importDeclaration,
    ImportExpression: importExpression,
    ThisExpression: thisExpression,
    ThrowStatement: throwStatement,
    TemplateLiteral: templateLiteral,
    TemplateElement: templateElement,
    TaggedTemplateExpression: taggedTemplateExpression,
    ObjectExpression: objectExpression,
    ObjectPattern: objectPattern,
    // TODO: needs implementation
    RestElement: identity,
    MemberExpression: memberExpression,
    // TODO: needs implementation
    MetaProperty: identity,
    MethodDefinition: methodDefinition,
    NewExpression: newExpression,
    SwitchStatement: switchStatement,
    EmptyStatement: emptyStatement,
    FunctionDeclaration: functionDeclaration,
    CallExpression: callExpression,
    SimpleCallExpression: callExpression,
    CatchClause: catchClause,
    ContinueStatement: continueStatement,
    ClassDeclaration: classDeclaration,
    ClassExpression: classExpression,
    ClassBody: classBody,
    DebuggerStatement: debuggerStatement,
    DoWhileStatement: doWhileStatement,
    ExportNamedDeclaration: exportNamedDeclaration,
    ExportSpecifier: exportSpecifier,
    ExportAllDeclaration: exportAllDeclaration,
    ExportDefaultDeclaration: exportDefaultDeclaration,
    /** this isn't a concrete node type */
    Pattern: identity,
    /** this isn't a concrete node type */
    Statement: identity,
    BreakStatement: breakStatement,
    PrivateIdentifier: identity,
    Property: property,
    Program: program,
    PropertyDefinition: propertyDefinition,
    ReturnStatement: returnStatement,
    Super: identity,
    SequenceExpression: sequenceExpression,
    SpreadElement: spreadElement,
    StaticBlock: staticBlock,
    SwitchCase: switchCase,
    TryStatement: tryStatement,
    WhileStatement: whileStatement,
    WithStatement: withStatement,
    ExpressionStatement: expressionStatement,
    UnaryExpression: unaryExpression,
    UpdateExpression: updateExpression,
    VariableDeclaration: variableDeclaration,
    VariableDeclarator: variableDeclarator,
    YieldExpression: yieldExpression,
    // typescript
    TSAsExpression: tsAsExpression,
    TSStringKeyword: tsStringKeyword,
    TSTypeReference: tsTypeReference,
  } as NodeMap,
  {
    // dynamic getter will fail and provide debug information
    get(target, name, receiver) {
      if (Reflect.has(target, name)) {
        return Reflect.get(target, name, receiver)
      }

      const nodeName = name.toString()
      throw new Error(`\
eslint-codemod-utils: type '${nodeName}' missing in typeMap.

This is probably because the type '${nodeName}' is a Typescript or Flow specific node type. These nodes currently have only partial support.

To resolve this you can:
* Use a more constrained parser like esprima in your eslint config
* Lodge a bug at https://github.com/DarkPurple141/eslint-codemod-utils/issues
      `)
    },
  }
)
