export default {
  type: 'Program',
  body: [
    {
      type: 'ImportDeclaration',
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
          range: [12, 19],
        },
      ],
      source: {
        type: 'Literal',
        value: '@atlaskit/welcome',
        raw: "'@atlaskit/welcome'",
        range: [27, 46],
      },
      range: [0, 47],
    },
    {
      type: 'ImportDeclaration',
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
          range: [57, 58],
        },
      ],
      source: {
        type: 'Literal',
        value: './other',
        raw: "'./other'",
        range: [66, 75],
      },
      range: [48, 75],
    },
    {
      type: 'ImportDeclaration',
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
      source: {
        type: 'Literal',
        value: 'thing',
        raw: "'thing'",
        range: [100, 107],
      },
      range: [76, 107],
    },
    {
      type: 'ImportDeclaration',
      specifiers: [],
      source: {
        type: 'Literal',
        value: 'blah',
        raw: "'blah'",
        range: [115, 121],
      },
      range: [108, 121],
    },
    {
      type: 'FunctionDeclaration',
      id: {
        type: 'Identifier',
        name: 'App',
        range: [132, 135],
      },
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
              computed: false,
              value: {
                type: 'Identifier',
                name: 'a',
                range: [138, 139],
              },
              kind: 'init',
              method: false,
              shorthand: true,
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
              computed: false,
              value: {
                type: 'Identifier',
                name: 'c',
                range: [148, 149],
              },
              kind: 'init',
              method: false,
              shorthand: false,
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
                name: {
                  type: 'JSXIdentifier',
                  name: 'div',
                  range: [171, 174],
                },
                selfClosing: false,
                attributes: [],
                range: [170, 175],
              },
              children: [
                {
                  type: 'JSXText',
                  value: '\n      ',
                  raw: '\n      ',
                  range: [175, 182],
                },
                {
                  type: 'JSXElement',
                  openingElement: {
                    type: 'JSXOpeningElement',
                    name: {
                      type: 'JSXIdentifier',
                      name: 'Welcome',
                      range: [183, 190],
                    },
                    selfClosing: true,
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'name',
                          range: [191, 195],
                        },
                        value: {
                          type: 'Literal',
                          value: 'Sara',
                          raw: '"Sara"',
                          range: [196, 202],
                        },
                        range: [191, 202],
                      },
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'otherName',
                          range: [203, 212],
                        },
                        value: {
                          type: 'JSXExpressionContainer',
                          expression: {
                            type: 'Literal',
                            value: 2,
                            raw: '2',
                            range: [214, 215],
                          },
                          range: [213, 216],
                        },
                        range: [203, 216],
                      },
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'isBlanketHidden',
                          range: [217, 232],
                        },
                        value: null,
                        range: [217, 232],
                      },
                      {
                        type: 'JSXSpreadAttribute',
                        argument: {
                          type: 'CallExpression',
                          callee: {
                            type: 'Identifier',
                            name: 'x',
                            range: [237, 238],
                          },
                          arguments: [],
                          range: [237, 240],
                        },
                        range: [233, 241],
                      },
                    ],
                    range: [182, 244],
                  },
                  children: [],
                  closingElement: null,
                  range: [182, 244],
                },
                {
                  type: 'JSXText',
                  value: '\n      ',
                  raw: '\n      ',
                  range: [244, 251],
                },
                {
                  type: 'JSXElement',
                  openingElement: {
                    type: 'JSXOpeningElement',
                    name: {
                      type: 'JSXIdentifier',
                      name: 'Welcome',
                      range: [252, 259],
                    },
                    selfClosing: true,
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'name',
                          range: [260, 264],
                        },
                        value: {
                          type: 'Literal',
                          value: 'Cahal',
                          raw: '"Cahal"',
                          range: [265, 272],
                        },
                        range: [260, 272],
                      },
                    ],
                    range: [251, 275],
                  },
                  children: [],
                  closingElement: null,
                  range: [251, 275],
                },
                {
                  type: 'JSXText',
                  value: '\n      ',
                  raw: '\n      ',
                  range: [275, 282],
                },
                {
                  type: 'JSXElement',
                  openingElement: {
                    type: 'JSXOpeningElement',
                    name: {
                      type: 'JSXIdentifier',
                      name: 'Welcome',
                      range: [283, 290],
                    },
                    selfClosing: true,
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        name: {
                          type: 'JSXIdentifier',
                          name: 'name',
                          range: [291, 295],
                        },
                        value: {
                          type: 'Literal',
                          value: 'Edite',
                          raw: '"Edite"',
                          range: [296, 303],
                        },
                        range: [291, 303],
                      },
                    ],
                    range: [282, 306],
                  },
                  children: [],
                  closingElement: null,
                  range: [282, 306],
                },
                {
                  type: 'JSXText',
                  value: '\n    ',
                  raw: '\n    ',
                  range: [306, 311],
                },
              ],
              closingElement: {
                type: 'JSXClosingElement',
                name: {
                  type: 'JSXIdentifier',
                  name: 'div',
                  range: [313, 316],
                },
                range: [311, 317],
              },
              range: [170, 317],
            },
            range: [157, 322],
          },
        ],
        range: [153, 324],
      },
      generator: false,
      expression: false,
      async: false,
      range: [123, 324],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'NewExpression',
        callee: {
          type: 'Identifier',
          name: 'X',
          range: [339, 340],
        },
        arguments: [],
        range: [335, 342],
      },
      range: [335, 342],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: 'X',
          range: [344, 345],
        },
        arguments: [],
        range: [344, 347],
      },
      range: [344, 347],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'z',
            range: [353, 354],
          },
          init: null,
          range: [353, 354],
        },
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'zz',
            range: [356, 358],
          },
          init: null,
          range: [356, 358],
        },
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'zzz',
            range: [360, 363],
          },
          init: null,
          range: [360, 363],
        },
      ],
      kind: 'let',
      range: [349, 364],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'x',
            range: [371, 372],
          },
          init: {
            type: 'ClassExpression',
            id: {
              type: 'Identifier',
              name: 'Z',
              range: [381, 382],
            },
            superClass: null,
            body: {
              type: 'ClassBody',
              body: [],
              range: [383, 385],
            },
            range: [375, 385],
          },
          range: [371, 385],
        },
      ],
      kind: 'const',
      range: [365, 385],
    },
    {
      type: 'ClassDeclaration',
      id: {
        type: 'Identifier',
        name: 'D',
        range: [393, 394],
      },
      superClass: {
        type: 'Identifier',
        name: 'B',
        range: [403, 404],
      },
      body: {
        type: 'ClassBody',
        body: [
          {
            type: 'MethodDefinition',
            key: {
              type: 'Identifier',
              name: 'constructor',
              range: [410, 421],
            },
            computed: false,
            value: {
              type: 'FunctionExpression',
              id: null,
              params: [],
              body: {
                type: 'BlockStatement',
                body: [
                  {
                    type: 'ExpressionStatement',
                    expression: {
                      type: 'CallExpression',
                      callee: {
                        type: 'Super',
                        range: [428, 433],
                      },
                      arguments: [],
                      range: [428, 435],
                    },
                    range: [428, 436],
                  },
                  {
                    type: 'ExpressionStatement',
                    expression: {
                      type: 'AssignmentExpression',
                      operator: '=',
                      left: {
                        type: 'MemberExpression',
                        computed: false,
                        object: {
                          type: 'ThisExpression',
                          range: [441, 445],
                        },
                        property: {
                          type: 'Identifier',
                          name: 'hello',
                          range: [446, 451],
                        },
                        range: [441, 451],
                      },
                      right: {
                        type: 'Literal',
                        value: 'hi',
                        raw: "'hi'",
                        range: [454, 458],
                      },
                      range: [441, 458],
                    },
                    range: [441, 459],
                  },
                ],
                range: [424, 463],
              },
              generator: false,
              expression: false,
              async: false,
              range: [421, 463],
            },
            kind: 'constructor',
            static: false,
            range: [410, 463],
          },
          {
            type: 'MethodDefinition',
            key: {
              type: 'Identifier',
              name: 'other',
              range: [467, 472],
            },
            computed: false,
            value: {
              type: 'FunctionExpression',
              id: null,
              params: [],
              body: {
                type: 'BlockStatement',
                body: [
                  {
                    type: 'ReturnStatement',
                    argument: {
                      type: 'MemberExpression',
                      computed: false,
                      object: {
                        type: 'ThisExpression',
                        range: [488, 492],
                      },
                      property: {
                        type: 'Identifier',
                        name: 'hello',
                        range: [493, 498],
                      },
                      range: [488, 498],
                    },
                    range: [481, 499],
                  },
                ],
                range: [475, 503],
              },
              generator: false,
              expression: false,
              async: false,
              range: [472, 503],
            },
            kind: 'method',
            static: false,
            range: [467, 503],
          },
        ],
        range: [405, 505],
      },
      range: [387, 505],
    },
    {
      type: 'SwitchStatement',
      discriminant: {
        type: 'Identifier',
        name: 'e',
        range: [515, 516],
      },
      cases: [
        {
          type: 'SwitchCase',
          test: {
            type: 'Literal',
            value: 'x',
            raw: "'x'",
            range: [527, 530],
          },
          consequent: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'Literal',
                value: false,
                raw: 'false',
                range: [532, 537],
              },
              range: [532, 538],
            },
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'Literal',
                value: '',
                raw: "''",
                range: [539, 541],
              },
              range: [539, 542],
            },
          ],
          range: [522, 542],
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
                range: [554, 558],
              },
              range: [554, 559],
            },
          ],
          range: [545, 559],
        },
      ],
      range: [507, 561],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'v1',
            range: [569, 571],
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
                range: [574, 575],
              },
              right: {
                type: 'Literal',
                value: 4,
                raw: '4',
                range: [578, 579],
              },
              range: [574, 579],
            },
            right: {
              type: 'Literal',
              value: 2,
              raw: '2',
              range: [582, 583],
            },
            range: [574, 583],
          },
          range: [569, 583],
        },
      ],
      kind: 'const',
      range: [563, 583],
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
                range: [592, 593],
              },
              init: {
                type: 'Literal',
                value: 1,
                raw: '1',
                range: [596, 597],
              },
              range: [592, 597],
            },
          ],
          kind: 'let',
          range: [588, 597],
        },
      ],
      range: [585, 600],
    },
    {
      type: 'EmptyStatement',
      range: [602, 603],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'ArrayExpression',
        elements: [],
        range: [603, 605],
      },
      range: [603, 605],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'yy',
            range: [613, 615],
          },
          init: {
            type: 'ObjectExpression',
            properties: [
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'a',
                  range: [622, 623],
                },
                computed: false,
                value: {
                  type: 'Literal',
                  value: 1,
                  raw: '1',
                  range: [625, 626],
                },
                kind: 'init',
                method: false,
                shorthand: false,
                range: [622, 626],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'z',
                  range: [634, 635],
                },
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [638, 640],
                  },
                  generator: false,
                  expression: false,
                  async: false,
                  range: [635, 640],
                },
                kind: 'get',
                method: false,
                shorthand: false,
                range: [630, 640],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'j',
                  range: [648, 649],
                },
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  params: [
                    {
                      type: 'Identifier',
                      name: 'j',
                      range: [650, 651],
                    },
                  ],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [653, 655],
                  },
                  generator: false,
                  expression: false,
                  async: false,
                  range: [649, 655],
                },
                kind: 'set',
                method: false,
                shorthand: false,
                range: [644, 655],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'init',
                  range: [659, 663],
                },
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [666, 668],
                  },
                  generator: false,
                  expression: false,
                  async: false,
                  range: [663, 668],
                },
                kind: 'init',
                method: true,
                shorthand: false,
                range: [659, 668],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'blob',
                  range: [678, 682],
                },
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [685, 687],
                  },
                  generator: false,
                  expression: false,
                  async: true,
                  range: [682, 687],
                },
                kind: 'init',
                method: true,
                shorthand: false,
                range: [672, 687],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'b',
                  range: [691, 692],
                },
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [695, 698],
                  },
                  generator: false,
                  expression: false,
                  async: false,
                  range: [692, 698],
                },
                kind: 'init',
                method: true,
                shorthand: false,
                range: [691, 698],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'c',
                  range: [702, 703],
                },
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  id: {
                    type: 'Identifier',
                    name: 'd',
                    range: [714, 715],
                  },
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [718, 720],
                  },
                  generator: false,
                  expression: false,
                  async: false,
                  range: [705, 720],
                },
                kind: 'init',
                method: false,
                shorthand: false,
                range: [702, 720],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'pp',
                  range: [724, 726],
                },
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [739, 741],
                  },
                  generator: false,
                  expression: false,
                  async: false,
                  range: [728, 741],
                },
                kind: 'init',
                method: false,
                shorthand: false,
                range: [724, 741],
              },
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  name: 'zz',
                  range: [745, 747],
                },
                computed: false,
                value: {
                  type: 'FunctionExpression',
                  id: null,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    body: [],
                    range: [766, 768],
                  },
                  generator: false,
                  expression: false,
                  async: true,
                  range: [749, 768],
                },
                kind: 'init',
                method: false,
                shorthand: false,
                range: [745, 768],
              },
            ],
            range: [618, 770],
          },
          range: [613, 770],
        },
      ],
      kind: 'const',
      range: [607, 770],
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
              range: [781, 782],
            },
            init: {
              type: 'Literal',
              value: 0,
              raw: '0',
              range: [783, 784],
            },
            range: [781, 784],
          },
        ],
        kind: 'let',
        range: [777, 785],
      },
      test: null,
      update: {
        type: 'UpdateExpression',
        operator: '++',
        argument: {
          type: 'Identifier',
          name: 'i',
          range: [786, 787],
        },
        prefix: false,
        range: [786, 789],
      },
      body: {
        type: 'BlockStatement',
        body: [
          {
            type: 'ContinueStatement',
            label: null,
            range: [794, 803],
          },
        ],
        range: [791, 806],
      },
      range: [772, 806],
    },
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'y',
            range: [814, 815],
          },
          init: {
            type: 'JSXElement',
            openingElement: {
              type: 'JSXOpeningElement',
              name: {
                type: 'JSXIdentifier',
                name: 'Modal',
                range: [819, 824],
              },
              selfClosing: false,
              attributes: [
                {
                  type: 'JSXAttribute',
                  name: {
                    type: 'JSXIdentifier',
                    name: 'isOpen',
                    range: [825, 831],
                  },
                  value: {
                    type: 'JSXExpressionContainer',
                    expression: {
                      type: 'Literal',
                      value: true,
                      raw: 'true',
                      range: [833, 837],
                    },
                    range: [832, 838],
                  },
                  range: [825, 838],
                },
                {
                  type: 'JSXAttribute',
                  name: {
                    type: 'JSXIdentifier',
                    name: 'onClick',
                    range: [839, 846],
                  },
                  value: {
                    type: 'JSXExpressionContainer',
                    expression: {
                      type: 'Identifier',
                      name: 'onClick',
                      range: [848, 855],
                    },
                    range: [847, 856],
                  },
                  range: [839, 856],
                },
              ],
              range: [818, 857],
            },
            children: [
              {
                type: 'JSXText',
                value: 'hello',
                raw: 'hello',
                range: [857, 862],
              },
            ],
            closingElement: {
              type: 'JSXClosingElement',
              name: {
                type: 'JSXIdentifier',
                name: 'Modal',
                range: [864, 869],
              },
              range: [862, 870],
            },
            range: [818, 870],
          },
          range: [814, 870],
        },
      ],
      kind: 'const',
      range: [808, 870],
    },
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'MemberExpression',
          computed: false,
          object: {
            type: 'Identifier',
            name: 'ReactDOM',
            range: [872, 880],
          },
          property: {
            type: 'Identifier',
            name: 'render',
            range: [881, 887],
          },
          range: [872, 887],
        },
        arguments: [
          {
            type: 'JSXElement',
            openingElement: {
              type: 'JSXOpeningElement',
              name: {
                type: 'JSXIdentifier',
                name: 'App',
                range: [892, 895],
              },
              selfClosing: true,
              attributes: [],
              range: [891, 898],
            },
            children: [],
            closingElement: null,
            range: [891, 898],
          },
          {
            type: 'CallExpression',
            callee: {
              type: 'MemberExpression',
              computed: false,
              object: {
                type: 'Identifier',
                name: 'document',
                range: [902, 910],
              },
              property: {
                type: 'Identifier',
                name: 'getElementById',
                range: [911, 925],
              },
              range: [902, 925],
            },
            arguments: [
              {
                type: 'Literal',
                value: 'root',
                raw: "'root'",
                range: [926, 932],
              },
            ],
            range: [902, 933],
          },
        ],
        range: [872, 935],
      },
      range: [872, 936],
    },
    {
      type: 'ExportNamedDeclaration',
      declaration: null,
      specifiers: [
        {
          type: 'ExportSpecifier',
          exported: {
            type: 'Identifier',
            name: 'b',
            range: [952, 953],
          },
          local: {
            type: 'Identifier',
            name: 'y',
            range: [947, 948],
          },
          range: [947, 953],
        },
      ],
      source: {
        type: 'Literal',
        value: './other',
        raw: "'./other'",
        range: [961, 970],
      },
      range: [938, 970],
    },
    {
      type: 'ExportDefaultDeclaration',
      declaration: {
        type: 'Identifier',
        name: 'b',
        range: [986, 987],
      },
      range: [971, 987],
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
              range: [1001, 1004],
            },
            init: {
              type: 'Literal',
              value: 10,
              raw: '10',
              range: [1007, 1009],
            },
            range: [1001, 1009],
          },
        ],
        kind: 'const',
        range: [995, 1009],
      },
      specifiers: [],
      source: null,
      range: [988, 1009],
    },
    {
      type: 'ExportAllDeclaration',
      source: {
        type: 'Literal',
        value: 's',
        raw: "'s'",
        range: [1024, 1027],
      },
      range: [1010, 1027],
    },
  ],
  sourceType: 'module',
  range: [0, 1027],
}
