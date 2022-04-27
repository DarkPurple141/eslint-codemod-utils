### Utility Functions

````ts
export declare function isNodeOfType<T extends EslintCodemodUtilsBaseNode>(
  node: EslintCodemodUtilsBaseNode,
  type: T['type']
): node is T
export declare function closestOfType<T extends EslintNode>(
  node: EslintNode,
  type: T['type']
): EslintNode | null
export declare function hasJSXAttribute(
  node: JSXElement,
  attributeName: string
): boolean
export declare function hasJSXChild(
  node: JSXElement,
  childIdentifier: string
): boolean
/**
 * Whether a declaration does or does not include a specified source.
 *
 * @param declaration
 * @param source
 * @returns
 */
export declare function hasImportDeclaration(
  declaration: ImportDeclaration,
  source: string
): boolean
/**
 *
 * @param declaration
 * @param specifierId
 */
export declare function hasImportSpecifier(
  declaration: ImportDeclaration,
  importName: string | 'default'
): boolean
/**
 * Appends or adds an import specifier to an existing import declaration.
 *
 * Does not validate whether the insertion is already present.
 *
 * @param declaration
 * @param importName
 * @param specifierAlias
 * @returns {StringableASTNode<ImportDeclaration>}
 */
export declare function insertImportSpecifier(
  declaration: ImportDeclaration,
  importName: string | 'default',
  specifierAlias?: string
): StringableASTNode<ImportDeclaration>
/**
 * @example
 * ```tsx
 * insertImportDeclaration('source', ['specifier', 'second'])
 *
 * // produces
 * import {  specifier, second } from 'source'
 * ```
 *
 * @example
 * ```tsx
 *  * insertImportDeclaration('source', ['specifier', { imported: 'second', local: 'other' }])
 *
 * // produces
 * import { specifier, second as other } from 'source'
 * ```
 */
export declare function insertImportDeclaration(
  source: string,
  specifiers: (
    | string
    | {
        local: string
        imported: string
      }
  )[]
): StringableASTNode<ImportDeclaration>
/**
 * Removes an import specifier to an existing import declaration.
 *
 * @param declaration
 * @param importName
 * @returns {StringableASTNode<ImportDeclaration>}
 */
export declare function removeImportSpecifier(
  declaration: ImportDeclaration,
  importName: string | 'default'
): StringableASTNode<ImportDeclaration>
````

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
export declare const callExpression: StringableASTNodeFn<estree.SimpleCallExpression>
export declare const binaryExpression: StringableASTNodeFn<estree.BinaryExpression>
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
export declare const arrowFunctionExpression: StringableASTNodeFn<estree.ArrowFunctionExpression>
export declare const functionExpression: StringableASTNodeFn<estree.FunctionExpression>
export declare const blockStatement: StringableASTNodeFn<estree.BlockStatement>
export declare const returnStatement: StringableASTNodeFn<estree.ReturnStatement>
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
export declare const unaryExpression: StringableASTNodeFn<estree.UnaryExpression>
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
export declare const thisExpression: StringableASTNodeFn<estree.ThisExpression>
export declare const importDefaultSpecifier: StringableASTNodeFn<estree.ImportDefaultSpecifier>
export declare const exportNamedDeclaration: StringableASTNodeFn<estree.ExportNamedDeclaration>
export declare const exportDefaultDeclaration: StringableASTNodeFn<estree.ExportDefaultDeclaration>
export declare const exportAllDeclaration: StringableASTNodeFn<estree.ExportAllDeclaration>
export declare const exportSpecifier: StringableASTNodeFn<estree.ExportSpecifier>
export declare const importSpecifier: StringableASTNodeFn<estree.ImportSpecifier>
export declare const yieldExpression: StringableASTNodeFn<estree.YieldExpression>
export declare const arrayExpression: StringableASTNodeFn<estree.ArrayExpression>
export declare const updateExpression: StringableASTNodeFn<estree.UpdateExpression>
export declare const expressionStatement: StringableASTNodeFn<estree.ExpressionStatement>
export declare const newExpression: StringableASTNodeFn<estree.NewExpression>
export declare const property: StringableASTNodeFn<estree.Property>
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
export declare const objectPattern: StringableASTNodeFn<estree.ObjectPattern>
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
export declare const spreadElement: StringableASTNodeFn<estree.SpreadElement>
export declare const objectExpression: StringableASTNodeFn<estree.ObjectExpression>
export declare const emptyStatement: StringableASTNodeFn<estree.EmptyStatement>
export declare const memberExpression: StringableASTNodeFn<estree.MemberExpression>
export declare const logicalExpression: StringableASTNodeFn<estree.LogicalExpression>
export declare const variableDeclarator: StringableASTNodeFn<estree.VariableDeclarator>
export declare const variableDeclaration: StringableASTNodeFn<estree.VariableDeclaration>
export declare const importDeclaration: StringableASTNodeFn<estree.ImportDeclaration>
export declare const literal: StringableASTNodeFn<estree.Literal>
export declare const identifier: StringableASTNodeFn<estree.Identifier>
export declare const whileStatement: StringableASTNodeFn<estree.WhileStatement>
export declare const switchCase: StringableASTNodeFn<estree.SwitchCase>
export declare const switchStatement: StringableASTNodeFn<estree.SwitchStatement>
export declare const forStatement: StringableASTNodeFn<estree.ForStatement>
export declare const continueStatement: StringableASTNodeFn<estree.ContinueStatement>
export declare const debuggerStatement: StringableASTNodeFn<estree.DebuggerStatement>
export declare const conditionalExpression: StringableASTNodeFn<estree.ConditionalExpression>
export declare const awaitExpression: StringableASTNodeFn<estree.AwaitExpression>
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
export declare const staticBlock: StringableASTNodeFn<estree.StaticBlock>
export declare const functionDeclaration: StringableASTNodeFn<estree.FunctionDeclaration>
export declare const classDeclaration: StringableASTNodeFn<estree.ClassDeclaration>
export declare const classExpression: StringableASTNodeFn<estree.ClassExpression>
export declare const program: StringableASTNodeFn<estree.Program>
````

### JSX Nodes

````ts
export declare const jsxIdentifier: StringableASTNodeFn<JSXIdentifier>
export declare const jsxMemberExpression: StringableASTNodeFn<JSXMemberExpression>
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
export declare const jsxElement: StringableASTNodeFn<JSXElement>
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
export declare const jsxSpreadAttribute: StringableASTNodeFn<JSXSpreadAttribute>
export declare const jsxOpeningElement: StringableASTNodeFn<JSXOpeningElement>
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
export declare const jsxClosingElement: StringableASTNodeFn<JSXClosingElement>
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
export declare const jsxText: StringableASTNodeFn<JSXText>
export declare const jsxExpressionContainer: StringableASTNodeFn<JSXExpressionContainer>
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
export declare const jsxAttribute: StringableASTNodeFn<JSXAttribute>
````
