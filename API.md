### Nodes

````ts
/**
 * __CallExpression__
 *
 * @example
 *
 * Usage
 * ```
 * const call = callExpression({ callee: identifier({ name: 'normalCallExpression' }) })
 * ```
 *
 * Produces
 *
 * @example
 *
 * ```js
 * normalCallExpression()
 * ```
 *
 * @returns {CallExpression}
 */
export declare const callExpression: StringableASTNode<estree.SimpleCallExpression>
export declare const binaryExpression: StringableASTNode<estree.BinaryExpression>
/**
 * __ArrowFunctionExpression__
 *
 * @example
 * ```js
 * const arrow = () => 42
 *               ⌃⌃⌃⌃⌃⌃⌃⌃
 * ```
 * @returns {estree.ArrowFunctionExpression}
 */
export declare const arrowFunctionExpression: StringableASTNode<estree.ArrowFunctionExpression>
export declare const functionExpression: StringableASTNode<estree.FunctionExpression>
export declare const blockStatement: StringableASTNode<estree.BlockStatement>
export declare const returnStatement: StringableASTNode<estree.ReturnStatement>
/**
 * __UnaryExpression__
 *
 * @example
 *
 * ```ts
 * const y = typeof x
 *           ^^^^^^
 * ++x
 * ^^
 * ```
 *
 * @returns {estree.UnaryExpression}
 */
export declare const unaryExpression: StringableASTNode<estree.UnaryExpression>
/**
 * __ThisExpression__
 *
 * @example
 *
 * ```js
 * // In `this.self` 'this' is a ThisExpression.
 * this.self
 * ⌃⌃⌃⌃
 * ```
 *
 * @returns {estree.ThisExpression}
 */
export declare const thisExpression: StringableASTNode<estree.ThisExpression>
export declare const importDefaultSpecifier: StringableASTNode<estree.ImportDefaultSpecifier>
export declare const exportNamedDeclaration: StringableASTNode<estree.ExportNamedDeclaration>
export declare const exportDefaultDeclaration: StringableASTNode<estree.ExportDefaultDeclaration>
export declare const exportAllDeclaration: StringableASTNode<estree.ExportAllDeclaration>
export declare const exportSpecifier: StringableASTNode<estree.ExportSpecifier>
export declare const importSpecifier: StringableASTNode<estree.ImportSpecifier>
export declare const yieldExpression: StringableASTNode<estree.YieldExpression>
export declare const arrayExpression: StringableASTNode<estree.ArrayExpression>
export declare const updateExpression: StringableASTNode<estree.UpdateExpression>
export declare const expressionStatement: StringableASTNode<estree.ExpressionStatement>
export declare const newExpression: StringableASTNode<estree.NewExpression>
export declare const property: StringableASTNode<estree.Property>
/**
 * __ObjectPattern__
 *
 * @example
 * ```ts
 * function App({ a }) {}
 *              ^^^^^
 * ```
 * @returns
 */
export declare const objectPattern: StringableASTNode<estree.ObjectPattern>
/**
 * __SpreadElement__
 *
 * @example
 * ```ts
 * const obj = {
 *  ...spread
 *  ^^^^^^^^^
 * }
 * ```
 *
 * @returns {estree.SpreadElement}
 */
export declare const spreadElement: StringableASTNode<estree.SpreadElement>
export declare const objectExpression: StringableASTNode<estree.ObjectExpression>
export declare const emptyStatement: StringableASTNode<estree.EmptyStatement>
export declare const memberExpression: StringableASTNode<estree.MemberExpression>
export declare const logicalExpression: StringableASTNode<estree.LogicalExpression>
export declare const variableDeclarator: StringableASTNode<estree.VariableDeclarator>
export declare const variableDeclaration: StringableASTNode<estree.VariableDeclaration>
export declare const importDeclaration: StringableASTNode<estree.ImportDeclaration>
export declare const literal: StringableASTNode<estree.Literal>
export declare const identifier: StringableASTNode<estree.Identifier>
export declare const whileStatement: StringableASTNode<estree.WhileStatement>
export declare const switchCase: StringableASTNode<estree.SwitchCase>
export declare const switchStatement: StringableASTNode<estree.SwitchStatement>
export declare const forStatement: StringableASTNode<estree.ForStatement>
export declare const continueStatement: StringableASTNode<estree.ContinueStatement>
export declare const debuggerStatement: StringableASTNode<estree.DebuggerStatement>
export declare const conditionalExpression: StringableASTNode<estree.ConditionalExpression>
export declare const awaitExpression: StringableASTNode<estree.AwaitExpression>
/**
 * __StaticBlock__
 *
 * @example
 * ```ts
 * class A {
 * // only applicable inside a class
 *  static { }
 *  ^^^^^^^^^^
 * }
 * ```
 */
export declare const staticBlock: StringableASTNode<estree.StaticBlock>
export declare const functionDeclaration: StringableASTNode<estree.FunctionDeclaration>
export declare const classDeclaration: StringableASTNode<estree.ClassDeclaration>
export declare const classExpression: StringableASTNode<estree.ClassExpression>
export declare const program: StringableASTNode<estree.Program>
````

### JSX Nodes

````ts
export declare const jsxIdentifier: StringableASTNode<JSXIdentifier>
export declare const jsxMemberExpression: StringableASTNode<JSXMemberExpression>
/**
 * __JSXElement__
 *
 * @example
 *
 * Usage
 * ```
 * import { jsxElement, jsxOpeningElement, jsxClosingElement, identifier } from 'eslint-codemod-utils'
 *
 * const modalName = identifier({ name: 'Modal' })
 * const modal = jsxElement({
 *  openingElement: jsxOpeningElement({ name: modalName, selfClosing: false }),
 *  closingElement: jsxClosingElement({ name: modalName }),
 * })
 * ```
 *
 * @example
 *
 * Produces
 * ```js
 * <Modal></Modal>
 * ```
 *
 * @returns {JSXElement}
 */
export declare const jsxElement: StringableASTNode<JSXElement>
/**
 * __JSXSpreadAttribute__
 *
 * @example Usage
 *
 * ```js
 * import { jsxSpreadAttribute, identifier } from 'eslint-codemod-utils'
 *
 * const spreadAttr = jsxSpreadAttribute({
 *  argument: identifier({ name: 'spread' })
 * })
 * ```
 * @example
 *
 * ```js
 * // Produces a spread attribute
 * <div {...spread}>
 *      ⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃⌃
 * ```
 *
 * @returns {JSXSpreadAttribute}
 */
export declare const jsxSpreadAttribute: StringableASTNode<JSXSpreadAttribute>
export declare const jsxOpeningElement: StringableASTNode<JSXOpeningElement>
/**
 * __JSXClosingElement__
 *
 * @example
 *
 * ```js
 * // The below jsx div is a closing element.
 * // A closing element is expected to match a valid opening element of the same name
 * </div>
 * ```
 *
 * @returns {JSXClosingElement}
 */
export declare const jsxClosingElement: StringableASTNode<JSXClosingElement>
/**
 * __JSXText__
 *
 * @example
 *
 * ```js
 * // In the below jsx, the string, "hello world" is considered JSXText.
 * // JSXText can be a any number, boolean, or string value.
 * <div>hello world</div>
 * ```
 *
 * @returns {JSXText}
 */
export declare const jsxText: StringableASTNode<JSXText>
export declare const jsxExpressionContainer: StringableASTNode<JSXExpressionContainer>
/**
 * __JSXAttribute__
 *
 * @example
 *
 * ```js
 * // In the below jsx, `a`, `b` and `c` reflect different valid
 * // jsx attributes. There values can come in many forms.
 * <div a={10} b="string" c={object} />
 * ```
 *
 * @returns {JSXAttribute}
 */
export declare const jsxAttribute: StringableASTNode<JSXAttribute>
````
