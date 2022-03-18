# ESLint Codemod Utilities

<p align="center">
  <a href="https://github.com/DarkPurple141/eslint-codemod-utils/actions/workflows/build-test.yml">
    <img alt="Github Actions Build Status" src="https://img.shields.io/github/workflow/status/DarkPurple141/eslint-codemod-utils/CI%20Build%20&%20Testing?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/eslint-codemod-utils">
    <img alt="npm version" src="https://img.shields.io/npm/v/eslint-codemod-utils?style=flat-square"></a>
</p>

The `eslint-codemod-utils` package is a library of AST helper functions to help apply more complex ESLint rule fixes. This library provides first class typescript support to supercharge your custom eslint rules.

## Installation

```
pnpm add -D eslint-codemod-utils
```

```
yarn add -D eslint-codemod-utils
```

```
npm i --save-dev eslint-codemod-utils
```

## Getting started

To put together a basic JSX node, you might do something like this:

```ts
import {
  jsxElement,
  jsxOpeningElement,
  jsxClosingElement,
  identifier,
} from 'eslint-codemod-utils'

const modalName = identifier({ name: 'Modal' })
const modal = jsxElement({
  openingElement: jsxOpeningElement({ name: modalName, selfClosing: false }),
  closingElement: jsxClosingElement({ name: modalName }),
})
```

This would produce an `estree` compliant node type that you can also nicely stringify to apply your eslint
fixes. For example:

```ts
modal.toString()
// produces: <Modal></Modal>
```

The real power of this approach is when combining these utilties with `estree` nodes exposed by `eslint` rule fixers. In these cases, rather than
recreating the entire tree, you can instead focus on only the fix you actually need to affect. See the `example-eslint-plugin` for more information.

## How it works

The library provides a 1-1 mapping of types to utility functions every `estree` node type. These are all lowercase complements to the underlying type they represent;
eg. `jsxIdentifier` produces a `JSXIdentifier` node representation. These nodes all implement their own `toString`. This means any string cast will recursively produce the correct string output for any valid `estree` AST.

The full API (WIP) is below. Each helper takes in a valid `estree` node and spits out an augmented one that can be more easily stringified.

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

## Motivation

This idea came about after wrestling with the limitations of `ESLint` rule fixes. For context, `ESLint` rules rely heavily on string based utilities to apply
fixes to code. For example this fix which appends a semi-colon to a `Literal` (from the `ESLint` documentation website itself):

```js
context.report({
  node: node,
  message: 'Missing semicolon',
  fix: function (fixer) {
    return fixer.insertTextAfter(node, ';')
  },
})
```

This works fine if your fixes are trivial, but it works less well for more complex uses cases. As soon as you need to traverse other AST nodes and combine information for a fix, combine fixes; the simplicity of the `RuleFixer` API starts to buckle.

In codemod tools like [jscodeshift](https://github.com/facebook/jscodeshift), the AST is baked in to the way fixes are applied - rather than applying fixes your script needs to return a collection of AST nodes which are then parsed and integrated into the source. This is a little more heavy duty but it also is more resillient.

The missing piece for `ESlint` is a matching set of utilties to allow the flexibility to dive into the AST approach where and when a developer feels it is appropriate.
This library aims to bridge some of that gap and with some different thinking around just how powerful `ESLint` can be.

Fixes can then theoretically deal with more complex use cases like this:

```ts
/**
 * This is part of a fix to demonstrate changing a prop in a specific element with
 * a much more surgical approach to node manipulation.
 */
import {
  jsxOpeningElement,
  jsxAttribute,
  jsxIdentifier,
} from 'eslint-codemod-utils'

// ... further down the file
context.report({
  node: node,
  message: 'error',
  fix(fixer) {
    // The variables 'fixed' works with the estree AST to create
    // its own representation which can easily be stringified
    const fixed = jsxOpeningElement({
      name: node.name,
      selfClosing: node.selfClosing,
      attributes: node.attributes.map((attr) => {
        if (attr.type === 'JSXAttribute' && attr.name.name === 'open') {
          const internal = jsxAttribute({
            // estree nodes are spread into the util with no issues
            ...attr,
            // others are recreated or re-mapped
            name: jsxIdentifier({
              ...attr.name,
              name: 'isOpen',
            }),
          })
          return internal
        }

        return attr
      }),
    })

    return fixer.replaceText(node, fixed.toString())
  },
})
```
