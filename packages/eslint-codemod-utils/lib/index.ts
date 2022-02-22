import type {
  JSXOpeningElement,
  JSXClosingElement,
  JSXMemberExpression,
  JSXIdentifier,
  Comment,
  SourceLocation,
  JSXElement,
  JSXAttribute,
  JSXExpressionContainer,
  Literal,
  Identifier,
  JSXText,
  JSXSpreadAttribute,
  ImportDeclaration,
  ImportSpecifier,
  ImportDefaultSpecifier,
} from 'estree-jsx'
import type { StringableASTNode } from './types'

export const identity = <T>(node: T) => node

export const whiteSpace = (loc: SourceLocation) =>
  ''.padStart(loc?.start?.column || 0, ' ')

export const comments = (comments: Comment[] = []) => ({
  comments,
  toString: () =>
    comments.length ? `${comments.map(comment).join('\n')}\n` : '',
})

export const comment = ({
  value,
  type,
  loc,
}: Comment): StringableASTNode<Comment> => ({
  value,
  type,
  __pragma: 'ecu',
  toString: () =>
    whiteSpace(loc) + (type === 'Line' ? `// ${value}` : `/* ${value} */`),
})

export const importDefaultSpecifier = ({
  local,
}: Omit<
  ImportDefaultSpecifier,
  'type'
>): StringableASTNode<ImportDefaultSpecifier> => ({
  __pragma: 'ecu',
  local,
  type: 'ImportDefaultSpecifier',
  toString: () => local.name,
})

export const importSpecifier = ({
  imported,
  local,
}: Omit<ImportSpecifier, 'type'>): StringableASTNode<ImportSpecifier> => ({
  __pragma: 'ecu',
  type: 'ImportSpecifier',
  imported,
  local,
  toString: () =>
    `${
      local.name === imported.name
        ? imported.name
        : `${imported.name} as ${local.name}`
    }`,
})

export const importDeclaration = ({
  specifiers,
  source,
}: Omit<ImportDeclaration, 'type'>): StringableASTNode<ImportDeclaration> => ({
  __pragma: 'ecu',
  type: 'ImportDeclaration',
  specifiers,
  source,
  toString: () => {
    if (!specifiers.length) {
      return `import '${source.value}'`
    }

    const defaultSpecifier = specifiers.find(
      (spec): spec is ImportDefaultSpecifier =>
        spec.type === 'ImportDefaultSpecifier'
    )
    const otherSpecifiers = specifiers.filter(
      (spec): spec is ImportSpecifier => spec.type === 'ImportSpecifier'
    )

    return `import ${defaultSpecifier ? defaultSpecifier.local.name : ''}${
      otherSpecifiers.length
        ? defaultSpecifier
          ? `, { ${otherSpecifiers.map(importSpecifier).join(', ')} }`
          : `{ ${otherSpecifiers.map(importSpecifier).join(', ')} }`
        : ''
    } from '${source.value}'`
  },
})

export const literal = ({
  value,
  raw,
}: // @ts-ignore TODO fix type error with bigint literal
Omit<Literal, 'type'>): StringableASTNode<Literal> => ({
  value,
  raw,
  type: 'Literal',
  __pragma: 'ecu',
  toString: () => raw || value.toString(),
})

export const identifier = ({
  name,
}: Omit<Identifier, 'type'>): StringableASTNode<Identifier> => ({
  type: 'Identifier',
  __pragma: 'ecu',
  name,
  toString: () => name,
})

export const jsxIdentifier = ({
  name,
}: Omit<JSXIdentifier, 'type'>): StringableASTNode<JSXIdentifier> => ({
  name,
  type: 'JSXIdentifier',
  __pragma: 'ecu',
  toString: () => name,
})

export const jsxMemberExpression = ({
  object,
  property,
}: Omit<
  JSXMemberExpression,
  'type'
>): StringableASTNode<JSXMemberExpression> => ({
  type: 'JSXMemberExpression',
  __pragma: 'ecu',
  object,
  property,
  toString: () =>
    `${
      object.type === 'JSXIdentifier'
        ? jsxIdentifier(object)
        : jsxMemberExpression(object)
    }.${jsxIdentifier(property)}`,
})

const DEFAULT_LOC: SourceLocation = {
  start: {
    column: 0,
    line: 0,
  },
  end: {
    column: 0,
    line: 0,
  },
}

export const jsxElement = ({
  openingElement,
  closingElement,
  children = [],
  loc = DEFAULT_LOC,
}: Pick<JSXElement, 'openingElement'> &
  Partial<JSXElement>): StringableASTNode<JSXElement> => ({
  openingElement,
  closingElement,
  children,
  loc,
  type: 'JSXElement',
  __pragma: 'ecu',
  toString: () => {
    const indent = whiteSpace(loc)
    const spacing = '\n  ' + indent
    return `${jsxOpeningElement(openingElement)}${
      children.length
        ? spacing +
          children
            // @ts-expect-error TODO revisit
            .map((child) => typeToHelperLookup[child.type](child))
            .map(String)
            .join(spacing) +
          '\n'
        : ''
    }${closingElement ? `${indent}${jsxClosingElement(closingElement)}` : ''}`
  },
})

export const jsxSpreadAttribute = ({
  argument,
}: Omit<
  JSXSpreadAttribute,
  'type'
>): StringableASTNode<JSXSpreadAttribute> => ({
  __pragma: 'ecu',
  type: 'JSXSpreadAttribute',
  argument,
  // @ts-ignore TODO fix this when mapping is complete
  toString: () => `{...${typeToHelperLookup[argument.type](argument)}}`,
})

export const jsxOpeningElement = ({
  name,
  attributes = [],
  selfClosing = false,
  leadingComments = [],
}: Pick<JSXOpeningElement, 'name'> &
  Partial<JSXOpeningElement>): StringableASTNode<JSXOpeningElement> => ({
  type: 'JSXOpeningElement',
  name,
  attributes,
  selfClosing,
  __pragma: 'ecu',
  toString: () =>
    `${comments(leadingComments)}<${
      name.type === 'JSXIdentifier'
        ? jsxIdentifier(name)
        : name.type === 'JSXMemberExpression'
        ? jsxMemberExpression(name)
        : // namespaced name not yet implemeneted
          name
    }${
      attributes && attributes.length
        ? ' ' +
          attributes
            .map((attr) => {
              if ('__pragma' in attr) {
                return attr
                // TS wanted this extra branch :thinking
              } else if (attr.type === 'JSXAttribute') {
                return typeToHelperLookup[attr.type](attr)
              } else {
                return typeToHelperLookup[attr.type](attr)
              }
            })
            .map(String)
            .join(' ')
        : ''
    }${selfClosing ? ' />' : '>'}`,
})

export const jsxClosingElement = ({
  name,
}: Omit<JSXClosingElement, 'type'>): StringableASTNode<JSXClosingElement> => ({
  type: 'JSXClosingElement',
  __pragma: 'ecu',
  // @ts-ignore // TODO revist this later
  name: typeToHelperLookup[name.type](name),
  toString: () => `</${name}>`,
})

export const jsxText = ({
  value,
  raw,
}: Omit<JSXText, 'type'>): StringableASTNode<JSXText> => ({
  type: 'JSXText',
  value,
  raw,
  __pragma: 'ecu',
  toString: () => value,
})

export const jsxExpressionContainer = ({
  expression,
}: Omit<
  JSXExpressionContainer,
  'type'
>): StringableASTNode<JSXExpressionContainer> => ({
  expression,
  type: 'JSXExpressionContainer',
  __pragma: 'ecu',
  toString: () => {
    if (expression.type === 'JSXEmptyExpression') {
      return '{}'
    }

    // @ts-ignore This should never happen but makes the API more accomodating
    if (expression.type === 'JSXExpressionContainer') {
      return String(jsxExpressionContainer(expression))
    }

    // @ts-expect-error TODO this is because the lookup is incomplete
    const expressionType = typeToHelperLookup[expression.type]

    if (expressionType) {
      // @ts-expect-error
      return `{${typeToHelperLookup[expression.type](expression)}}`
    }

    throw new Error(
      `eslint-codemod-utils: Unknown node type ${expression.type}`
    )
  },
})

export const jsxAttribute = ({
  name,
  value,
}: Omit<JSXAttribute, 'type'>): StringableASTNode<JSXAttribute> => ({
  type: 'JSXAttribute',
  __pragma: 'ecu',
  name,
  value,
  toString: () =>
    `${name.name}${
      value
        ? `=${
            value.type === 'Literal'
              ? literal(value)
              : value.type === 'JSXElement'
              ? jsxElement(value)
              : jsxExpressionContainer(value as JSXExpressionContainer)
          }`
        : ''
    }`,
})

type TypeMap = typeof typeToHelperLookup

const typeToHelperLookup = {
  // TODO implement
  JSXFragment: identity,
  // TODO implement
  JSXSpreadChild: identity,
  JSXExpressionContainer: jsxExpressionContainer,
  JSXElement: jsxElement,
  JSXText: jsxText,
  JSXSpreadAttribute: jsxSpreadAttribute,
  JSXAttribute: jsxAttribute,
  JSXMemberExpression: jsxMemberExpression,
  JSXIdentifier: jsxIdentifier,
  Identifier: identifier,
  Literal: literal,
  ImportSpecifier: importSpecifier,
} as const
