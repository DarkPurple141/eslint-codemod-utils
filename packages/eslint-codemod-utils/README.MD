# ESLint Codemod Utilities

![brach build status](https://github.com/darkpurple141/eslint-codemod-utils/actions/workflows/build-test.yml/badge.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/eslint-codemod-utils?style=flat-square)](https://www.npmjs.com/package/eslint-codemod-utils)
The `eslint-codemod-utils` package is a library of helper functions designed to enable code evolution in a similar way to `jscodeshift` - but leaning on the live and ongoing enforcement of `eslint` in your source - rather than one off codemod scripts. It provides first class typescript support and will supercharge your custom eslint rules.

## Installation

```sh
pnpm add -D eslint-codemod-utils
```

```sh
yarn add -D eslint-codemod-utils
```

```sh
npm i --save-dev eslint-codemod-utils
```

## Getting started

To create a basic JSX node, you might do something like this:

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

This would produce an `espree` compliant node type that you can **also** nicely stringify to apply your eslint
fixes. For example:

```ts
modal.toString()
// produces: <Modal></Modal>
```

The real power of this approach is when combining these utilties with `eslint` rule custom fixe. In these cases, rather than
relying on string manipulation - which can be inexact, hacky or complex to reason about - you can instead focus on only the fix you actually need to affect.

### Your first `eslint` codemod

Writing a codemod is generally broken down into three parts:

1. Find
2. Modify
3. Remove / Cleanup

The `eslint` custom rule API allows us to find nodes fairly simply, but how might we modify them? Let's say we're trying to add a new element required to be composed by our Design System's Modal element - a `ModalBody` which is going to
be wrapped by the original `Modal` container. Assuming you've found the right node a normal fix might look like this:

```ts
import { Rule } from 'eslint'

function fix(fixer: Rule.RuleFixer) {
  return fixer.replaceText(node, '<Modal><ModalBody></ModalBody></Modal>')
}
```

So for this input:

```ts
const MyModal = () => <Modal></Modal>
```

We make this change:

```diff
- const MyModal = () => <Modal></Modal>
+ const MyModal = () => <Modal><ModalBody></ModalBody></Modal>
```

This kinda works, but the problem is the existing usage of Modal in our codebase is likely (guaranteed!) to be considerably more complex than
this example.

- If our Modal has props, we need to consider them
- If our Modal has children, we need to consider them
- If our Modal is aliased, we need to consider that

Instead of relying on string manipulation to reconstruct the existing AST, we instead leverage the information `eslint` is already giving to us.

```ts
import * as esUtils from 'eslint-codemod-utils'
import { Rule } from 'eslint'

// This is slightly more verbose, but it's considerably more robust -
// Simply re-using and spitting out the exisitng AST as a string
function fix(fixer: Rule.RuleFixer) {
  const jsxIdentifier = esUtils.jsxIdentifier({ name: 'ModalBody' })
  const modalBodyNode = esUtils.jsxElement({
    openingElement: esUtils.jsxOpeningElement({ name: jsxIdentifier }),
    closingElement: esUtils.jsxClosingElement({ name: jsxIdentifier }),
    // pass children of original element to new wrapper
    children: node.children,
  })
  return fixer.replaceText(
    node,
    esUtils.jsxElement({ ...node, children: [modalBodyNode] }).toString()
  )
}
```

The above will work for the original example:

```diff
- const MyModal = () => <Modal></Modal>
+ const MyModal = () => <Modal><ModalBody></ModalBody></Modal>
```

But it will also work for:

```diff
- const MyModal = () => <Modal type="full-width"></Modal>
+ const MyModal = () => <Modal type="full-width"><ModalBody></ModalBody></Modal>
```

Or:

```diff
- const MyModal = () => <Modal><SomeChild/></Modal>
+ const MyModal = () => <Modal><ModalBody><SomeChild/></ModalBody></Modal>
```

It's a declarative approach to solve the same problem.

See the [eslint-plugin-example](packages/eslint-plugin-codemod) example for examples of more real world fixes.

## How it works

The library provides a 1-1 mapping of types to utility functions every `espree` node type. These are all lowercase complements to the underlying type they represent;
eg. `jsxIdentifier` produces a `JSXIdentifier` node representation. These nodes all implement their own `toString`. This means any string cast will recursively produce the correct string output for any valid `espree` AST.

Each helper takes in a valid `espree` node and spits out an augmented one that can be more easily stringified. See -> [API](API.md) for more.

## Motivation

This idea came about after wrestling with the limitations of `eslint` rule fixes. For context, `eslint` rules rely heavily on string based utilities to apply
fixes to code. For example this fix which appends a semi-colon to a `Literal` (from the `eslint` documentation website itself):

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
    // The variables 'fixed' works with the espree AST to create
    // its own representation which can easily be stringified
    const fixed = jsxOpeningElement({
      name: node.name,
      selfClosing: node.selfClosing,
      attributes: node.attributes.map((attr) => {
        if (attr.type === 'JSXAttribute' && attr.name.name === 'open') {
          const internal = jsxAttribute({
            // espree nodes are spread into the util with no issues
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
