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
npm i --save-dev eslint-codemod-utls
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
eg. `jsxIdentifier` produces a `JSXIdentifier` node representation. These nodes also implement their own `toString` which means without they recursively produce the correct string output for any valid `estree` AST.

The full API (WIP) is below. Each helper takes in a valid `estree` node and spits out a similar, but
slightly altered node that can be more easily stringified.

```ts
export const importDefaultSpecifier: ({
  local,
}: Omit<
  ImportDefaultSpecifier,
  'type'
>) => StringableASTNode<ImportDefaultSpecifier>
export const importSpecifier: ({
  imported,
  local,
}: Omit<ImportSpecifier, 'type'>) => StringableASTNode<ImportSpecifier>
export const importDeclaration: ({
  specifiers,
  source,
}: Omit<ImportDeclaration, 'type'>) => StringableASTNode<ImportDeclaration>
export const literal: ({
  value,
  raw,
}: Omit<Literal, 'type'>) => StringableASTNode<Literal>
export const identifier: ({
  name,
}: Omit<Identifier, 'type'>) => StringableASTNode<Identifier>
export const jsxIdentifier: ({
  name,
}: Omit<JSXIdentifier, 'type'>) => StringableASTNode<JSXIdentifier>
export const jsxMemberExpression: ({
  object,
  property,
}: Omit<JSXMemberExpression, 'type'>) => StringableASTNode<JSXMemberExpression>
export const jsxElement: ({
  openingElement,
  closingElement,
  children,
  loc,
}: Pick<JSXElement, 'openingElement'> &
  Partial<JSXElement>) => StringableASTNode<JSXElement>
export const jsxSpreadAttribute: ({
  argument,
}: Omit<JSXSpreadAttribute, 'type'>) => StringableASTNode<JSXSpreadAttribute>
export const jsxOpeningElement: ({
  name,
  attributes,
  selfClosing,
  leadingComments,
}: Pick<JSXOpeningElement, 'name'> &
  Partial<JSXOpeningElement>) => StringableASTNode<JSXOpeningElement>
export const jsxClosingElement: ({
  name,
}: Omit<JSXClosingElement, 'type'>) => StringableASTNode<JSXClosingElement>
export const jsxText: ({
  value,
  raw,
}: Omit<JSXText, 'type'>) => StringableASTNode<JSXText>
export const jsxExpressionContainer: ({
  expression,
}: Omit<
  JSXExpressionContainer,
  'type'
>) => StringableASTNode<JSXExpressionContainer>
export const jsxAttribute: ({
  name,
  value,
}: Omit<JSXAttribute, 'type'>) => StringableASTNode<JSXAttribute>
```

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
