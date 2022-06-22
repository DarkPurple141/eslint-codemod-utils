# eslint-codemod-utils

## 1.3.4

### Patch Changes

- f003b75: Fixes the parsing of computed properties on the `memberExpression` transformer.

## 1.3.3

### Patch Changes

- ea8a017: Fixes the way unaryExpressions were stringified.

## 1.3.2

### Patch Changes

- 1a18bf6: Updates to correct type coercion in `isNodeOfType`

## 1.3.1

### Patch Changes

- 8cb50d3: Corrects the type inference of the `closestOfType` utility function.

## 1.3.0

### Minor Changes

- 75d4cef: Adds files key in package.json.

## 1.2.1

### Patch Changes

- 2e222e0: Removes src from being published in dist which was bloating bundle.

## 1.2.0

### Minor Changes

- cd793bb: Correct minor as previous change didn't export new functionality.

### Patch Changes

- e030ba2: Updates type to be correctly inferred in `isNodeOfType`

## 1.1.0

### Minor Changes

- 8913da9: Adds additional common utilties for codemod specific transforms.

## 1.0.1

### Patch Changes

- 064d923: Fixes an issue with the types not being included in the package for some functions.
- 064d923: Fixes the behaviour of some of the utils when interacting with the default import of an ImportDeclaration.

## 1.0.0

### Major Changes

- 0876a8d: Initial stable release. Additionally adds additional util `hasImportSpecifier`.

### Patch Changes

- 41f7c0f: Fixes build target to better match desired compatibility across older node / typescript versions.

## 0.1.3

### Patch Changes

- dd41354: Updates literal and identifiers to support primitive types being passed directly as arguments to AST utility functions.

## 0.1.2

### Patch Changes

- d75cbdd: Removes console statement from node parsing utility.

## 0.1.1

### Patch Changes

- ba82178: Adds additional test cases, further AST node types (WithStatement, IfStatement, ThrowStatement).
- fbd92dd: Adds CatchClause, TryStatement, DoWhileStatement, ForInStatement, ForOfStatement, ArrayPattern support.

## 0.1.0

### Minor Changes

- 5716178: Improves documentation and removes WIP status of a number of docs / types.

### Patch Changes

- 3eb841a: Adds additional utility functions.

## 0.0.7

### Patch Changes

- cf5df6a: Implements estree.WhileStatement & estree.BreakStatement

## 0.0.6

### Patch Changes

- 8d31804: Adds MethodDefinition, ClassDefinition

## 0.0.5

### Patch Changes

- b257d6d: Further API implementation to match the estree spec. Fixed a number of bugs with existing implementations.
- 6e67759: Updates the documentation to match the updated extended API.

## 0.0.4

### Patch Changes

- c7e2c68: Adds additional node types.
