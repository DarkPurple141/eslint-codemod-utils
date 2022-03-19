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
        range: [71, 80],
      },
      specifiers: [
        {
          type: 'ImportSpecifier',
          local: {
            type: 'Identifier',
            name: 'X',
            range: [62, 63],
          },
          imported: {
            type: 'Identifier',
            name: 'X',
            range: [62, 63],
          },
          importKind: 'value',
          range: [62, 63],
        },
      ],
      importKind: 'type',
      assertions: [],
      range: [48, 80],
    },
    {
      type: 'ImportDeclaration',
      source: {
        type: 'Literal',
        value: 'thing',
        raw: "'thing'",
        range: [105, 112],
      },
      specifiers: [
        {
          type: 'ImportDefaultSpecifier',
          local: {
            type: 'Identifier',
            name: 'tmm',
            range: [88, 91],
          },
          range: [88, 91],
        },
        {
          type: 'ImportNamespaceSpecifier',
          local: {
            type: 'Identifier',
            name: 'x',
            range: [98, 99],
          },
          range: [93, 99],
        },
      ],
      importKind: 'value',
      assertions: [],
      range: [81, 112],
    },
    {
      type: 'ImportDeclaration',
      source: {
        type: 'Literal',
        value: 'blah',
        raw: "'blah'",
        range: [120, 126],
      },
      specifiers: [],
      importKind: 'value',
      assertions: [],
      range: [113, 126],
    },
    {
      type: 'FunctionDeclaration',
      id: {
        type: 'Identifier',
        name: 'App',
        range: [137, 140],
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
                range: [143, 144],
              },
              value: {
                type: 'Identifier',
                name: 'a',
                range: [143, 144],
              },
              computed: false,
              method: false,
              shorthand: true,
              kind: 'init',
              range: [143, 144],
            },
          ],
          range: [141, 146],
        },
        {
          type: 'ObjectPattern',
          properties: [
            {
              type: 'Property',
              key: {
                type: 'Identifier',
                name: 'b',
                range: [150, 151],
              },
              value: {
                type: 'Identifier',
                name: 'c',
                range: [153, 154],
              },
              computed: false,
              method: false,
              shorthand: false,
              kind: 'init',
              range: [150, 154],
            },
          ],
          range: [148, 156],
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
                  range: [176, 179],
                },
                attributes: [],
                range: [175, 180],
              },
              closingElement: {
                type: 'JSXClosingElement',
                name: {
                  type: 'JSXIdentifier',
                  name: 'div',
                  range: [318, 321],
                },
                range: [316, 322],
              },
              children: [
                {
                  type: 'JSXText',
                  value: '\n      ',
                  raw: '\n      ',
                  range: [180, 187],
                },
                {
                  type: 'JSXElement',
                  openingElement: {
                    type: 'JSXOpeningElement',
                    selfClosing: true,
                    name: {
                      type: 'JSXIdentifier',
                      name: 'Welcome',
                      range: [188, 195],
                    },
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'name',
                          range: [196, 200],
                        },
                        value: {
                          type: 'Literal',
                          value: 'Sara',
                          raw: '"Sara"',
                          range: [201, 207],
                        },
                        range: [196, 207],
                      },
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'otherName',
                          range: [208, 217],
                        },
                        value: {
                          type: 'JSXExpressionContainer',
                          expression: {
                            type: 'Literal',
                            value: 2,
                            raw: '2',
                            range: [219, 220],
                          },
                          range: [218, 221],
                        },
                        range: [208, 221],
                      },
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'isBlanketHidden',
                          range: [222, 237],
                        },
                        value: null,
                        range: [222, 237],
                      },
                      {
                        type: 'JSXSpreadAttribute',
                        argument: {
                          type: 'CallExpression',
                          callee: {
                            type: 'Identifier',
                            name: 'x',
                            range: [242, 243],
                          },
                          arguments: [],
                          optional: false,
                          range: [242, 245],
                        },
                        range: [238, 246],
                      },
                    ],
                    range: [187, 249],
                  },
                  closingElement: null,
                  children: [],
                  range: [187, 249],
                },
                {
                  type: 'JSXText',
                  value: '\n      ',
                  raw: '\n      ',
                  range: [249, 256],
                },
                {
                  type: 'JSXElement',
                  openingElement: {
                    type: 'JSXOpeningElement',
                    selfClosing: true,
                    name: {
                      type: 'JSXIdentifier',
                      name: 'Welcome',
                      range: [257, 264],
                    },
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'name',
                          range: [265, 269],
                        },
                        value: {
                          type: 'Literal',
                          value: 'Cahal',
                          raw: '"Cahal"',
                          range: [270, 277],
                        },
                        range: [265, 277],
                      },
                    ],
                    range: [256, 280],
                  },
                  closingElement: null,
                  children: [],
                  range: [256, 280],
                },
                {
                  type: 'JSXText',
                  value: '\n      ',
                  raw: '\n      ',
                  range: [280, 287],
                },
                {
                  type: 'JSXElement',
                  openingElement: {
                    type: 'JSXOpeningElement',
                    selfClosing: true,
                    name: {
                      type: 'JSXIdentifier',
                      name: 'Welcome',
                      range: [288, 295],
                    },
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'name',
                          range: [296, 300],
                        },
                        value: {
                          type: 'Literal',
                          value: 'Edite',
                          raw: '"Edite"',
                          range: [301, 308],
                        },
                        range: [296, 308],
                      },
                    ],
                    range: [287, 311],
                  },
                  closingElement: null,
                  children: [],
                  range: [287, 311],
                },
                {
                  type: 'JSXText',
                  value: '\n    ',
                  raw: '\n    ',
                  range: [311, 316],
                },
              ],
              range: [175, 322],
            },
            range: [162, 327],
          },
        ],
        range: [158, 329],
      },
      range: [128, 329],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'NewExpression',
        callee: {
          type: 'Identifier',
          name: 'X',
          range: [344, 345],
        },
        arguments: [],
        range: [340, 347],
      },
      range: [340, 347],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: 'X',
          range: [349, 350],
        },
        arguments: [],
        optional: false,
        range: [349, 352],
      },
      range: [349, 352],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'z',
            range: [358, 359],
          },
          init: null,
          range: [358, 359],
        },
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'zz',
            range: [361, 363],
          },
          init: null,
          range: [361, 363],
        },
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'zzz',
            range: [365, 368],
          },
          init: null,
          range: [365, 368],
        },
      ],
      kind: 'let',
      range: [354, 369],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'x',
            range: [376, 377],
          },
          init: {
            type: 'ClassExpression',
            id: {
              type: 'Identifier',
              name: 'Z',
              range: [386, 387],
            },
            body: {
              type: 'ClassBody',
              body: [],
              range: [388, 390],
            },
            superClass: null,
            range: [380, 390],
          },
          range: [376, 390],
        },
      ],
      kind: 'const',
      range: [370, 390],
    },
    {
      type: 'ClassDeclaration',
      id: {
        type: 'Identifier',
        name: 'D',
        range: [398, 399],
      },
      body: {
        type: 'ClassBody',
        body: [
          {
            type: 'MethodDefinition',
            key: {
              type: 'Identifier',
              name: 'constructor',
              range: [414, 425],
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
                        range: [432, 437],
                      },
                      arguments: [],
                      optional: false,
                      range: [432, 439],
                    },
                    range: [432, 439],
                  },
                ],
                range: [428, 443],
              },
              range: [425, 443],
            },
            computed: false,
            static: false,
            kind: 'constructor',
            override: false,
            range: [414, 443],
          },
        ],
        range: [410, 445],
      },
      superClass: {
        type: 'Identifier',
        name: 'B',
        range: [408, 409],
      },
      range: [392, 445],
    },
    {
      type: 'SwitchStatement',
      discriminant: {
        type: 'Identifier',
        name: 'e',
        range: [455, 456],
      },
      cases: [
        {
          type: 'SwitchCase',
          test: {
            type: 'Literal',
            value: 'x',
            raw: "'x'",
            range: [467, 470],
          },
          consequent: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'Literal',
                value: false,
                raw: 'false',
                range: [472, 477],
              },
              range: [472, 478],
            },
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'Literal',
                value: '',
                raw: "''",
                range: [479, 481],
              },
              range: [479, 482],
            },
          ],
          range: [462, 482],
        },
      ],
      range: [447, 484],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'v1',
            range: [492, 494],
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
                range: [497, 498],
              },
              right: {
                type: 'Literal',
                value: 4,
                raw: '4',
                range: [501, 502],
              },
              range: [497, 502],
            },
            right: {
              type: 'Literal',
              value: 2,
              raw: '2',
              range: [505, 506],
            },
            range: [497, 506],
          },
          range: [492, 506],
        },
      ],
      kind: 'const',
      range: [486, 506],
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
                range: [515, 516],
              },
              init: {
                type: 'Literal',
                value: 1,
                raw: '1',
                range: [519, 520],
              },
              range: [515, 520],
            },
          ],
          kind: 'let',
          range: [511, 520],
        },
      ],
      range: [508, 523],
    },
    {
      type: 'EmptyStatement',
      range: [525, 526],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'ArrayExpression',
        elements: [],
        range: [526, 528],
      },
      range: [526, 528],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'yy',
            range: [536, 538],
          },
          init: {
            type: 'ObjectExpression',
            properties: [
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'a',
                  range: [545, 546],
                },
                value: {
                  type: 'Literal',
                  value: 1,
                  raw: '1',
                  range: [548, 549],
                },
                computed: false,
                method: false,
                shorthand: false,
                kind: 'init',
                range: [545, 549],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'z',
                  range: [557, 558],
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
                    range: [561, 563],
                  },
                  range: [558, 563],
                  params: [],
                },
                computed: false,
                method: false,
                shorthand: false,
                kind: 'get',
                range: [553, 563],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'init',
                  range: [567, 571],
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
                    range: [574, 576],
                  },
                  range: [571, 576],
                  params: [],
                },
                computed: false,
                method: true,
                shorthand: false,
                kind: 'init',
                range: [567, 576],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'blob',
                  range: [586, 590],
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
                    range: [593, 595],
                  },
                  range: [590, 595],
                  params: [],
                },
                computed: false,
                method: true,
                shorthand: false,
                kind: 'init',
                range: [580, 595],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'b',
                  range: [599, 600],
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
                    range: [603, 606],
                  },
                  range: [600, 606],
                  params: [],
                },
                computed: false,
                method: true,
                shorthand: false,
                kind: 'init',
                range: [599, 606],
              },
            ],
            range: [541, 609],
          },
          range: [536, 609],
        },
      ],
      kind: 'const',
      range: [530, 609],
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
              range: [620, 621],
            },
            init: {
              type: 'Literal',
              value: 0,
              raw: '0',
              range: [622, 623],
            },
            range: [620, 623],
          },
        ],
        kind: 'let',
        range: [616, 623],
      },
      test: null,
      update: {
        type: 'UpdateExpression',
        operator: '++',
        prefix: false,
        argument: {
          type: 'Identifier',
          name: 'i',
          range: [625, 626],
        },
        range: [625, 628],
      },
      body: {
        type: 'BlockStatement',
        body: [
          {
            type: 'ContinueStatement',
            label: null,
            range: [633, 642],
          },
        ],
        range: [630, 645],
      },
      range: [611, 645],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'y',
            range: [653, 654],
          },
          init: {
            type: 'JSXElement',
            openingElement: {
              type: 'JSXOpeningElement',
              selfClosing: false,
              name: {
                type: 'JSXIdentifier',
                name: 'Modal',
                range: [658, 663],
              },
              attributes: [
                {
                  type: 'JSXAttribute',
                  name: {
                    type: 'JSXIdentifier',
                    name: 'isOpen',
                    range: [664, 670],
                  },
                  value: {
                    type: 'JSXExpressionContainer',
                    expression: {
                      type: 'Literal',
                      value: true,
                      raw: 'true',
                      range: [672, 676],
                    },
                    range: [671, 677],
                  },
                  range: [664, 677],
                },
                {
                  type: 'JSXAttribute',
                  name: {
                    type: 'JSXIdentifier',
                    name: 'onClick',
                    range: [678, 685],
                  },
                  value: {
                    type: 'JSXExpressionContainer',
                    expression: {
                      type: 'Identifier',
                      name: 'onClick',
                      range: [687, 694],
                    },
                    range: [686, 695],
                  },
                  range: [678, 695],
                },
              ],
              range: [657, 696],
            },
            closingElement: {
              type: 'JSXClosingElement',
              name: {
                type: 'JSXIdentifier',
                name: 'Modal',
                range: [703, 708],
              },
              range: [701, 709],
            },
            children: [
              {
                type: 'JSXText',
                value: 'hello',
                raw: 'hello',
                range: [696, 701],
              },
            ],
            range: [657, 709],
          },
          range: [653, 709],
        },
      ],
      kind: 'const',
      range: [647, 709],
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
            range: [711, 719],
          },
          property: {
            type: 'Identifier',
            name: 'render',
            range: [720, 726],
          },
          computed: false,
          optional: false,
          range: [711, 726],
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
                range: [731, 734],
              },
              attributes: [],
              range: [730, 737],
            },
            closingElement: null,
            children: [],
            range: [730, 737],
          },
          {
            type: 'CallExpression',
            callee: {
              type: 'MemberExpression',
              object: {
                type: 'Identifier',
                name: 'document',
                range: [741, 749],
              },
              property: {
                type: 'Identifier',
                name: 'getElementById',
                range: [750, 764],
              },
              computed: false,
              optional: false,
              range: [741, 764],
            },
            arguments: [
              {
                type: 'Literal',
                value: 'root',
                raw: "'root'",
                range: [765, 771],
              },
            ],
            optional: false,
            range: [741, 772],
          },
        ],
        optional: false,
        range: [711, 774],
      },
      range: [711, 775],
    },
    {
      type: 'ExportNamedDeclaration',
      source: {
        type: 'Literal',
        value: './other',
        raw: "'./other'",
        range: [800, 809],
      },
      specifiers: [
        {
          type: 'ExportSpecifier',
          local: {
            type: 'Identifier',
            name: 'y',
            range: [786, 787],
          },
          exported: {
            type: 'Identifier',
            name: 'b',
            range: [791, 792],
          },
          exportKind: 'value',
          range: [786, 792],
        },
      ],
      exportKind: 'value',
      declaration: null,
      assertions: [],
      range: [777, 809],
    },
    {
      type: 'ExportDefaultDeclaration',
      declaration: {
        type: 'Identifier',
        name: 'b',
        range: [825, 826],
      },
      exportKind: 'value',
      range: [810, 826],
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
              range: [840, 843],
            },
            init: {
              type: 'Literal',
              value: 10,
              raw: '10',
              range: [846, 848],
            },
            range: [840, 848],
          },
        ],
        kind: 'const',
        range: [834, 848],
      },
      specifiers: [],
      source: null,
      exportKind: 'value',
      range: [827, 848],
      assertions: [],
    },
    {
      type: 'ExportAllDeclaration',
      source: {
        type: 'Literal',
        value: 's',
        raw: "'s'",
        range: [863, 866],
      },
      exportKind: 'value',
      exported: null,
      assertions: [],
      range: [849, 866],
    },
  ],
  sourceType: 'module',
  range: [0, 867],
}
