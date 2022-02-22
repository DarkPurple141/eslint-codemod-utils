# ESLint Codemod Utilities

The `eslint-codemod-utils` package is a collection of AST helper functions for more complex ESLint rule fixes. See the [motivation](#Motivation) section for more information.

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

## How it works

The library provides a 1-1 mapping for every `estree` node type. These are all lowercase complements to the underlying type they represent;
eg. `jsxIdentifier` produces a `JSXIdentifier` node representation. These nodes all implement their own `toString` which means they recursively produce the correct string output for any valid `estree` AST.

The full API (WIP) is below. I intend to clean up some of these types to make it clearer - each helper takes in a valid `estree` node and spits out a similar, but
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
