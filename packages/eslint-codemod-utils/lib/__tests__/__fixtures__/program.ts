export default {
  type: 'Program',
  body: [
    {
      type: 'ImportDeclaration',
      source: {
        type: 'Literal',
        value: '@atlaskit/welcome',
        raw: "'@atlaskit/welcome'",
        range: [27, 46],
      },
      specifiers: [
        {
          type: 'ImportDefaultSpecifier',
          local: {
            type: 'Identifier',
            name: 'A',
            range: [7, 8],
          },
          range: [7, 8],
        },
        {
          type: 'ImportSpecifier',
          local: {
            type: 'Identifier',
            name: 'Welcome',
            range: [12, 19],
          },
          imported: {
            type: 'Identifier',
            name: 'Welcome',
            range: [12, 19],
          },
          importKind: 'value',
          range: [12, 19],
        },
      ],
      importKind: 'value',
      assertions: [],
      range: [0, 47],
    },
    {
      type: 'ImportDeclaration',
      source: {
        type: 'Literal',
        value: './other',
        raw: "'./other'",
        range: [66, 75],
      },
      specifiers: [
        {
          type: 'ImportSpecifier',
          local: {
            type: 'Identifier',
            name: 'X',
            range: [57, 58],
          },
          imported: {
            type: 'Identifier',
            name: 'X',
            range: [57, 58],
          },
          importKind: 'value',
          range: [57, 58],
        },
      ],
      importKind: 'value',
      assertions: [],
      range: [48, 75],
    },
    {
      type: 'ImportDeclaration',
      source: {
        type: 'Literal',
        value: 'thing',
        raw: "'thing'",
        range: [100, 107],
      },
      specifiers: [
        {
          type: 'ImportDefaultSpecifier',
          local: {
            type: 'Identifier',
            name: 'tmm',
            range: [83, 86],
          },
          range: [83, 86],
        },
        {
          type: 'ImportNamespaceSpecifier',
          local: {
            type: 'Identifier',
            name: 'x',
            range: [93, 94],
          },
          range: [88, 94],
        },
      ],
      importKind: 'value',
      assertions: [],
      range: [76, 107],
    },
    {
      type: 'ImportDeclaration',
      source: {
        type: 'Literal',
        value: 'blah',
        raw: "'blah'",
        range: [115, 121],
      },
      specifiers: [],
      importKind: 'value',
      assertions: [],
      range: [108, 121],
    },
    {
      type: 'FunctionDeclaration',
      id: {
        type: 'Identifier',
        name: 'App',
        range: [132, 135],
      },
      generator: false,
      expression: false,
      async: false,
      params: [
        {
          type: 'ObjectPattern',
          properties: [
            {
              type: 'Property',
              key: {
                type: 'Identifier',
                name: 'a',
                range: [138, 139],
              },
              value: {
                type: 'Identifier',
                name: 'a',
                range: [138, 139],
              },
              computed: false,
              method: false,
              shorthand: true,
              kind: 'init',
              range: [138, 139],
            },
          ],
          range: [136, 141],
        },
        {
          type: 'ObjectPattern',
          properties: [
            {
              type: 'Property',
              key: {
                type: 'Identifier',
                name: 'b',
                range: [145, 146],
              },
              value: {
                type: 'Identifier',
                name: 'c',
                range: [148, 149],
              },
              computed: false,
              method: false,
              shorthand: false,
              kind: 'init',
              range: [145, 149],
            },
          ],
          range: [143, 151],
        },
      ],
      body: {
        type: 'BlockStatement',
        body: [
          {
            type: 'ReturnStatement',
            argument: {
              type: 'JSXElement',
              openingElement: {
                type: 'JSXOpeningElement',
                selfClosing: false,
                name: {
                  type: 'JSXIdentifier',
                  name: 'div',
                  range: [171, 174],
                },
                attributes: [],
                range: [170, 175],
              },
              closingElement: {
                type: 'JSXClosingElement',
                name: {
                  type: 'JSXIdentifier',
                  name: 'div',
                  range: [326, 329],
                },
                range: [324, 330],
              },
              children: [
                {
                  type: 'JSXText',
                  value: '\n      ',
                  raw: '\n      ',
                  range: [175, 182],
                },
                {
                  type: 'JSXSpreadChild',
                  expression: {
                    type: 'Identifier',
                    name: 'A',
                    range: [186, 187],
                  },
                  range: [182, 188],
                },
                {
                  type: 'JSXText',
                  value: '\n      ',
                  raw: '\n      ',
                  range: [188, 195],
                },
                {
                  type: 'JSXElement',
                  openingElement: {
                    type: 'JSXOpeningElement',
                    selfClosing: true,
                    name: {
                      type: 'JSXIdentifier',
                      name: 'Welcome',
                      range: [196, 203],
                    },
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'name',
                          range: [204, 208],
                        },
                        value: {
                          type: 'Literal',
                          value: 'Sara',
                          raw: '"Sara"',
                          range: [209, 215],
                        },
                        range: [204, 215],
                      },
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'otherName',
                          range: [216, 225],
                        },
                        value: {
                          type: 'JSXExpressionContainer',
                          expression: {
                            type: 'Literal',
                            value: 2,
                            raw: '2',
                            range: [227, 228],
                          },
                          range: [226, 229],
                        },
                        range: [216, 229],
                      },
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'isBlanketHidden',
                          range: [230, 245],
                        },
                        value: null,
                        range: [230, 245],
                      },
                      {
                        type: 'JSXSpreadAttribute',
                        argument: {
                          type: 'CallExpression',
                          callee: {
                            type: 'Identifier',
                            name: 'x',
                            range: [250, 251],
                          },
                          arguments: [],
                          optional: false,
                          range: [250, 253],
                        },
                        range: [246, 254],
                      },
                    ],
                    range: [195, 257],
                  },
                  closingElement: null,
                  children: [],
                  range: [195, 257],
                },
                {
                  type: 'JSXText',
                  value: '\n      ',
                  raw: '\n      ',
                  range: [257, 264],
                },
                {
                  type: 'JSXElement',
                  openingElement: {
                    type: 'JSXOpeningElement',
                    selfClosing: true,
                    name: {
                      type: 'JSXIdentifier',
                      name: 'Welcome',
                      range: [265, 272],
                    },
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'name',
                          range: [273, 277],
                        },
                        value: {
                          type: 'Literal',
                          value: 'Cahal',
                          raw: '"Cahal"',
                          range: [278, 285],
                        },
                        range: [273, 285],
                      },
                    ],
                    range: [264, 288],
                  },
                  closingElement: null,
                  children: [],
                  range: [264, 288],
                },
                {
                  type: 'JSXText',
                  value: '\n      ',
                  raw: '\n      ',
                  range: [288, 295],
                },
                {
                  type: 'JSXElement',
                  openingElement: {
                    type: 'JSXOpeningElement',
                    selfClosing: true,
                    name: {
                      type: 'JSXIdentifier',
                      name: 'Welcome',
                      range: [296, 303],
                    },
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'name',
                          range: [304, 308],
                        },
                        value: {
                          type: 'Literal',
                          value: 'Edite',
                          raw: '"Edite"',
                          range: [309, 316],
                        },
                        range: [304, 316],
                      },
                    ],
                    range: [295, 319],
                  },
                  closingElement: null,
                  children: [],
                  range: [295, 319],
                },
                {
                  type: 'JSXText',
                  value: '\n    ',
                  raw: '\n    ',
                  range: [319, 324],
                },
              ],
              range: [170, 330],
            },
            range: [157, 335],
          },
        ],
        range: [153, 337],
      },
      range: [123, 337],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'NewExpression',
        callee: {
          type: 'Identifier',
          name: 'X',
          range: [352, 353],
        },
        arguments: [
          {
            type: 'TemplateLiteral',
            quasis: [
              {
                type: 'TemplateElement',
                value: {
                  raw: '',
                  cooked: '',
                },
                tail: false,
                range: [354, 357],
              },
              {
                type: 'TemplateElement',
                value: {
                  raw: ': "world" ',
                  cooked: ': "world" ',
                },
                tail: false,
                range: [362, 375],
              },
              {
                type: 'TemplateElement',
                value: {
                  raw: '',
                  cooked: '',
                },
                tail: true,
                range: [401, 403],
              },
            ],
            expressions: [
              {
                type: 'Identifier',
                name: 'hello',
                range: [357, 362],
              },
              {
                type: 'ConditionalExpression',
                test: {
                  type: 'BinaryExpression',
                  operator: '==',
                  left: {
                    type: 'Literal',
                    value: 1,
                    raw: '1',
                    range: [375, 376],
                  },
                  right: {
                    type: 'Literal',
                    value: 2,
                    raw: '2',
                    range: [380, 381],
                  },
                  range: [375, 381],
                },
                consequent: {
                  type: 'TemplateLiteral',
                  quasis: [
                    {
                      type: 'TemplateElement',
                      value: {
                        raw: '',
                        cooked: '',
                      },
                      tail: false,
                      range: [384, 387],
                    },
                    {
                      type: 'TemplateElement',
                      value: {
                        raw: '',
                        cooked: '',
                      },
                      tail: true,
                      range: [394, 396],
                    },
                  ],
                  expressions: [
                    {
                      type: 'Identifier',
                      name: 'Welcome',
                      range: [387, 394],
                    },
                  ],
                  range: [384, 396],
                },
                alternate: {
                  type: 'Literal',
                  value: '',
                  raw: "''",
                  range: [399, 401],
                },
                range: [375, 401],
              },
            ],
            range: [354, 403],
          },
        ],
        range: [348, 404],
      },
      range: [348, 404],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: 'X',
          range: [406, 407],
        },
        arguments: [],
        optional: false,
        range: [406, 409],
      },
      range: [406, 409],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'z',
            range: [415, 416],
          },
          init: null,
          range: [415, 416],
        },
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'zz',
            range: [418, 420],
          },
          init: null,
          range: [418, 420],
        },
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'zzz',
            range: [422, 425],
          },
          init: null,
          range: [422, 425],
        },
      ],
      kind: 'let',
      range: [411, 426],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'x',
            range: [433, 434],
          },
          init: {
            type: 'ClassExpression',
            id: {
              type: 'Identifier',
              name: 'Z',
              range: [443, 444],
            },
            body: {
              type: 'ClassBody',
              body: [],
              range: [445, 447],
            },
            superClass: null,
            range: [437, 447],
          },
          range: [433, 447],
        },
      ],
      kind: 'const',
      range: [427, 447],
    },
    {
      type: 'ClassDeclaration',
      id: {
        type: 'Identifier',
        name: 'D',
        range: [455, 456],
      },
      body: {
        type: 'ClassBody',
        body: [
          {
            type: 'MethodDefinition',
            key: {
              type: 'Identifier',
              name: 'constructor',
              range: [472, 483],
            },
            value: {
              type: 'FunctionExpression',
              id: null,
              params: [],
              generator: false,
              expression: false,
              async: false,
              body: {
                type: 'BlockStatement',
                body: [
                  {
                    type: 'ExpressionStatement',
                    expression: {
                      type: 'CallExpression',
                      callee: {
                        type: 'Super',
                        range: [490, 495],
                      },
                      arguments: [],
                      optional: false,
                      range: [490, 497],
                    },
                    range: [490, 498],
                  },
                  {
                    type: 'ExpressionStatement',
                    expression: {
                      type: 'AssignmentExpression',
                      operator: '=',
                      left: {
                        type: 'MemberExpression',
                        object: {
                          type: 'ThisExpression',
                          range: [503, 507],
                        },
                        property: {
                          type: 'Identifier',
                          name: 'hello',
                          range: [508, 513],
                        },
                        computed: false,
                        optional: false,
                        range: [503, 513],
                      },
                      right: {
                        type: 'Literal',
                        value: 'hi',
                        raw: "'hi'",
                        range: [516, 520],
                      },
                      range: [503, 520],
                    },
                    range: [503, 521],
                  },
                ],
                range: [486, 525],
              },
              range: [483, 525],
            },
            computed: false,
            static: false,
            kind: 'constructor',
            override: false,
            range: [472, 525],
          },
          {
            type: 'MethodDefinition',
            key: {
              type: 'Identifier',
              name: 'other',
              range: [529, 534],
            },
            value: {
              type: 'FunctionExpression',
              id: null,
              generator: false,
              expression: false,
              async: false,
              body: {
                type: 'BlockStatement',
                body: [
                  {
                    type: 'ReturnStatement',
                    argument: {
                      type: 'MemberExpression',
                      object: {
                        type: 'ThisExpression',
                        range: [550, 554],
                      },
                      property: {
                        type: 'Identifier',
                        name: 'hello',
                        range: [555, 560],
                      },
                      computed: false,
                      optional: false,
                      range: [550, 560],
                    },
                    range: [543, 561],
                  },
                ],
                range: [537, 565],
              },
              range: [534, 565],
              params: [],
            },
            computed: false,
            static: false,
            kind: 'method',
            override: false,
            range: [529, 565],
          },
        ],
        range: [467, 567],
      },
      superClass: {
        type: 'Identifier',
        name: 'B',
        range: [465, 466],
      },
      range: [449, 567],
    },
    {
      type: 'SwitchStatement',
      discriminant: {
        type: 'Identifier',
        name: 'e',
        range: [577, 578],
      },
      cases: [
        {
          type: 'SwitchCase',
          test: {
            type: 'Literal',
            value: 'x',
            raw: "'x'",
            range: [589, 592],
          },
          consequent: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'Literal',
                value: false,
                raw: 'false',
                range: [594, 599],
              },
              range: [594, 600],
            },
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'Literal',
                value: '',
                raw: "''",
                range: [601, 603],
              },
              range: [601, 604],
            },
          ],
          range: [584, 604],
        },
        {
          type: 'SwitchCase',
          test: null,
          consequent: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'Literal',
                value: 'zz',
                raw: "'zz'",
                range: [616, 620],
              },
              range: [616, 621],
            },
          ],
          range: [607, 621],
        },
      ],
      range: [569, 623],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'v1',
            range: [631, 633],
          },
          init: {
            type: 'BinaryExpression',
            operator: '+',
            left: {
              type: 'BinaryExpression',
              operator: '+',
              left: {
                type: 'Literal',
                value: 1,
                raw: '1',
                range: [636, 637],
              },
              right: {
                type: 'Literal',
                value: 4,
                raw: '4',
                range: [640, 641],
              },
              range: [636, 641],
            },
            right: {
              type: 'Literal',
              value: 2,
              raw: '2',
              range: [644, 645],
            },
            range: [636, 645],
          },
          range: [631, 645],
        },
      ],
      kind: 'const',
      range: [625, 645],
    },
    {
      type: 'BlockStatement',
      body: [
        {
          type: 'VariableDeclaration',
          declarations: [
            {
              type: 'VariableDeclarator',
              id: {
                type: 'Identifier',
                name: 'a',
                range: [654, 655],
              },
              init: {
                type: 'Literal',
                value: 1,
                raw: '1',
                range: [658, 659],
              },
              range: [654, 659],
            },
          ],
          kind: 'let',
          range: [650, 659],
        },
      ],
      range: [647, 662],
    },
    {
      type: 'EmptyStatement',
      range: [664, 665],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'ArrayExpression',
        elements: [],
        range: [665, 667],
      },
      range: [665, 667],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'yy',
            range: [675, 677],
          },
          init: {
            type: 'ObjectExpression',
            properties: [
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'a',
                  range: [684, 685],
                },
                value: {
                  type: 'Literal',
                  value: 1,
                  raw: '1',
                  range: [687, 688],
                },
                computed: false,
                method: false,
                shorthand: false,
                kind: 'init',
                range: [684, 688],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'z',
                  range: [696, 697],
                },
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  generator: false,
                  expression: false,
                  async: false,
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [700, 702],
                  },
                  range: [697, 702],
                  params: [],
                },
                computed: false,
                method: false,
                shorthand: false,
                kind: 'get',
                range: [692, 702],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'j',
                  range: [710, 711],
                },
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  generator: false,
                  expression: false,
                  async: false,
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [715, 717],
                  },
                  range: [711, 717],
                  params: [
                    {
                      type: 'Identifier',
                      name: 'j',
                      range: [712, 713],
                    },
                  ],
                },
                computed: false,
                method: false,
                shorthand: false,
                kind: 'set',
                range: [706, 717],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'init',
                  range: [721, 725],
                },
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  generator: false,
                  expression: false,
                  async: false,
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [728, 730],
                  },
                  range: [725, 730],
                  params: [],
                },
                computed: false,
                method: true,
                shorthand: false,
                kind: 'init',
                range: [721, 730],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'blob',
                  range: [740, 744],
                },
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  generator: false,
                  expression: false,
                  async: true,
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [747, 749],
                  },
                  range: [744, 749],
                  params: [],
                },
                computed: false,
                method: true,
                shorthand: false,
                kind: 'init',
                range: [734, 749],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'b',
                  range: [753, 754],
                },
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  generator: false,
                  expression: false,
                  async: false,
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [757, 760],
                  },
                  range: [754, 760],
                  params: [],
                },
                computed: false,
                method: true,
                shorthand: false,
                kind: 'init',
                range: [753, 760],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'c',
                  range: [764, 765],
                },
                value: {
                  type: 'FunctionExpression',
                  id: {
                    type: 'Identifier',
                    name: 'd',
                    range: [776, 777],
                  },
                  generator: false,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [780, 782],
                  },
                  async: false,
                  expression: false,
                  range: [767, 782],
                },
                computed: false,
                method: false,
                shorthand: false,
                kind: 'init',
                range: [764, 782],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'pp',
                  range: [786, 788],
                },
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  generator: false,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [801, 803],
                  },
                  async: false,
                  expression: false,
                  range: [790, 803],
                },
                computed: false,
                method: false,
                shorthand: false,
                kind: 'init',
                range: [786, 803],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'zz',
                  range: [807, 809],
                },
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  generator: false,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [828, 830],
                  },
                  async: true,
                  expression: false,
                  range: [811, 830],
                },
                computed: false,
                method: false,
                shorthand: false,
                kind: 'init',
                range: [807, 830],
              },
            ],
            range: [680, 832],
          },
          range: [675, 832],
        },
      ],
      kind: 'const',
      range: [669, 832],
    },
    {
      type: 'ForStatement',
      init: {
        type: 'VariableDeclaration',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: {
              type: 'Identifier',
              name: 'i',
              range: [843, 844],
            },
            init: {
              type: 'Literal',
              value: 0,
              raw: '0',
              range: [845, 846],
            },
            range: [843, 846],
          },
        ],
        kind: 'let',
        range: [839, 846],
      },
      test: null,
      update: {
        type: 'UpdateExpression',
        operator: '++',
        prefix: false,
        argument: {
          type: 'Identifier',
          name: 'i',
          range: [848, 849],
        },
        range: [848, 851],
      },
      body: {
        type: 'BlockStatement',
        body: [
          {
            type: 'ContinueStatement',
            label: null,
            range: [856, 865],
          },
        ],
        range: [853, 868],
      },
      range: [834, 868],
    },
    {
      type: 'WhileStatement',
      test: {
        type: 'BinaryExpression',
        operator: '<',
        left: {
          type: 'Identifier',
          name: 'i',
          range: [877, 878],
        },
        right: {
          type: 'Literal',
          value: 0,
          raw: '0',
          range: [881, 882],
        },
        range: [877, 882],
      },
      body: {
        type: 'BlockStatement',
        body: [
          {
            type: 'BreakStatement',
            label: null,
            range: [888, 894],
          },
        ],
        range: [884, 896],
      },
      range: [870, 896],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'y',
            range: [904, 905],
          },
          init: {
            type: 'JSXElement',
            openingElement: {
              type: 'JSXOpeningElement',
              selfClosing: false,
              name: {
                type: 'JSXIdentifier',
                name: 'Modal',
                range: [909, 914],
              },
              attributes: [
                {
                  type: 'JSXAttribute',
                  name: {
                    type: 'JSXIdentifier',
                    name: 'isOpen',
                    range: [915, 921],
                  },
                  value: {
                    type: 'JSXExpressionContainer',
                    expression: {
                      type: 'Literal',
                      value: true,
                      raw: 'true',
                      range: [923, 927],
                    },
                    range: [922, 928],
                  },
                  range: [915, 928],
                },
                {
                  type: 'JSXAttribute',
                  name: {
                    type: 'JSXIdentifier',
                    name: 'onClick',
                    range: [929, 936],
                  },
                  value: {
                    type: 'JSXExpressionContainer',
                    expression: {
                      type: 'Identifier',
                      name: 'onClick',
                      range: [938, 945],
                    },
                    range: [937, 946],
                  },
                  range: [929, 946],
                },
              ],
              range: [908, 947],
            },
            closingElement: {
              type: 'JSXClosingElement',
              name: {
                type: 'JSXIdentifier',
                name: 'Modal',
                range: [954, 959],
              },
              range: [952, 960],
            },
            children: [
              {
                type: 'JSXText',
                value: 'hello',
                raw: 'hello',
                range: [947, 952],
              },
            ],
            range: [908, 960],
          },
          range: [904, 960],
        },
      ],
      kind: 'const',
      range: [898, 960],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          object: {
            type: 'Identifier',
            name: 'ReactDOM',
            range: [962, 970],
          },
          property: {
            type: 'Identifier',
            name: 'render',
            range: [971, 977],
          },
          computed: false,
          optional: false,
          range: [962, 977],
        },
        arguments: [
          {
            type: 'JSXElement',
            openingElement: {
              type: 'JSXOpeningElement',
              selfClosing: true,
              name: {
                type: 'JSXIdentifier',
                name: 'App',
                range: [982, 985],
              },
              attributes: [],
              range: [981, 988],
            },
            closingElement: null,
            children: [],
            range: [981, 988],
          },
          {
            type: 'CallExpression',
            callee: {
              type: 'MemberExpression',
              object: {
                type: 'Identifier',
                name: 'document',
                range: [992, 1000],
              },
              property: {
                type: 'Identifier',
                name: 'getElementById',
                range: [1001, 1015],
              },
              computed: false,
              optional: false,
              range: [992, 1015],
            },
            arguments: [
              {
                type: 'Literal',
                value: 'root',
                raw: "'root'",
                range: [1016, 1022],
              },
            ],
            optional: false,
            range: [992, 1023],
          },
        ],
        optional: false,
        range: [962, 1025],
      },
      range: [962, 1026],
    },
    {
      type: 'ExportNamedDeclaration',
      source: {
        type: 'Literal',
        value: './other',
        raw: "'./other'",
        range: [1051, 1060],
      },
      specifiers: [
        {
          type: 'ExportSpecifier',
          local: {
            type: 'Identifier',
            name: 'y',
            range: [1037, 1038],
          },
          exported: {
            type: 'Identifier',
            name: 'b',
            range: [1042, 1043],
          },
          exportKind: 'value',
          range: [1037, 1043],
        },
      ],
      exportKind: 'value',
      declaration: null,
      assertions: [],
      range: [1028, 1060],
    },
    {
      type: 'ExportDefaultDeclaration',
      declaration: {
        type: 'Identifier',
        name: 'b',
        range: [1076, 1077],
      },
      exportKind: 'value',
      range: [1061, 1077],
    },
    {
      type: 'ExportNamedDeclaration',
      declaration: {
        type: 'VariableDeclaration',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: {
              type: 'Identifier',
              name: 'yyy',
              range: [1091, 1094],
            },
            init: {
              type: 'Literal',
              value: 10,
              raw: '10',
              range: [1097, 1099],
            },
            range: [1091, 1099],
          },
        ],
        kind: 'const',
        range: [1085, 1099],
      },
      specifiers: [],
      source: null,
      exportKind: 'value',
      range: [1078, 1099],
      assertions: [],
    },
    {
      type: 'ExportAllDeclaration',
      source: {
        type: 'Literal',
        value: 's',
        raw: "'s'",
        range: [1114, 1117],
      },
      exportKind: 'value',
      exported: null,
      assertions: [],
      range: [1100, 1117],
    },
  ],
  sourceType: 'module',
  range: [0, 1118],
}
