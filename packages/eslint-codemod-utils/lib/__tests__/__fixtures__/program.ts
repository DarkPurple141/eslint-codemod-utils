export default {
  type: 'Program',
  start: 0,
  end: 1387,
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 99,
      column: 0,
    },
  },
  range: [0, 1387],
  comments: [
    {
      type: 'Line',
      value: ' hello',
      start: 425,
      end: 433,
      loc: {
        start: {
          line: 21,
          column: 0,
        },
        end: {
          line: 21,
          column: 8,
        },
      },
      range: [425, 433],
    },
  ],
  sourceType: 'module',
  body: [
    {
      type: 'ImportDeclaration',
      start: 0,
      end: 47,
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 47,
        },
      },
      range: [0, 47],
      specifiers: [
        {
          type: 'ImportDefaultSpecifier',
          start: 7,
          end: 8,
          loc: {
            start: {
              line: 1,
              column: 7,
            },
            end: {
              line: 1,
              column: 8,
            },
          },
          range: [7, 8],
          local: {
            type: 'Identifier',
            start: 7,
            end: 8,
            loc: {
              start: {
                line: 1,
                column: 7,
              },
              end: {
                line: 1,
                column: 8,
              },
            },
            range: [7, 8],
            name: 'A',
          },
        },
        {
          type: 'ImportSpecifier',
          start: 12,
          end: 19,
          loc: {
            start: {
              line: 1,
              column: 12,
            },
            end: {
              line: 1,
              column: 19,
            },
          },
          range: [12, 19],
          imported: {
            type: 'Identifier',
            start: 12,
            end: 19,
            loc: {
              start: {
                line: 1,
                column: 12,
              },
              end: {
                line: 1,
                column: 19,
              },
            },
            range: [12, 19],
            name: 'Welcome',
          },
          local: {
            type: 'Identifier',
            start: 12,
            end: 19,
            loc: {
              start: {
                line: 1,
                column: 12,
              },
              end: {
                line: 1,
                column: 19,
              },
            },
            range: [12, 19],
            name: 'Welcome',
          },
        },
      ],
      source: {
        type: 'Literal',
        start: 27,
        end: 46,
        loc: {
          start: {
            line: 1,
            column: 27,
          },
          end: {
            line: 1,
            column: 46,
          },
        },
        range: [27, 46],
        value: '@atlaskit/welcome',
        raw: "'@atlaskit/welcome'",
      },
    },
    {
      type: 'ImportDeclaration',
      start: 48,
      end: 75,
      loc: {
        start: {
          line: 2,
          column: 0,
        },
        end: {
          line: 2,
          column: 27,
        },
      },
      range: [48, 75],
      specifiers: [
        {
          type: 'ImportSpecifier',
          start: 57,
          end: 58,
          loc: {
            start: {
              line: 2,
              column: 9,
            },
            end: {
              line: 2,
              column: 10,
            },
          },
          range: [57, 58],
          imported: {
            type: 'Identifier',
            start: 57,
            end: 58,
            loc: {
              start: {
                line: 2,
                column: 9,
              },
              end: {
                line: 2,
                column: 10,
              },
            },
            range: [57, 58],
            name: 'X',
          },
          local: {
            type: 'Identifier',
            start: 57,
            end: 58,
            loc: {
              start: {
                line: 2,
                column: 9,
              },
              end: {
                line: 2,
                column: 10,
              },
            },
            range: [57, 58],
            name: 'X',
          },
        },
      ],
      source: {
        type: 'Literal',
        start: 66,
        end: 75,
        loc: {
          start: {
            line: 2,
            column: 18,
          },
          end: {
            line: 2,
            column: 27,
          },
        },
        range: [66, 75],
        value: './other',
        raw: "'./other'",
      },
    },
    {
      type: 'ImportDeclaration',
      start: 76,
      end: 107,
      loc: {
        start: {
          line: 3,
          column: 0,
        },
        end: {
          line: 3,
          column: 31,
        },
      },
      range: [76, 107],
      specifiers: [
        {
          type: 'ImportDefaultSpecifier',
          start: 83,
          end: 86,
          loc: {
            start: {
              line: 3,
              column: 7,
            },
            end: {
              line: 3,
              column: 10,
            },
          },
          range: [83, 86],
          local: {
            type: 'Identifier',
            start: 83,
            end: 86,
            loc: {
              start: {
                line: 3,
                column: 7,
              },
              end: {
                line: 3,
                column: 10,
              },
            },
            range: [83, 86],
            name: 'tmm',
          },
        },
        {
          type: 'ImportNamespaceSpecifier',
          start: 88,
          end: 94,
          loc: {
            start: {
              line: 3,
              column: 12,
            },
            end: {
              line: 3,
              column: 18,
            },
          },
          range: [88, 94],
          local: {
            type: 'Identifier',
            start: 93,
            end: 94,
            loc: {
              start: {
                line: 3,
                column: 17,
              },
              end: {
                line: 3,
                column: 18,
              },
            },
            range: [93, 94],
            name: 'x',
          },
        },
      ],
      source: {
        type: 'Literal',
        start: 100,
        end: 107,
        loc: {
          start: {
            line: 3,
            column: 24,
          },
          end: {
            line: 3,
            column: 31,
          },
        },
        range: [100, 107],
        value: 'thing',
        raw: "'thing'",
      },
    },
    {
      type: 'ImportDeclaration',
      start: 108,
      end: 121,
      loc: {
        start: {
          line: 4,
          column: 0,
        },
        end: {
          line: 4,
          column: 13,
        },
      },
      range: [108, 121],
      specifiers: [],
      source: {
        type: 'Literal',
        start: 115,
        end: 121,
        loc: {
          start: {
            line: 4,
            column: 7,
          },
          end: {
            line: 4,
            column: 13,
          },
        },
        range: [115, 121],
        value: 'blah',
        raw: "'blah'",
      },
    },
    {
      type: 'VariableDeclaration',
      start: 122,
      end: 159,
      loc: {
        start: {
          line: 5,
          column: 0,
        },
        end: {
          line: 5,
          column: 37,
        },
      },
      range: [122, 159],
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 128,
          end: 159,
          loc: {
            start: {
              line: 5,
              column: 6,
            },
            end: {
              line: 5,
              column: 37,
            },
          },
          range: [128, 159],
          id: {
            type: 'Identifier',
            start: 128,
            end: 138,
            loc: {
              start: {
                line: 5,
                column: 6,
              },
              end: {
                line: 5,
                column: 16,
              },
            },
            range: [128, 138],
            name: 'someImport',
          },
          init: {
            type: 'ImportExpression',
            start: 141,
            end: 159,
            loc: {
              start: {
                line: 5,
                column: 19,
              },
              end: {
                line: 5,
                column: 37,
              },
            },
            range: [141, 159],
            source: {
              type: 'Literal',
              start: 148,
              end: 158,
              loc: {
                start: {
                  line: 5,
                  column: 26,
                },
                end: {
                  line: 5,
                  column: 36,
                },
              },
              range: [148, 158],
              value: 'hello.js',
              raw: "'hello.js'",
            },
          },
        },
      ],
      kind: 'const',
    },
    {
      type: 'VariableDeclaration',
      start: 161,
      end: 197,
      loc: {
        start: {
          line: 7,
          column: 0,
        },
        end: {
          line: 7,
          column: 36,
        },
      },
      range: [161, 197],
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 167,
          end: 197,
          loc: {
            start: {
              line: 7,
              column: 6,
            },
            end: {
              line: 7,
              column: 36,
            },
          },
          range: [167, 197],
          id: {
            type: 'Identifier',
            start: 167,
            end: 180,
            loc: {
              start: {
                line: 7,
                column: 6,
              },
              end: {
                line: 7,
                column: 19,
              },
            },
            range: [167, 180],
            name: 'someStatement',
          },
          init: {
            type: 'ChainExpression',
            start: 183,
            end: 197,
            loc: {
              start: {
                line: 7,
                column: 22,
              },
              end: {
                line: 7,
                column: 36,
              },
            },
            range: [183, 197],
            expression: {
              type: 'MemberExpression',
              start: 183,
              end: 197,
              loc: {
                start: {
                  line: 7,
                  column: 22,
                },
                end: {
                  line: 7,
                  column: 36,
                },
              },
              range: [183, 197],
              object: {
                type: 'Identifier',
                start: 183,
                end: 191,
                loc: {
                  start: {
                    line: 7,
                    column: 22,
                  },
                  end: {
                    line: 7,
                    column: 30,
                  },
                },
                range: [183, 191],
                name: 'probably',
              },
              computed: false,
              property: {
                type: 'Identifier',
                start: 193,
                end: 197,
                loc: {
                  start: {
                    line: 7,
                    column: 32,
                  },
                  end: {
                    line: 7,
                    column: 36,
                  },
                },
                range: [193, 197],
                name: 'blob',
              },
              optional: true,
            },
          },
        },
      ],
      kind: 'const',
    },
    {
      type: 'FunctionDeclaration',
      start: 199,
      end: 400,
      loc: {
        start: {
          line: 9,
          column: 0,
        },
        end: {
          line: 17,
          column: 1,
        },
      },
      range: [199, 400],
      id: {
        type: 'Identifier',
        start: 208,
        end: 211,
        loc: {
          start: {
            line: 9,
            column: 9,
          },
          end: {
            line: 9,
            column: 12,
          },
        },
        range: [208, 211],
        name: 'App',
      },
      generator: false,
      async: false,
      expression: false,
      params: [
        {
          type: 'ObjectPattern',
          start: 212,
          end: 217,
          loc: {
            start: {
              line: 9,
              column: 13,
            },
            end: {
              line: 9,
              column: 18,
            },
          },
          range: [212, 217],
          properties: [
            {
              type: 'Property',
              start: 214,
              end: 215,
              loc: {
                start: {
                  line: 9,
                  column: 15,
                },
                end: {
                  line: 9,
                  column: 16,
                },
              },
              range: [214, 215],
              key: {
                type: 'Identifier',
                start: 214,
                end: 215,
                loc: {
                  start: {
                    line: 9,
                    column: 15,
                  },
                  end: {
                    line: 9,
                    column: 16,
                  },
                },
                range: [214, 215],
                name: 'a',
              },
              computed: false,
              method: false,
              shorthand: true,
              value: {
                type: 'Identifier',
                start: 214,
                end: 215,
                loc: {
                  start: {
                    line: 9,
                    column: 15,
                  },
                  end: {
                    line: 9,
                    column: 16,
                  },
                },
                range: [214, 215],
                name: 'a',
              },
              kind: 'init',
            },
          ],
        },
        {
          type: 'ObjectPattern',
          start: 219,
          end: 227,
          loc: {
            start: {
              line: 9,
              column: 20,
            },
            end: {
              line: 9,
              column: 28,
            },
          },
          range: [219, 227],
          properties: [
            {
              type: 'Property',
              start: 221,
              end: 225,
              loc: {
                start: {
                  line: 9,
                  column: 22,
                },
                end: {
                  line: 9,
                  column: 26,
                },
              },
              range: [221, 225],
              key: {
                type: 'Identifier',
                start: 221,
                end: 222,
                loc: {
                  start: {
                    line: 9,
                    column: 22,
                  },
                  end: {
                    line: 9,
                    column: 23,
                  },
                },
                range: [221, 222],
                name: 'b',
              },
              computed: false,
              method: false,
              shorthand: false,
              value: {
                type: 'Identifier',
                start: 224,
                end: 225,
                loc: {
                  start: {
                    line: 9,
                    column: 25,
                  },
                  end: {
                    line: 9,
                    column: 26,
                  },
                },
                range: [224, 225],
                name: 'c',
              },
              kind: 'init',
            },
          ],
        },
      ],
      body: {
        type: 'BlockStatement',
        start: 229,
        end: 400,
        loc: {
          start: {
            line: 9,
            column: 30,
          },
          end: {
            line: 17,
            column: 1,
          },
        },
        range: [229, 400],
        body: [
          {
            type: 'ReturnStatement',
            start: 233,
            end: 398,
            loc: {
              start: {
                line: 10,
                column: 2,
              },
              end: {
                line: 16,
                column: 4,
              },
            },
            range: [233, 398],
            argument: {
              type: 'JSXElement',
              start: 246,
              end: 393,
              loc: {
                start: {
                  line: 11,
                  column: 4,
                },
                end: {
                  line: 15,
                  column: 10,
                },
              },
              range: [246, 393],
              openingElement: {
                type: 'JSXOpeningElement',
                start: 246,
                end: 251,
                loc: {
                  start: {
                    line: 11,
                    column: 4,
                  },
                  end: {
                    line: 11,
                    column: 9,
                  },
                },
                range: [246, 251],
                name: {
                  type: 'JSXIdentifier',
                  start: 247,
                  end: 250,
                  loc: {
                    start: {
                      line: 11,
                      column: 5,
                    },
                    end: {
                      line: 11,
                      column: 8,
                    },
                  },
                  range: [247, 250],
                  name: 'div',
                },
                attributes: [],
                selfClosing: false,
              },
              closingElement: {
                type: 'JSXClosingElement',
                start: 387,
                end: 393,
                loc: {
                  start: {
                    line: 15,
                    column: 4,
                  },
                  end: {
                    line: 15,
                    column: 10,
                  },
                },
                range: [387, 393],
                name: {
                  type: 'JSXIdentifier',
                  start: 389,
                  end: 392,
                  loc: {
                    start: {
                      line: 15,
                      column: 6,
                    },
                    end: {
                      line: 15,
                      column: 9,
                    },
                  },
                  range: [389, 392],
                  name: 'div',
                },
              },
              children: [
                {
                  type: 'JSXText',
                  start: 251,
                  end: 258,
                  loc: {
                    start: {
                      line: 11,
                      column: 9,
                    },
                    end: {
                      line: 12,
                      column: 6,
                    },
                  },
                  range: [251, 258],
                  value: '\n      ',
                  raw: '\n      ',
                },
                {
                  type: 'JSXElement',
                  start: 258,
                  end: 320,
                  loc: {
                    start: {
                      line: 12,
                      column: 6,
                    },
                    end: {
                      line: 12,
                      column: 68,
                    },
                  },
                  range: [258, 320],
                  openingElement: {
                    type: 'JSXOpeningElement',
                    start: 258,
                    end: 320,
                    loc: {
                      start: {
                        line: 12,
                        column: 6,
                      },
                      end: {
                        line: 12,
                        column: 68,
                      },
                    },
                    range: [258, 320],
                    name: {
                      type: 'JSXIdentifier',
                      start: 259,
                      end: 266,
                      loc: {
                        start: {
                          line: 12,
                          column: 7,
                        },
                        end: {
                          line: 12,
                          column: 14,
                        },
                      },
                      range: [259, 266],
                      name: 'Welcome',
                    },
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        start: 267,
                        end: 278,
                        loc: {
                          start: {
                            line: 12,
                            column: 15,
                          },
                          end: {
                            line: 12,
                            column: 26,
                          },
                        },
                        range: [267, 278],
                        name: {
                          type: 'JSXIdentifier',
                          start: 267,
                          end: 271,
                          loc: {
                            start: {
                              line: 12,
                              column: 15,
                            },
                            end: {
                              line: 12,
                              column: 19,
                            },
                          },
                          range: [267, 271],
                          name: 'name',
                        },
                        value: {
                          type: 'Literal',
                          start: 272,
                          end: 278,
                          loc: {
                            start: {
                              line: 12,
                              column: 20,
                            },
                            end: {
                              line: 12,
                              column: 26,
                            },
                          },
                          range: [272, 278],
                          value: 'Sara',
                          raw: '"Sara"',
                        },
                      },
                      {
                        type: 'JSXAttribute',
                        start: 279,
                        end: 292,
                        loc: {
                          start: {
                            line: 12,
                            column: 27,
                          },
                          end: {
                            line: 12,
                            column: 40,
                          },
                        },
                        range: [279, 292],
                        name: {
                          type: 'JSXIdentifier',
                          start: 279,
                          end: 288,
                          loc: {
                            start: {
                              line: 12,
                              column: 27,
                            },
                            end: {
                              line: 12,
                              column: 36,
                            },
                          },
                          range: [279, 288],
                          name: 'otherName',
                        },
                        value: {
                          type: 'JSXExpressionContainer',
                          start: 289,
                          end: 292,
                          loc: {
                            start: {
                              line: 12,
                              column: 37,
                            },
                            end: {
                              line: 12,
                              column: 40,
                            },
                          },
                          range: [289, 292],
                          expression: {
                            type: 'Literal',
                            start: 290,
                            end: 291,
                            loc: {
                              start: {
                                line: 12,
                                column: 38,
                              },
                              end: {
                                line: 12,
                                column: 39,
                              },
                            },
                            range: [290, 291],
                            value: 2,
                            raw: '2',
                          },
                        },
                      },
                      {
                        type: 'JSXAttribute',
                        start: 293,
                        end: 308,
                        loc: {
                          start: {
                            line: 12,
                            column: 41,
                          },
                          end: {
                            line: 12,
                            column: 56,
                          },
                        },
                        range: [293, 308],
                        name: {
                          type: 'JSXIdentifier',
                          start: 293,
                          end: 308,
                          loc: {
                            start: {
                              line: 12,
                              column: 41,
                            },
                            end: {
                              line: 12,
                              column: 56,
                            },
                          },
                          range: [293, 308],
                          name: 'isBlanketHidden',
                        },
                        value: null,
                      },
                      {
                        type: 'JSXSpreadAttribute',
                        start: 309,
                        end: 317,
                        loc: {
                          start: {
                            line: 12,
                            column: 57,
                          },
                          end: {
                            line: 12,
                            column: 65,
                          },
                        },
                        range: [309, 317],
                        argument: {
                          type: 'CallExpression',
                          start: 313,
                          end: 316,
                          loc: {
                            start: {
                              line: 12,
                              column: 61,
                            },
                            end: {
                              line: 12,
                              column: 64,
                            },
                          },
                          range: [313, 316],
                          callee: {
                            type: 'Identifier',
                            start: 313,
                            end: 314,
                            loc: {
                              start: {
                                line: 12,
                                column: 61,
                              },
                              end: {
                                line: 12,
                                column: 62,
                              },
                            },
                            range: [313, 314],
                            name: 'x',
                          },
                          arguments: [],
                          optional: false,
                        },
                      },
                    ],
                    selfClosing: true,
                  },
                  closingElement: null,
                  children: [],
                },
                {
                  type: 'JSXText',
                  start: 320,
                  end: 327,
                  loc: {
                    start: {
                      line: 12,
                      column: 68,
                    },
                    end: {
                      line: 13,
                      column: 6,
                    },
                  },
                  range: [320, 327],
                  value: '\n      ',
                  raw: '\n      ',
                },
                {
                  type: 'JSXElement',
                  start: 327,
                  end: 351,
                  loc: {
                    start: {
                      line: 13,
                      column: 6,
                    },
                    end: {
                      line: 13,
                      column: 30,
                    },
                  },
                  range: [327, 351],
                  openingElement: {
                    type: 'JSXOpeningElement',
                    start: 327,
                    end: 351,
                    loc: {
                      start: {
                        line: 13,
                        column: 6,
                      },
                      end: {
                        line: 13,
                        column: 30,
                      },
                    },
                    range: [327, 351],
                    name: {
                      type: 'JSXIdentifier',
                      start: 328,
                      end: 335,
                      loc: {
                        start: {
                          line: 13,
                          column: 7,
                        },
                        end: {
                          line: 13,
                          column: 14,
                        },
                      },
                      range: [328, 335],
                      name: 'Welcome',
                    },
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        start: 336,
                        end: 348,
                        loc: {
                          start: {
                            line: 13,
                            column: 15,
                          },
                          end: {
                            line: 13,
                            column: 27,
                          },
                        },
                        range: [336, 348],
                        name: {
                          type: 'JSXIdentifier',
                          start: 336,
                          end: 340,
                          loc: {
                            start: {
                              line: 13,
                              column: 15,
                            },
                            end: {
                              line: 13,
                              column: 19,
                            },
                          },
                          range: [336, 340],
                          name: 'name',
                        },
                        value: {
                          type: 'Literal',
                          start: 341,
                          end: 348,
                          loc: {
                            start: {
                              line: 13,
                              column: 20,
                            },
                            end: {
                              line: 13,
                              column: 27,
                            },
                          },
                          range: [341, 348],
                          value: 'Cahal',
                          raw: '"Cahal"',
                        },
                      },
                    ],
                    selfClosing: true,
                  },
                  closingElement: null,
                  children: [],
                },
                {
                  type: 'JSXText',
                  start: 351,
                  end: 358,
                  loc: {
                    start: {
                      line: 13,
                      column: 30,
                    },
                    end: {
                      line: 14,
                      column: 6,
                    },
                  },
                  range: [351, 358],
                  value: '\n      ',
                  raw: '\n      ',
                },
                {
                  type: 'JSXElement',
                  start: 358,
                  end: 382,
                  loc: {
                    start: {
                      line: 14,
                      column: 6,
                    },
                    end: {
                      line: 14,
                      column: 30,
                    },
                  },
                  range: [358, 382],
                  openingElement: {
                    type: 'JSXOpeningElement',
                    start: 358,
                    end: 382,
                    loc: {
                      start: {
                        line: 14,
                        column: 6,
                      },
                      end: {
                        line: 14,
                        column: 30,
                      },
                    },
                    range: [358, 382],
                    name: {
                      type: 'JSXIdentifier',
                      start: 359,
                      end: 366,
                      loc: {
                        start: {
                          line: 14,
                          column: 7,
                        },
                        end: {
                          line: 14,
                          column: 14,
                        },
                      },
                      range: [359, 366],
                      name: 'Welcome',
                    },
                    attributes: [
                      {
                        type: 'JSXAttribute',
                        start: 367,
                        end: 379,
                        loc: {
                          start: {
                            line: 14,
                            column: 15,
                          },
                          end: {
                            line: 14,
                            column: 27,
                          },
                        },
                        range: [367, 379],
                        name: {
                          type: 'JSXIdentifier',
                          start: 367,
                          end: 371,
                          loc: {
                            start: {
                              line: 14,
                              column: 15,
                            },
                            end: {
                              line: 14,
                              column: 19,
                            },
                          },
                          range: [367, 371],
                          name: 'name',
                        },
                        value: {
                          type: 'Literal',
                          start: 372,
                          end: 379,
                          loc: {
                            start: {
                              line: 14,
                              column: 20,
                            },
                            end: {
                              line: 14,
                              column: 27,
                            },
                          },
                          range: [372, 379],
                          value: 'Edite',
                          raw: '"Edite"',
                        },
                      },
                    ],
                    selfClosing: true,
                  },
                  closingElement: null,
                  children: [],
                },
                {
                  type: 'JSXText',
                  start: 382,
                  end: 387,
                  loc: {
                    start: {
                      line: 14,
                      column: 30,
                    },
                    end: {
                      line: 15,
                      column: 4,
                    },
                  },
                  range: [382, 387],
                  value: '\n    ',
                  raw: '\n    ',
                },
              ],
            },
          },
        ],
      },
    },
    {
      type: 'VariableDeclaration',
      start: 402,
      end: 423,
      loc: {
        start: {
          line: 19,
          column: 0,
        },
        end: {
          line: 19,
          column: 21,
        },
      },
      range: [402, 423],
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 408,
          end: 423,
          loc: {
            start: {
              line: 19,
              column: 6,
            },
            end: {
              line: 19,
              column: 21,
            },
          },
          range: [408, 423],
          id: {
            type: 'Identifier',
            start: 408,
            end: 413,
            loc: {
              start: {
                line: 19,
                column: 6,
              },
              end: {
                line: 19,
                column: 11,
              },
            },
            range: [408, 413],
            name: 'silly',
          },
          init: {
            type: 'SequenceExpression',
            start: 417,
            end: 422,
            loc: {
              start: {
                line: 19,
                column: 15,
              },
              end: {
                line: 19,
                column: 20,
              },
            },
            range: [417, 422],
            expressions: [
              {
                type: 'Literal',
                start: 417,
                end: 418,
                loc: {
                  start: {
                    line: 19,
                    column: 15,
                  },
                  end: {
                    line: 19,
                    column: 16,
                  },
                },
                range: [417, 418],
                value: 1,
                raw: '1',
              },
              {
                type: 'Literal',
                start: 421,
                end: 422,
                loc: {
                  start: {
                    line: 19,
                    column: 19,
                  },
                  end: {
                    line: 19,
                    column: 20,
                  },
                },
                range: [421, 422],
                value: 3,
                raw: '3',
              },
            ],
          },
        },
      ],
      kind: 'const',
    },
    {
      type: 'ExpressionStatement',
      start: 434,
      end: 490,
      loc: {
        start: {
          line: 22,
          column: 0,
        },
        end: {
          line: 22,
          column: 56,
        },
      },
      range: [434, 490],
      expression: {
        type: 'NewExpression',
        start: 434,
        end: 490,
        loc: {
          start: {
            line: 22,
            column: 0,
          },
          end: {
            line: 22,
            column: 56,
          },
        },
        range: [434, 490],
        callee: {
          type: 'Identifier',
          start: 438,
          end: 439,
          loc: {
            start: {
              line: 22,
              column: 4,
            },
            end: {
              line: 22,
              column: 5,
            },
          },
          range: [438, 439],
          name: 'X',
        },
        arguments: [
          {
            type: 'TemplateLiteral',
            start: 440,
            end: 489,
            loc: {
              start: {
                line: 22,
                column: 6,
              },
              end: {
                line: 22,
                column: 55,
              },
            },
            range: [440, 489],
            expressions: [
              {
                type: 'Identifier',
                start: 443,
                end: 448,
                loc: {
                  start: {
                    line: 22,
                    column: 9,
                  },
                  end: {
                    line: 22,
                    column: 14,
                  },
                },
                range: [443, 448],
                name: 'hello',
              },
              {
                type: 'ConditionalExpression',
                start: 461,
                end: 487,
                loc: {
                  start: {
                    line: 22,
                    column: 27,
                  },
                  end: {
                    line: 22,
                    column: 53,
                  },
                },
                range: [461, 487],
                test: {
                  type: 'BinaryExpression',
                  start: 461,
                  end: 467,
                  loc: {
                    start: {
                      line: 22,
                      column: 27,
                    },
                    end: {
                      line: 22,
                      column: 33,
                    },
                  },
                  range: [461, 467],
                  left: {
                    type: 'Literal',
                    start: 461,
                    end: 462,
                    loc: {
                      start: {
                        line: 22,
                        column: 27,
                      },
                      end: {
                        line: 22,
                        column: 28,
                      },
                    },
                    range: [461, 462],
                    value: 1,
                    raw: '1',
                  },
                  operator: '==',
                  right: {
                    type: 'Literal',
                    start: 466,
                    end: 467,
                    loc: {
                      start: {
                        line: 22,
                        column: 32,
                      },
                      end: {
                        line: 22,
                        column: 33,
                      },
                    },
                    range: [466, 467],
                    value: 2,
                    raw: '2',
                  },
                },
                consequent: {
                  type: 'TemplateLiteral',
                  start: 470,
                  end: 482,
                  loc: {
                    start: {
                      line: 22,
                      column: 36,
                    },
                    end: {
                      line: 22,
                      column: 48,
                    },
                  },
                  range: [470, 482],
                  expressions: [
                    {
                      type: 'Identifier',
                      start: 473,
                      end: 480,
                      loc: {
                        start: {
                          line: 22,
                          column: 39,
                        },
                        end: {
                          line: 22,
                          column: 46,
                        },
                      },
                      range: [473, 480],
                      name: 'Welcome',
                    },
                  ],
                  quasis: [
                    {
                      type: 'TemplateElement',
                      start: 471,
                      end: 471,
                      loc: {
                        start: {
                          line: 22,
                          column: 36,
                        },
                        end: {
                          line: 22,
                          column: 39,
                        },
                      },
                      range: [470, 473],
                      value: {
                        raw: '',
                        cooked: '',
                      },
                      tail: false,
                    },
                    {
                      type: 'TemplateElement',
                      start: 481,
                      end: 481,
                      loc: {
                        start: {
                          line: 22,
                          column: 46,
                        },
                        end: {
                          line: 22,
                          column: 48,
                        },
                      },
                      range: [480, 482],
                      value: {
                        raw: '',
                        cooked: '',
                      },
                      tail: true,
                    },
                  ],
                },
                alternate: {
                  type: 'Literal',
                  start: 485,
                  end: 487,
                  loc: {
                    start: {
                      line: 22,
                      column: 51,
                    },
                    end: {
                      line: 22,
                      column: 53,
                    },
                  },
                  range: [485, 487],
                  value: '',
                  raw: "''",
                },
              },
            ],
            quasis: [
              {
                type: 'TemplateElement',
                start: 441,
                end: 441,
                loc: {
                  start: {
                    line: 22,
                    column: 6,
                  },
                  end: {
                    line: 22,
                    column: 9,
                  },
                },
                range: [440, 443],
                value: {
                  raw: '',
                  cooked: '',
                },
                tail: false,
              },
              {
                type: 'TemplateElement',
                start: 449,
                end: 459,
                loc: {
                  start: {
                    line: 22,
                    column: 14,
                  },
                  end: {
                    line: 22,
                    column: 27,
                  },
                },
                range: [448, 461],
                value: {
                  raw: ': "world" ',
                  cooked: ': "world" ',
                },
                tail: false,
              },
              {
                type: 'TemplateElement',
                start: 488,
                end: 488,
                loc: {
                  start: {
                    line: 22,
                    column: 53,
                  },
                  end: {
                    line: 22,
                    column: 55,
                  },
                },
                range: [487, 489],
                value: {
                  raw: '',
                  cooked: '',
                },
                tail: true,
              },
            ],
          },
        ],
      },
    },
    {
      type: 'ExpressionStatement',
      start: 492,
      end: 495,
      loc: {
        start: {
          line: 24,
          column: 0,
        },
        end: {
          line: 24,
          column: 3,
        },
      },
      range: [492, 495],
      expression: {
        type: 'CallExpression',
        start: 492,
        end: 495,
        loc: {
          start: {
            line: 24,
            column: 0,
          },
          end: {
            line: 24,
            column: 3,
          },
        },
        range: [492, 495],
        callee: {
          type: 'Identifier',
          start: 492,
          end: 493,
          loc: {
            start: {
              line: 24,
              column: 0,
            },
            end: {
              line: 24,
              column: 1,
            },
          },
          range: [492, 493],
          name: 'X',
        },
        arguments: [],
        optional: false,
      },
    },
    {
      type: 'VariableDeclaration',
      start: 497,
      end: 512,
      loc: {
        start: {
          line: 26,
          column: 0,
        },
        end: {
          line: 26,
          column: 15,
        },
      },
      range: [497, 512],
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 501,
          end: 502,
          loc: {
            start: {
              line: 26,
              column: 4,
            },
            end: {
              line: 26,
              column: 5,
            },
          },
          range: [501, 502],
          id: {
            type: 'Identifier',
            start: 501,
            end: 502,
            loc: {
              start: {
                line: 26,
                column: 4,
              },
              end: {
                line: 26,
                column: 5,
              },
            },
            range: [501, 502],
            name: 'z',
          },
          init: null,
        },
        {
          type: 'VariableDeclarator',
          start: 504,
          end: 506,
          loc: {
            start: {
              line: 26,
              column: 7,
            },
            end: {
              line: 26,
              column: 9,
            },
          },
          range: [504, 506],
          id: {
            type: 'Identifier',
            start: 504,
            end: 506,
            loc: {
              start: {
                line: 26,
                column: 7,
              },
              end: {
                line: 26,
                column: 9,
              },
            },
            range: [504, 506],
            name: 'zz',
          },
          init: null,
        },
        {
          type: 'VariableDeclarator',
          start: 508,
          end: 511,
          loc: {
            start: {
              line: 26,
              column: 11,
            },
            end: {
              line: 26,
              column: 14,
            },
          },
          range: [508, 511],
          id: {
            type: 'Identifier',
            start: 508,
            end: 511,
            loc: {
              start: {
                line: 26,
                column: 11,
              },
              end: {
                line: 26,
                column: 14,
              },
            },
            range: [508, 511],
            name: 'zzz',
          },
          init: null,
        },
      ],
      kind: 'let',
    },
    {
      type: 'VariableDeclaration',
      start: 513,
      end: 533,
      loc: {
        start: {
          line: 27,
          column: 0,
        },
        end: {
          line: 27,
          column: 20,
        },
      },
      range: [513, 533],
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 519,
          end: 533,
          loc: {
            start: {
              line: 27,
              column: 6,
            },
            end: {
              line: 27,
              column: 20,
            },
          },
          range: [519, 533],
          id: {
            type: 'Identifier',
            start: 519,
            end: 520,
            loc: {
              start: {
                line: 27,
                column: 6,
              },
              end: {
                line: 27,
                column: 7,
              },
            },
            range: [519, 520],
            name: 'p',
          },
          init: {
            type: 'ClassExpression',
            start: 523,
            end: 533,
            loc: {
              start: {
                line: 27,
                column: 10,
              },
              end: {
                line: 27,
                column: 20,
              },
            },
            range: [523, 533],
            id: {
              type: 'Identifier',
              start: 529,
              end: 530,
              loc: {
                start: {
                  line: 27,
                  column: 16,
                },
                end: {
                  line: 27,
                  column: 17,
                },
              },
              range: [529, 530],
              name: 'Z',
            },
            superClass: null,
            body: {
              type: 'ClassBody',
              start: 531,
              end: 533,
              loc: {
                start: {
                  line: 27,
                  column: 18,
                },
                end: {
                  line: 27,
                  column: 20,
                },
              },
              range: [531, 533],
              body: [],
            },
          },
        },
      ],
      kind: 'const',
    },
    {
      type: 'ClassDeclaration',
      start: 535,
      end: 653,
      loc: {
        start: {
          line: 29,
          column: 0,
        },
        end: {
          line: 39,
          column: 1,
        },
      },
      range: [535, 653],
      id: {
        type: 'Identifier',
        start: 541,
        end: 542,
        loc: {
          start: {
            line: 29,
            column: 6,
          },
          end: {
            line: 29,
            column: 7,
          },
        },
        range: [541, 542],
        name: 'D',
      },
      superClass: {
        type: 'Identifier',
        start: 551,
        end: 552,
        loc: {
          start: {
            line: 29,
            column: 16,
          },
          end: {
            line: 29,
            column: 17,
          },
        },
        range: [551, 552],
        name: 'B',
      },
      body: {
        type: 'ClassBody',
        start: 553,
        end: 653,
        loc: {
          start: {
            line: 29,
            column: 18,
          },
          end: {
            line: 39,
            column: 1,
          },
        },
        range: [553, 653],
        body: [
          {
            type: 'MethodDefinition',
            start: 558,
            end: 611,
            loc: {
              start: {
                line: 31,
                column: 2,
              },
              end: {
                line: 34,
                column: 3,
              },
            },
            range: [558, 611],
            static: false,
            key: {
              type: 'Identifier',
              start: 558,
              end: 569,
              loc: {
                start: {
                  line: 31,
                  column: 2,
                },
                end: {
                  line: 31,
                  column: 13,
                },
              },
              range: [558, 569],
              name: 'constructor',
            },
            computed: false,
            kind: 'constructor',
            value: {
              type: 'FunctionExpression',
              start: 569,
              end: 611,
              loc: {
                start: {
                  line: 31,
                  column: 13,
                },
                end: {
                  line: 34,
                  column: 3,
                },
              },
              range: [569, 611],
              id: null,
              generator: false,
              async: false,
              expression: false,
              params: [],
              body: {
                type: 'BlockStatement',
                start: 572,
                end: 611,
                loc: {
                  start: {
                    line: 31,
                    column: 16,
                  },
                  end: {
                    line: 34,
                    column: 3,
                  },
                },
                range: [572, 611],
                body: [
                  {
                    type: 'ExpressionStatement',
                    start: 576,
                    end: 584,
                    loc: {
                      start: {
                        line: 32,
                        column: 2,
                      },
                      end: {
                        line: 32,
                        column: 10,
                      },
                    },
                    range: [576, 584],
                    expression: {
                      type: 'CallExpression',
                      start: 576,
                      end: 583,
                      loc: {
                        start: {
                          line: 32,
                          column: 2,
                        },
                        end: {
                          line: 32,
                          column: 9,
                        },
                      },
                      range: [576, 583],
                      callee: {
                        type: 'Super',
                        start: 576,
                        end: 581,
                        loc: {
                          start: {
                            line: 32,
                            column: 2,
                          },
                          end: {
                            line: 32,
                            column: 7,
                          },
                        },
                        range: [576, 581],
                      },
                      arguments: [],
                      optional: false,
                    },
                  },
                  {
                    type: 'ExpressionStatement',
                    start: 589,
                    end: 607,
                    loc: {
                      start: {
                        line: 33,
                        column: 4,
                      },
                      end: {
                        line: 33,
                        column: 22,
                      },
                    },
                    range: [589, 607],
                    expression: {
                      type: 'AssignmentExpression',
                      start: 589,
                      end: 606,
                      loc: {
                        start: {
                          line: 33,
                          column: 4,
                        },
                        end: {
                          line: 33,
                          column: 21,
                        },
                      },
                      range: [589, 606],
                      operator: '=',
                      left: {
                        type: 'MemberExpression',
                        start: 589,
                        end: 599,
                        loc: {
                          start: {
                            line: 33,
                            column: 4,
                          },
                          end: {
                            line: 33,
                            column: 14,
                          },
                        },
                        range: [589, 599],
                        object: {
                          type: 'ThisExpression',
                          start: 589,
                          end: 593,
                          loc: {
                            start: {
                              line: 33,
                              column: 4,
                            },
                            end: {
                              line: 33,
                              column: 8,
                            },
                          },
                          range: [589, 593],
                        },
                        computed: false,
                        property: {
                          type: 'Identifier',
                          start: 594,
                          end: 599,
                          loc: {
                            start: {
                              line: 33,
                              column: 9,
                            },
                            end: {
                              line: 33,
                              column: 14,
                            },
                          },
                          range: [594, 599],
                          name: 'hello',
                        },
                        optional: false,
                      },
                      right: {
                        type: 'Literal',
                        start: 602,
                        end: 606,
                        loc: {
                          start: {
                            line: 33,
                            column: 17,
                          },
                          end: {
                            line: 33,
                            column: 21,
                          },
                        },
                        range: [602, 606],
                        value: 'hi',
                        raw: "'hi'",
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            type: 'MethodDefinition',
            start: 615,
            end: 651,
            loc: {
              start: {
                line: 36,
                column: 2,
              },
              end: {
                line: 38,
                column: 3,
              },
            },
            range: [615, 651],
            static: false,
            key: {
              type: 'Identifier',
              start: 615,
              end: 620,
              loc: {
                start: {
                  line: 36,
                  column: 2,
                },
                end: {
                  line: 36,
                  column: 7,
                },
              },
              range: [615, 620],
              name: 'other',
            },
            computed: false,
            kind: 'method',
            value: {
              type: 'FunctionExpression',
              start: 620,
              end: 651,
              loc: {
                start: {
                  line: 36,
                  column: 7,
                },
                end: {
                  line: 38,
                  column: 3,
                },
              },
              range: [620, 651],
              id: null,
              generator: false,
              async: false,
              expression: false,
              params: [],
              body: {
                type: 'BlockStatement',
                start: 623,
                end: 651,
                loc: {
                  start: {
                    line: 36,
                    column: 10,
                  },
                  end: {
                    line: 38,
                    column: 3,
                  },
                },
                range: [623, 651],
                body: [
                  {
                    type: 'ReturnStatement',
                    start: 629,
                    end: 647,
                    loc: {
                      start: {
                        line: 37,
                        column: 4,
                      },
                      end: {
                        line: 37,
                        column: 22,
                      },
                    },
                    range: [629, 647],
                    argument: {
                      type: 'MemberExpression',
                      start: 636,
                      end: 646,
                      loc: {
                        start: {
                          line: 37,
                          column: 11,
                        },
                        end: {
                          line: 37,
                          column: 21,
                        },
                      },
                      range: [636, 646],
                      object: {
                        type: 'ThisExpression',
                        start: 636,
                        end: 640,
                        loc: {
                          start: {
                            line: 37,
                            column: 11,
                          },
                          end: {
                            line: 37,
                            column: 15,
                          },
                        },
                        range: [636, 640],
                      },
                      computed: false,
                      property: {
                        type: 'Identifier',
                        start: 641,
                        end: 646,
                        loc: {
                          start: {
                            line: 37,
                            column: 16,
                          },
                          end: {
                            line: 37,
                            column: 21,
                          },
                        },
                        range: [641, 646],
                        name: 'hello',
                      },
                      optional: false,
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
    {
      type: 'SwitchStatement',
      start: 655,
      end: 709,
      loc: {
        start: {
          line: 41,
          column: 0,
        },
        end: {
          line: 44,
          column: 1,
        },
      },
      range: [655, 709],
      discriminant: {
        type: 'Identifier',
        start: 663,
        end: 664,
        loc: {
          start: {
            line: 41,
            column: 8,
          },
          end: {
            line: 41,
            column: 9,
          },
        },
        range: [663, 664],
        name: 'e',
      },
      cases: [
        {
          type: 'SwitchCase',
          start: 670,
          end: 690,
          loc: {
            start: {
              line: 42,
              column: 2,
            },
            end: {
              line: 42,
              column: 22,
            },
          },
          range: [670, 690],
          consequent: [
            {
              type: 'ExpressionStatement',
              start: 680,
              end: 686,
              loc: {
                start: {
                  line: 42,
                  column: 12,
                },
                end: {
                  line: 42,
                  column: 18,
                },
              },
              range: [680, 686],
              expression: {
                type: 'Literal',
                start: 680,
                end: 685,
                loc: {
                  start: {
                    line: 42,
                    column: 12,
                  },
                  end: {
                    line: 42,
                    column: 17,
                  },
                },
                range: [680, 685],
                value: false,
                raw: 'false',
              },
            },
            {
              type: 'ExpressionStatement',
              start: 687,
              end: 690,
              loc: {
                start: {
                  line: 42,
                  column: 19,
                },
                end: {
                  line: 42,
                  column: 22,
                },
              },
              range: [687, 690],
              expression: {
                type: 'Literal',
                start: 687,
                end: 689,
                loc: {
                  start: {
                    line: 42,
                    column: 19,
                  },
                  end: {
                    line: 42,
                    column: 21,
                  },
                },
                range: [687, 689],
                value: '',
                raw: "''",
              },
            },
          ],
          test: {
            type: 'Literal',
            start: 675,
            end: 678,
            loc: {
              start: {
                line: 42,
                column: 7,
              },
              end: {
                line: 42,
                column: 10,
              },
            },
            range: [675, 678],
            value: 'x',
            raw: "'x'",
          },
        },
        {
          type: 'SwitchCase',
          start: 693,
          end: 707,
          loc: {
            start: {
              line: 43,
              column: 2,
            },
            end: {
              line: 43,
              column: 16,
            },
          },
          range: [693, 707],
          consequent: [
            {
              type: 'ExpressionStatement',
              start: 702,
              end: 707,
              loc: {
                start: {
                  line: 43,
                  column: 11,
                },
                end: {
                  line: 43,
                  column: 16,
                },
              },
              range: [702, 707],
              expression: {
                type: 'Literal',
                start: 702,
                end: 706,
                loc: {
                  start: {
                    line: 43,
                    column: 11,
                  },
                  end: {
                    line: 43,
                    column: 15,
                  },
                },
                range: [702, 706],
                value: 'zz',
                raw: "'zz'",
              },
            },
          ],
          test: null,
        },
      ],
    },
    {
      type: 'VariableDeclaration',
      start: 711,
      end: 731,
      loc: {
        start: {
          line: 46,
          column: 0,
        },
        end: {
          line: 46,
          column: 20,
        },
      },
      range: [711, 731],
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 717,
          end: 731,
          loc: {
            start: {
              line: 46,
              column: 6,
            },
            end: {
              line: 46,
              column: 20,
            },
          },
          range: [717, 731],
          id: {
            type: 'Identifier',
            start: 717,
            end: 719,
            loc: {
              start: {
                line: 46,
                column: 6,
              },
              end: {
                line: 46,
                column: 8,
              },
            },
            range: [717, 719],
            name: 'v1',
          },
          init: {
            type: 'BinaryExpression',
            start: 722,
            end: 731,
            loc: {
              start: {
                line: 46,
                column: 11,
              },
              end: {
                line: 46,
                column: 20,
              },
            },
            range: [722, 731],
            left: {
              type: 'BinaryExpression',
              start: 722,
              end: 727,
              loc: {
                start: {
                  line: 46,
                  column: 11,
                },
                end: {
                  line: 46,
                  column: 16,
                },
              },
              range: [722, 727],
              left: {
                type: 'Literal',
                start: 722,
                end: 723,
                loc: {
                  start: {
                    line: 46,
                    column: 11,
                  },
                  end: {
                    line: 46,
                    column: 12,
                  },
                },
                range: [722, 723],
                value: 1,
                raw: '1',
              },
              operator: '+',
              right: {
                type: 'Literal',
                start: 726,
                end: 727,
                loc: {
                  start: {
                    line: 46,
                    column: 15,
                  },
                  end: {
                    line: 46,
                    column: 16,
                  },
                },
                range: [726, 727],
                value: 4,
                raw: '4',
              },
            },
            operator: '+',
            right: {
              type: 'Literal',
              start: 730,
              end: 731,
              loc: {
                start: {
                  line: 46,
                  column: 19,
                },
                end: {
                  line: 46,
                  column: 20,
                },
              },
              range: [730, 731],
              value: 2,
              raw: '2',
            },
          },
        },
      ],
      kind: 'const',
    },
    {
      type: 'BlockStatement',
      start: 733,
      end: 748,
      loc: {
        start: {
          line: 48,
          column: 0,
        },
        end: {
          line: 50,
          column: 1,
        },
      },
      range: [733, 748],
      body: [
        {
          type: 'VariableDeclaration',
          start: 736,
          end: 745,
          loc: {
            start: {
              line: 49,
              column: 1,
            },
            end: {
              line: 49,
              column: 10,
            },
          },
          range: [736, 745],
          declarations: [
            {
              type: 'VariableDeclarator',
              start: 740,
              end: 745,
              loc: {
                start: {
                  line: 49,
                  column: 5,
                },
                end: {
                  line: 49,
                  column: 10,
                },
              },
              range: [740, 745],
              id: {
                type: 'Identifier',
                start: 740,
                end: 741,
                loc: {
                  start: {
                    line: 49,
                    column: 5,
                  },
                  end: {
                    line: 49,
                    column: 6,
                  },
                },
                range: [740, 741],
                name: 'a',
              },
              init: {
                type: 'Literal',
                start: 744,
                end: 745,
                loc: {
                  start: {
                    line: 49,
                    column: 9,
                  },
                  end: {
                    line: 49,
                    column: 10,
                  },
                },
                range: [744, 745],
                value: 1,
                raw: '1',
              },
            },
          ],
          kind: 'let',
        },
      ],
    },
    {
      type: 'EmptyStatement',
      start: 750,
      end: 751,
      loc: {
        start: {
          line: 52,
          column: 0,
        },
        end: {
          line: 52,
          column: 1,
        },
      },
      range: [750, 751],
    },
    {
      type: 'ExpressionStatement',
      start: 751,
      end: 753,
      loc: {
        start: {
          line: 52,
          column: 1,
        },
        end: {
          line: 52,
          column: 3,
        },
      },
      range: [751, 753],
      expression: {
        type: 'ArrayExpression',
        start: 751,
        end: 753,
        loc: {
          start: {
            line: 52,
            column: 1,
          },
          end: {
            line: 52,
            column: 3,
          },
        },
        range: [751, 753],
        elements: [],
      },
    },
    {
      type: 'IfStatement',
      start: 755,
      end: 850,
      loc: {
        start: {
          line: 54,
          column: 0,
        },
        end: {
          line: 60,
          column: 1,
        },
      },
      range: [755, 850],
      test: {
        type: 'BinaryExpression',
        start: 759,
        end: 764,
        loc: {
          start: {
            line: 54,
            column: 4,
          },
          end: {
            line: 54,
            column: 9,
          },
        },
        range: [759, 764],
        left: {
          type: 'Literal',
          start: 759,
          end: 760,
          loc: {
            start: {
              line: 54,
              column: 4,
            },
            end: {
              line: 54,
              column: 5,
            },
          },
          range: [759, 760],
          value: 1,
          raw: '1',
        },
        operator: '<',
        right: {
          type: 'Literal',
          start: 763,
          end: 764,
          loc: {
            start: {
              line: 54,
              column: 8,
            },
            end: {
              line: 54,
              column: 9,
            },
          },
          range: [763, 764],
          value: 3,
          raw: '3',
        },
      },
      consequent: {
        type: 'BlockStatement',
        start: 766,
        end: 772,
        loc: {
          start: {
            line: 54,
            column: 11,
          },
          end: {
            line: 56,
            column: 1,
          },
        },
        range: [766, 772],
        body: [],
      },
      alternate: {
        type: 'IfStatement',
        start: 778,
        end: 850,
        loc: {
          start: {
            line: 56,
            column: 7,
          },
          end: {
            line: 60,
            column: 1,
          },
        },
        range: [778, 850],
        test: {
          type: 'BinaryExpression',
          start: 782,
          end: 788,
          loc: {
            start: {
              line: 56,
              column: 11,
            },
            end: {
              line: 56,
              column: 17,
            },
          },
          range: [782, 788],
          left: {
            type: 'Literal',
            start: 782,
            end: 783,
            loc: {
              start: {
                line: 56,
                column: 11,
              },
              end: {
                line: 56,
                column: 12,
              },
            },
            range: [782, 783],
            value: 1,
            raw: '1',
          },
          operator: '==',
          right: {
            type: 'Literal',
            start: 787,
            end: 788,
            loc: {
              start: {
                line: 56,
                column: 16,
              },
              end: {
                line: 56,
                column: 17,
              },
            },
            range: [787, 788],
            value: 0,
            raw: '0',
          },
        },
        consequent: {
          type: 'BlockStatement',
          start: 790,
          end: 818,
          loc: {
            start: {
              line: 56,
              column: 19,
            },
            end: {
              line: 58,
              column: 1,
            },
          },
          range: [790, 818],
          body: [
            {
              type: 'ExpressionStatement',
              start: 794,
              end: 816,
              loc: {
                start: {
                  line: 57,
                  column: 1,
                },
                end: {
                  line: 57,
                  column: 23,
                },
              },
              range: [794, 816],
              expression: {
                type: 'CallExpression',
                start: 794,
                end: 816,
                loc: {
                  start: {
                    line: 57,
                    column: 1,
                  },
                  end: {
                    line: 57,
                    column: 23,
                  },
                },
                range: [794, 816],
                callee: {
                  type: 'MemberExpression',
                  start: 794,
                  end: 805,
                  loc: {
                    start: {
                      line: 57,
                      column: 1,
                    },
                    end: {
                      line: 57,
                      column: 12,
                    },
                  },
                  range: [794, 805],
                  object: {
                    type: 'Identifier',
                    start: 794,
                    end: 801,
                    loc: {
                      start: {
                        line: 57,
                        column: 1,
                      },
                      end: {
                        line: 57,
                        column: 8,
                      },
                    },
                    range: [794, 801],
                    name: 'console',
                  },
                  computed: false,
                  property: {
                    type: 'Identifier',
                    start: 802,
                    end: 805,
                    loc: {
                      start: {
                        line: 57,
                        column: 9,
                      },
                      end: {
                        line: 57,
                        column: 12,
                      },
                    },
                    range: [802, 805],
                    name: 'log',
                  },
                  optional: false,
                },
                arguments: [
                  {
                    type: 'Literal',
                    start: 806,
                    end: 815,
                    loc: {
                      start: {
                        line: 57,
                        column: 13,
                      },
                      end: {
                        line: 57,
                        column: 22,
                      },
                    },
                    range: [806, 815],
                    value: 'success',
                    raw: "'success'",
                  },
                ],
                optional: false,
              },
            },
          ],
        },
        alternate: {
          type: 'BlockStatement',
          start: 824,
          end: 850,
          loc: {
            start: {
              line: 58,
              column: 7,
            },
            end: {
              line: 60,
              column: 1,
            },
          },
          range: [824, 850],
          body: [
            {
              type: 'ExpressionStatement',
              start: 827,
              end: 847,
              loc: {
                start: {
                  line: 59,
                  column: 1,
                },
                end: {
                  line: 59,
                  column: 21,
                },
              },
              range: [827, 847],
              expression: {
                type: 'CallExpression',
                start: 827,
                end: 847,
                loc: {
                  start: {
                    line: 59,
                    column: 1,
                  },
                  end: {
                    line: 59,
                    column: 21,
                  },
                },
                range: [827, 847],
                callee: {
                  type: 'MemberExpression',
                  start: 827,
                  end: 838,
                  loc: {
                    start: {
                      line: 59,
                      column: 1,
                    },
                    end: {
                      line: 59,
                      column: 12,
                    },
                  },
                  range: [827, 838],
                  object: {
                    type: 'Identifier',
                    start: 827,
                    end: 834,
                    loc: {
                      start: {
                        line: 59,
                        column: 1,
                      },
                      end: {
                        line: 59,
                        column: 8,
                      },
                    },
                    range: [827, 834],
                    name: 'console',
                  },
                  computed: false,
                  property: {
                    type: 'Identifier',
                    start: 835,
                    end: 838,
                    loc: {
                      start: {
                        line: 59,
                        column: 9,
                      },
                      end: {
                        line: 59,
                        column: 12,
                      },
                    },
                    range: [835, 838],
                    name: 'log',
                  },
                  optional: false,
                },
                arguments: [
                  {
                    type: 'Literal',
                    start: 839,
                    end: 846,
                    loc: {
                      start: {
                        line: 59,
                        column: 13,
                      },
                      end: {
                        line: 59,
                        column: 20,
                      },
                    },
                    range: [839, 846],
                    value: 'error',
                    raw: "'error'",
                  },
                ],
                optional: false,
              },
            },
          ],
        },
      },
    },
    {
      type: 'VariableDeclaration',
      start: 852,
      end: 1015,
      loc: {
        start: {
          line: 62,
          column: 0,
        },
        end: {
          line: 72,
          column: 1,
        },
      },
      range: [852, 1015],
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 858,
          end: 1015,
          loc: {
            start: {
              line: 62,
              column: 6,
            },
            end: {
              line: 72,
              column: 1,
            },
          },
          range: [858, 1015],
          id: {
            type: 'Identifier',
            start: 858,
            end: 860,
            loc: {
              start: {
                line: 62,
                column: 6,
              },
              end: {
                line: 62,
                column: 8,
              },
            },
            range: [858, 860],
            name: 'yy',
          },
          init: {
            type: 'ObjectExpression',
            start: 863,
            end: 1015,
            loc: {
              start: {
                line: 62,
                column: 11,
              },
              end: {
                line: 72,
                column: 1,
              },
            },
            range: [863, 1015],
            properties: [
              {
                type: 'Property',
                start: 867,
                end: 871,
                loc: {
                  start: {
                    line: 63,
                    column: 2,
                  },
                  end: {
                    line: 63,
                    column: 6,
                  },
                },
                range: [867, 871],
                method: false,
                key: {
                  type: 'Identifier',
                  start: 867,
                  end: 868,
                  loc: {
                    start: {
                      line: 63,
                      column: 2,
                    },
                    end: {
                      line: 63,
                      column: 3,
                    },
                  },
                  range: [867, 868],
                  name: 'a',
                },
                computed: false,
                shorthand: false,
                value: {
                  type: 'Literal',
                  start: 870,
                  end: 871,
                  loc: {
                    start: {
                      line: 63,
                      column: 5,
                    },
                    end: {
                      line: 63,
                      column: 6,
                    },
                  },
                  range: [870, 871],
                  value: 1,
                  raw: '1',
                },
                kind: 'init',
              },
              {
                type: 'Property',
                start: 875,
                end: 885,
                loc: {
                  start: {
                    line: 64,
                    column: 2,
                  },
                  end: {
                    line: 64,
                    column: 12,
                  },
                },
                range: [875, 885],
                method: false,
                key: {
                  type: 'Identifier',
                  start: 879,
                  end: 880,
                  loc: {
                    start: {
                      line: 64,
                      column: 6,
                    },
                    end: {
                      line: 64,
                      column: 7,
                    },
                  },
                  range: [879, 880],
                  name: 'z',
                },
                computed: false,
                kind: 'get',
                value: {
                  type: 'FunctionExpression',
                  start: 880,
                  end: 885,
                  loc: {
                    start: {
                      line: 64,
                      column: 7,
                    },
                    end: {
                      line: 64,
                      column: 12,
                    },
                  },
                  range: [880, 885],
                  id: null,
                  generator: false,
                  async: false,
                  expression: false,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    start: 883,
                    end: 885,
                    loc: {
                      start: {
                        line: 64,
                        column: 10,
                      },
                      end: {
                        line: 64,
                        column: 12,
                      },
                    },
                    range: [883, 885],
                    body: [],
                  },
                },
                shorthand: false,
              },
              {
                type: 'Property',
                start: 889,
                end: 900,
                loc: {
                  start: {
                    line: 65,
                    column: 2,
                  },
                  end: {
                    line: 65,
                    column: 13,
                  },
                },
                range: [889, 900],
                method: false,
                key: {
                  type: 'Identifier',
                  start: 893,
                  end: 894,
                  loc: {
                    start: {
                      line: 65,
                      column: 6,
                    },
                    end: {
                      line: 65,
                      column: 7,
                    },
                  },
                  range: [893, 894],
                  name: 'j',
                },
                computed: false,
                kind: 'set',
                value: {
                  type: 'FunctionExpression',
                  start: 894,
                  end: 900,
                  loc: {
                    start: {
                      line: 65,
                      column: 7,
                    },
                    end: {
                      line: 65,
                      column: 13,
                    },
                  },
                  range: [894, 900],
                  id: null,
                  generator: false,
                  async: false,
                  expression: false,
                  params: [
                    {
                      type: 'Identifier',
                      start: 895,
                      end: 896,
                      loc: {
                        start: {
                          line: 65,
                          column: 8,
                        },
                        end: {
                          line: 65,
                          column: 9,
                        },
                      },
                      range: [895, 896],
                      name: 'j',
                    },
                  ],
                  body: {
                    type: 'BlockStatement',
                    start: 898,
                    end: 900,
                    loc: {
                      start: {
                        line: 65,
                        column: 11,
                      },
                      end: {
                        line: 65,
                        column: 13,
                      },
                    },
                    range: [898, 900],
                    body: [],
                  },
                },
                shorthand: false,
              },
              {
                type: 'Property',
                start: 904,
                end: 913,
                loc: {
                  start: {
                    line: 66,
                    column: 2,
                  },
                  end: {
                    line: 66,
                    column: 11,
                  },
                },
                range: [904, 913],
                method: true,
                key: {
                  type: 'Identifier',
                  start: 904,
                  end: 908,
                  loc: {
                    start: {
                      line: 66,
                      column: 2,
                    },
                    end: {
                      line: 66,
                      column: 6,
                    },
                  },
                  range: [904, 908],
                  name: 'init',
                },
                computed: false,
                kind: 'init',
                value: {
                  type: 'FunctionExpression',
                  start: 908,
                  end: 913,
                  loc: {
                    start: {
                      line: 66,
                      column: 6,
                    },
                    end: {
                      line: 66,
                      column: 11,
                    },
                  },
                  range: [908, 913],
                  id: null,
                  generator: false,
                  async: false,
                  expression: false,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    start: 911,
                    end: 913,
                    loc: {
                      start: {
                        line: 66,
                        column: 9,
                      },
                      end: {
                        line: 66,
                        column: 11,
                      },
                    },
                    range: [911, 913],
                    body: [],
                  },
                },
                shorthand: false,
              },
              {
                type: 'Property',
                start: 917,
                end: 932,
                loc: {
                  start: {
                    line: 67,
                    column: 2,
                  },
                  end: {
                    line: 67,
                    column: 17,
                  },
                },
                range: [917, 932],
                method: true,
                key: {
                  type: 'Identifier',
                  start: 923,
                  end: 927,
                  loc: {
                    start: {
                      line: 67,
                      column: 8,
                    },
                    end: {
                      line: 67,
                      column: 12,
                    },
                  },
                  range: [923, 927],
                  name: 'blob',
                },
                computed: false,
                kind: 'init',
                value: {
                  type: 'FunctionExpression',
                  start: 927,
                  end: 932,
                  loc: {
                    start: {
                      line: 67,
                      column: 12,
                    },
                    end: {
                      line: 67,
                      column: 17,
                    },
                  },
                  range: [927, 932],
                  id: null,
                  generator: false,
                  async: true,
                  expression: false,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    start: 930,
                    end: 932,
                    loc: {
                      start: {
                        line: 67,
                        column: 15,
                      },
                      end: {
                        line: 67,
                        column: 17,
                      },
                    },
                    range: [930, 932],
                    body: [],
                  },
                },
                shorthand: false,
              },
              {
                type: 'Property',
                start: 936,
                end: 943,
                loc: {
                  start: {
                    line: 68,
                    column: 2,
                  },
                  end: {
                    line: 68,
                    column: 9,
                  },
                },
                range: [936, 943],
                method: true,
                key: {
                  type: 'Identifier',
                  start: 936,
                  end: 937,
                  loc: {
                    start: {
                      line: 68,
                      column: 2,
                    },
                    end: {
                      line: 68,
                      column: 3,
                    },
                  },
                  range: [936, 937],
                  name: 'b',
                },
                computed: false,
                kind: 'init',
                value: {
                  type: 'FunctionExpression',
                  start: 937,
                  end: 943,
                  loc: {
                    start: {
                      line: 68,
                      column: 3,
                    },
                    end: {
                      line: 68,
                      column: 9,
                    },
                  },
                  range: [937, 943],
                  id: null,
                  generator: false,
                  async: false,
                  expression: false,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    start: 940,
                    end: 943,
                    loc: {
                      start: {
                        line: 68,
                        column: 6,
                      },
                      end: {
                        line: 68,
                        column: 9,
                      },
                    },
                    range: [940, 943],
                    body: [],
                  },
                },
                shorthand: false,
              },
              {
                type: 'Property',
                start: 947,
                end: 965,
                loc: {
                  start: {
                    line: 69,
                    column: 2,
                  },
                  end: {
                    line: 69,
                    column: 20,
                  },
                },
                range: [947, 965],
                method: false,
                key: {
                  type: 'Identifier',
                  start: 947,
                  end: 948,
                  loc: {
                    start: {
                      line: 69,
                      column: 2,
                    },
                    end: {
                      line: 69,
                      column: 3,
                    },
                  },
                  range: [947, 948],
                  name: 'c',
                },
                computed: false,
                shorthand: false,
                value: {
                  type: 'FunctionExpression',
                  start: 950,
                  end: 965,
                  loc: {
                    start: {
                      line: 69,
                      column: 5,
                    },
                    end: {
                      line: 69,
                      column: 20,
                    },
                  },
                  range: [950, 965],
                  id: {
                    type: 'Identifier',
                    start: 959,
                    end: 960,
                    loc: {
                      start: {
                        line: 69,
                        column: 14,
                      },
                      end: {
                        line: 69,
                        column: 15,
                      },
                    },
                    range: [959, 960],
                    name: 'd',
                  },
                  generator: false,
                  async: false,
                  expression: false,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    start: 963,
                    end: 965,
                    loc: {
                      start: {
                        line: 69,
                        column: 18,
                      },
                      end: {
                        line: 69,
                        column: 20,
                      },
                    },
                    range: [963, 965],
                    body: [],
                  },
                },
                kind: 'init',
              },
              {
                type: 'Property',
                start: 969,
                end: 986,
                loc: {
                  start: {
                    line: 70,
                    column: 2,
                  },
                  end: {
                    line: 70,
                    column: 19,
                  },
                },
                range: [969, 986],
                method: false,
                key: {
                  type: 'Identifier',
                  start: 969,
                  end: 971,
                  loc: {
                    start: {
                      line: 70,
                      column: 2,
                    },
                    end: {
                      line: 70,
                      column: 4,
                    },
                  },
                  range: [969, 971],
                  name: 'pp',
                },
                computed: false,
                shorthand: false,
                value: {
                  type: 'FunctionExpression',
                  start: 973,
                  end: 986,
                  loc: {
                    start: {
                      line: 70,
                      column: 6,
                    },
                    end: {
                      line: 70,
                      column: 19,
                    },
                  },
                  range: [973, 986],
                  id: null,
                  generator: false,
                  async: false,
                  expression: false,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    start: 984,
                    end: 986,
                    loc: {
                      start: {
                        line: 70,
                        column: 17,
                      },
                      end: {
                        line: 70,
                        column: 19,
                      },
                    },
                    range: [984, 986],
                    body: [],
                  },
                },
                kind: 'init',
              },
              {
                type: 'Property',
                start: 990,
                end: 1013,
                loc: {
                  start: {
                    line: 71,
                    column: 2,
                  },
                  end: {
                    line: 71,
                    column: 25,
                  },
                },
                range: [990, 1013],
                method: false,
                key: {
                  type: 'Identifier',
                  start: 990,
                  end: 992,
                  loc: {
                    start: {
                      line: 71,
                      column: 2,
                    },
                    end: {
                      line: 71,
                      column: 4,
                    },
                  },
                  range: [990, 992],
                  name: 'zz',
                },
                computed: false,
                shorthand: false,
                value: {
                  type: 'FunctionExpression',
                  start: 994,
                  end: 1013,
                  loc: {
                    start: {
                      line: 71,
                      column: 6,
                    },
                    end: {
                      line: 71,
                      column: 25,
                    },
                  },
                  range: [994, 1013],
                  id: null,
                  generator: false,
                  async: true,
                  expression: false,
                  params: [],
                  body: {
                    type: 'BlockStatement',
                    start: 1011,
                    end: 1013,
                    loc: {
                      start: {
                        line: 71,
                        column: 23,
                      },
                      end: {
                        line: 71,
                        column: 25,
                      },
                    },
                    range: [1011, 1013],
                    body: [],
                  },
                },
                kind: 'init',
              },
            ],
          },
        },
      ],
      kind: 'const',
    },
    {
      type: 'ForStatement',
      start: 1017,
      end: 1051,
      loc: {
        start: {
          line: 74,
          column: 0,
        },
        end: {
          line: 76,
          column: 1,
        },
      },
      range: [1017, 1051],
      init: {
        type: 'VariableDeclaration',
        start: 1022,
        end: 1029,
        loc: {
          start: {
            line: 74,
            column: 5,
          },
          end: {
            line: 74,
            column: 12,
          },
        },
        range: [1022, 1029],
        declarations: [
          {
            type: 'VariableDeclarator',
            start: 1026,
            end: 1029,
            loc: {
              start: {
                line: 74,
                column: 9,
              },
              end: {
                line: 74,
                column: 12,
              },
            },
            range: [1026, 1029],
            id: {
              type: 'Identifier',
              start: 1026,
              end: 1027,
              loc: {
                start: {
                  line: 74,
                  column: 9,
                },
                end: {
                  line: 74,
                  column: 10,
                },
              },
              range: [1026, 1027],
              name: 'i',
            },
            init: {
              type: 'Literal',
              start: 1028,
              end: 1029,
              loc: {
                start: {
                  line: 74,
                  column: 11,
                },
                end: {
                  line: 74,
                  column: 12,
                },
              },
              range: [1028, 1029],
              value: 0,
              raw: '0',
            },
          },
        ],
        kind: 'let',
      },
      test: null,
      update: {
        type: 'UpdateExpression',
        start: 1031,
        end: 1034,
        loc: {
          start: {
            line: 74,
            column: 14,
          },
          end: {
            line: 74,
            column: 17,
          },
        },
        range: [1031, 1034],
        operator: '++',
        prefix: false,
        argument: {
          type: 'Identifier',
          start: 1031,
          end: 1032,
          loc: {
            start: {
              line: 74,
              column: 14,
            },
            end: {
              line: 74,
              column: 15,
            },
          },
          range: [1031, 1032],
          name: 'i',
        },
      },
      body: {
        type: 'BlockStatement',
        start: 1036,
        end: 1051,
        loc: {
          start: {
            line: 74,
            column: 19,
          },
          end: {
            line: 76,
            column: 1,
          },
        },
        range: [1036, 1051],
        body: [
          {
            type: 'ContinueStatement',
            start: 1039,
            end: 1048,
            loc: {
              start: {
                line: 75,
                column: 1,
              },
              end: {
                line: 75,
                column: 10,
              },
            },
            range: [1039, 1048],
            label: null,
          },
        ],
      },
    },
    {
      type: 'TryStatement',
      start: 1053,
      end: 1137,
      loc: {
        start: {
          line: 78,
          column: 0,
        },
        end: {
          line: 82,
          column: 1,
        },
      },
      range: [1053, 1137],
      block: {
        type: 'BlockStatement',
        start: 1057,
        end: 1091,
        loc: {
          start: {
            line: 78,
            column: 4,
          },
          end: {
            line: 80,
            column: 1,
          },
        },
        range: [1057, 1091],
        body: [
          {
            type: 'ThrowStatement',
            start: 1060,
            end: 1088,
            loc: {
              start: {
                line: 79,
                column: 1,
              },
              end: {
                line: 79,
                column: 29,
              },
            },
            range: [1060, 1088],
            argument: {
              type: 'NewExpression',
              start: 1066,
              end: 1088,
              loc: {
                start: {
                  line: 79,
                  column: 7,
                },
                end: {
                  line: 79,
                  column: 29,
                },
              },
              range: [1066, 1088],
              callee: {
                type: 'Identifier',
                start: 1070,
                end: 1075,
                loc: {
                  start: {
                    line: 79,
                    column: 11,
                  },
                  end: {
                    line: 79,
                    column: 16,
                  },
                },
                range: [1070, 1075],
                name: 'Error',
              },
              arguments: [
                {
                  type: 'Literal',
                  start: 1076,
                  end: 1087,
                  loc: {
                    start: {
                      line: 79,
                      column: 17,
                    },
                    end: {
                      line: 79,
                      column: 28,
                    },
                  },
                  range: [1076, 1087],
                  value: 'bad thing',
                  raw: "'bad thing'",
                },
              ],
            },
          },
        ],
      },
      handler: {
        type: 'CatchClause',
        start: 1092,
        end: 1100,
        loc: {
          start: {
            line: 80,
            column: 2,
          },
          end: {
            line: 80,
            column: 10,
          },
        },
        range: [1092, 1100],
        param: null,
        body: {
          type: 'BlockStatement',
          start: 1098,
          end: 1100,
          loc: {
            start: {
              line: 80,
              column: 8,
            },
            end: {
              line: 80,
              column: 10,
            },
          },
          range: [1098, 1100],
          body: [],
        },
      },
      finalizer: {
        type: 'BlockStatement',
        start: 1109,
        end: 1137,
        loc: {
          start: {
            line: 80,
            column: 19,
          },
          end: {
            line: 82,
            column: 1,
          },
        },
        range: [1109, 1137],
        body: [
          {
            type: 'ExpressionStatement',
            start: 1112,
            end: 1134,
            loc: {
              start: {
                line: 81,
                column: 1,
              },
              end: {
                line: 81,
                column: 23,
              },
            },
            range: [1112, 1134],
            expression: {
              type: 'CallExpression',
              start: 1112,
              end: 1134,
              loc: {
                start: {
                  line: 81,
                  column: 1,
                },
                end: {
                  line: 81,
                  column: 23,
                },
              },
              range: [1112, 1134],
              callee: {
                type: 'MemberExpression',
                start: 1112,
                end: 1123,
                loc: {
                  start: {
                    line: 81,
                    column: 1,
                  },
                  end: {
                    line: 81,
                    column: 12,
                  },
                },
                range: [1112, 1123],
                object: {
                  type: 'Identifier',
                  start: 1112,
                  end: 1119,
                  loc: {
                    start: {
                      line: 81,
                      column: 1,
                    },
                    end: {
                      line: 81,
                      column: 8,
                    },
                  },
                  range: [1112, 1119],
                  name: 'console',
                },
                computed: false,
                property: {
                  type: 'Identifier',
                  start: 1120,
                  end: 1123,
                  loc: {
                    start: {
                      line: 81,
                      column: 9,
                    },
                    end: {
                      line: 81,
                      column: 12,
                    },
                  },
                  range: [1120, 1123],
                  name: 'log',
                },
                optional: false,
              },
              arguments: [
                {
                  type: 'Literal',
                  start: 1124,
                  end: 1133,
                  loc: {
                    start: {
                      line: 81,
                      column: 13,
                    },
                    end: {
                      line: 81,
                      column: 22,
                    },
                  },
                  range: [1124, 1133],
                  value: 'cleanup',
                  raw: "'cleanup'",
                },
              ],
              optional: false,
            },
          },
        ],
      },
    },
    {
      type: 'WhileStatement',
      start: 1139,
      end: 1165,
      loc: {
        start: {
          line: 84,
          column: 0,
        },
        end: {
          line: 86,
          column: 1,
        },
      },
      range: [1139, 1165],
      test: {
        type: 'BinaryExpression',
        start: 1146,
        end: 1151,
        loc: {
          start: {
            line: 84,
            column: 7,
          },
          end: {
            line: 84,
            column: 12,
          },
        },
        range: [1146, 1151],
        left: {
          type: 'Identifier',
          start: 1146,
          end: 1147,
          loc: {
            start: {
              line: 84,
              column: 7,
            },
            end: {
              line: 84,
              column: 8,
            },
          },
          range: [1146, 1147],
          name: 'i',
        },
        operator: '<',
        right: {
          type: 'Literal',
          start: 1150,
          end: 1151,
          loc: {
            start: {
              line: 84,
              column: 11,
            },
            end: {
              line: 84,
              column: 12,
            },
          },
          range: [1150, 1151],
          value: 0,
          raw: '0',
        },
      },
      body: {
        type: 'BlockStatement',
        start: 1153,
        end: 1165,
        loc: {
          start: {
            line: 84,
            column: 14,
          },
          end: {
            line: 86,
            column: 1,
          },
        },
        range: [1153, 1165],
        body: [
          {
            type: 'BreakStatement',
            start: 1157,
            end: 1163,
            loc: {
              start: {
                line: 85,
                column: 2,
              },
              end: {
                line: 85,
                column: 8,
              },
            },
            range: [1157, 1163],
            label: null,
          },
        ],
      },
    },
    {
      type: 'VariableDeclaration',
      start: 1167,
      end: 1229,
      loc: {
        start: {
          line: 88,
          column: 0,
        },
        end: {
          line: 88,
          column: 62,
        },
      },
      range: [1167, 1229],
      declarations: [
        {
          type: 'VariableDeclarator',
          start: 1173,
          end: 1229,
          loc: {
            start: {
              line: 88,
              column: 6,
            },
            end: {
              line: 88,
              column: 62,
            },
          },
          range: [1173, 1229],
          id: {
            type: 'Identifier',
            start: 1173,
            end: 1174,
            loc: {
              start: {
                line: 88,
                column: 6,
              },
              end: {
                line: 88,
                column: 7,
              },
            },
            range: [1173, 1174],
            name: 'y',
          },
          init: {
            type: 'JSXElement',
            start: 1177,
            end: 1229,
            loc: {
              start: {
                line: 88,
                column: 10,
              },
              end: {
                line: 88,
                column: 62,
              },
            },
            range: [1177, 1229],
            openingElement: {
              type: 'JSXOpeningElement',
              start: 1177,
              end: 1216,
              loc: {
                start: {
                  line: 88,
                  column: 10,
                },
                end: {
                  line: 88,
                  column: 49,
                },
              },
              range: [1177, 1216],
              name: {
                type: 'JSXIdentifier',
                start: 1178,
                end: 1183,
                loc: {
                  start: {
                    line: 88,
                    column: 11,
                  },
                  end: {
                    line: 88,
                    column: 16,
                  },
                },
                range: [1178, 1183],
                name: 'Modal',
              },
              attributes: [
                {
                  type: 'JSXAttribute',
                  start: 1184,
                  end: 1197,
                  loc: {
                    start: {
                      line: 88,
                      column: 17,
                    },
                    end: {
                      line: 88,
                      column: 30,
                    },
                  },
                  range: [1184, 1197],
                  name: {
                    type: 'JSXIdentifier',
                    start: 1184,
                    end: 1190,
                    loc: {
                      start: {
                        line: 88,
                        column: 17,
                      },
                      end: {
                        line: 88,
                        column: 23,
                      },
                    },
                    range: [1184, 1190],
                    name: 'isOpen',
                  },
                  value: {
                    type: 'JSXExpressionContainer',
                    start: 1191,
                    end: 1197,
                    loc: {
                      start: {
                        line: 88,
                        column: 24,
                      },
                      end: {
                        line: 88,
                        column: 30,
                      },
                    },
                    range: [1191, 1197],
                    expression: {
                      type: 'Literal',
                      start: 1192,
                      end: 1196,
                      loc: {
                        start: {
                          line: 88,
                          column: 25,
                        },
                        end: {
                          line: 88,
                          column: 29,
                        },
                      },
                      range: [1192, 1196],
                      value: true,
                      raw: 'true',
                    },
                  },
                },
                {
                  type: 'JSXAttribute',
                  start: 1198,
                  end: 1215,
                  loc: {
                    start: {
                      line: 88,
                      column: 31,
                    },
                    end: {
                      line: 88,
                      column: 48,
                    },
                  },
                  range: [1198, 1215],
                  name: {
                    type: 'JSXIdentifier',
                    start: 1198,
                    end: 1205,
                    loc: {
                      start: {
                        line: 88,
                        column: 31,
                      },
                      end: {
                        line: 88,
                        column: 38,
                      },
                    },
                    range: [1198, 1205],
                    name: 'onClick',
                  },
                  value: {
                    type: 'JSXExpressionContainer',
                    start: 1206,
                    end: 1215,
                    loc: {
                      start: {
                        line: 88,
                        column: 39,
                      },
                      end: {
                        line: 88,
                        column: 48,
                      },
                    },
                    range: [1206, 1215],
                    expression: {
                      type: 'Identifier',
                      start: 1207,
                      end: 1214,
                      loc: {
                        start: {
                          line: 88,
                          column: 40,
                        },
                        end: {
                          line: 88,
                          column: 47,
                        },
                      },
                      range: [1207, 1214],
                      name: 'onClick',
                    },
                  },
                },
              ],
              selfClosing: false,
            },
            closingElement: {
              type: 'JSXClosingElement',
              start: 1221,
              end: 1229,
              loc: {
                start: {
                  line: 88,
                  column: 54,
                },
                end: {
                  line: 88,
                  column: 62,
                },
              },
              range: [1221, 1229],
              name: {
                type: 'JSXIdentifier',
                start: 1223,
                end: 1228,
                loc: {
                  start: {
                    line: 88,
                    column: 56,
                  },
                  end: {
                    line: 88,
                    column: 61,
                  },
                },
                range: [1223, 1228],
                name: 'Modal',
              },
            },
            children: [
              {
                type: 'JSXText',
                start: 1216,
                end: 1221,
                loc: {
                  start: {
                    line: 88,
                    column: 49,
                  },
                  end: {
                    line: 88,
                    column: 54,
                  },
                },
                range: [1216, 1221],
                value: 'hello',
                raw: 'hello',
              },
            ],
          },
        },
      ],
      kind: 'const',
    },
    {
      type: 'ExpressionStatement',
      start: 1231,
      end: 1295,
      loc: {
        start: {
          line: 90,
          column: 0,
        },
        end: {
          line: 93,
          column: 2,
        },
      },
      range: [1231, 1295],
      expression: {
        type: 'CallExpression',
        start: 1231,
        end: 1294,
        loc: {
          start: {
            line: 90,
            column: 0,
          },
          end: {
            line: 93,
            column: 1,
          },
        },
        range: [1231, 1294],
        callee: {
          type: 'MemberExpression',
          start: 1231,
          end: 1246,
          loc: {
            start: {
              line: 90,
              column: 0,
            },
            end: {
              line: 90,
              column: 15,
            },
          },
          range: [1231, 1246],
          object: {
            type: 'Identifier',
            start: 1231,
            end: 1239,
            loc: {
              start: {
                line: 90,
                column: 0,
              },
              end: {
                line: 90,
                column: 8,
              },
            },
            range: [1231, 1239],
            name: 'ReactDOM',
          },
          computed: false,
          property: {
            type: 'Identifier',
            start: 1240,
            end: 1246,
            loc: {
              start: {
                line: 90,
                column: 9,
              },
              end: {
                line: 90,
                column: 15,
              },
            },
            range: [1240, 1246],
            name: 'render',
          },
          optional: false,
        },
        arguments: [
          {
            type: 'JSXElement',
            start: 1250,
            end: 1257,
            loc: {
              start: {
                line: 91,
                column: 2,
              },
              end: {
                line: 91,
                column: 9,
              },
            },
            range: [1250, 1257],
            openingElement: {
              type: 'JSXOpeningElement',
              start: 1250,
              end: 1257,
              loc: {
                start: {
                  line: 91,
                  column: 2,
                },
                end: {
                  line: 91,
                  column: 9,
                },
              },
              range: [1250, 1257],
              name: {
                type: 'JSXIdentifier',
                start: 1251,
                end: 1254,
                loc: {
                  start: {
                    line: 91,
                    column: 3,
                  },
                  end: {
                    line: 91,
                    column: 6,
                  },
                },
                range: [1251, 1254],
                name: 'App',
              },
              attributes: [],
              selfClosing: true,
            },
            closingElement: null,
            children: [],
          },
          {
            type: 'CallExpression',
            start: 1261,
            end: 1292,
            loc: {
              start: {
                line: 92,
                column: 2,
              },
              end: {
                line: 92,
                column: 33,
              },
            },
            range: [1261, 1292],
            callee: {
              type: 'MemberExpression',
              start: 1261,
              end: 1284,
              loc: {
                start: {
                  line: 92,
                  column: 2,
                },
                end: {
                  line: 92,
                  column: 25,
                },
              },
              range: [1261, 1284],
              object: {
                type: 'Identifier',
                start: 1261,
                end: 1269,
                loc: {
                  start: {
                    line: 92,
                    column: 2,
                  },
                  end: {
                    line: 92,
                    column: 10,
                  },
                },
                range: [1261, 1269],
                name: 'document',
              },
              computed: false,
              property: {
                type: 'Identifier',
                start: 1270,
                end: 1284,
                loc: {
                  start: {
                    line: 92,
                    column: 11,
                  },
                  end: {
                    line: 92,
                    column: 25,
                  },
                },
                range: [1270, 1284],
                name: 'getElementById',
              },
              optional: false,
            },
            arguments: [
              {
                type: 'Literal',
                start: 1285,
                end: 1291,
                loc: {
                  start: {
                    line: 92,
                    column: 26,
                  },
                  end: {
                    line: 92,
                    column: 32,
                  },
                },
                range: [1285, 1291],
                value: 'root',
                raw: "'root'",
              },
            ],
            optional: false,
          },
        ],
        optional: false,
      },
    },
    {
      type: 'ExportNamedDeclaration',
      start: 1297,
      end: 1329,
      loc: {
        start: {
          line: 95,
          column: 0,
        },
        end: {
          line: 95,
          column: 32,
        },
      },
      range: [1297, 1329],
      specifiers: [
        {
          type: 'ExportSpecifier',
          start: 1306,
          end: 1312,
          loc: {
            start: {
              line: 95,
              column: 9,
            },
            end: {
              line: 95,
              column: 15,
            },
          },
          range: [1306, 1312],
          local: {
            type: 'Identifier',
            start: 1306,
            end: 1307,
            loc: {
              start: {
                line: 95,
                column: 9,
              },
              end: {
                line: 95,
                column: 10,
              },
            },
            range: [1306, 1307],
            name: 'y',
          },
          exported: {
            type: 'Identifier',
            start: 1311,
            end: 1312,
            loc: {
              start: {
                line: 95,
                column: 14,
              },
              end: {
                line: 95,
                column: 15,
              },
            },
            range: [1311, 1312],
            name: 'b',
          },
        },
      ],
      source: {
        type: 'Literal',
        start: 1320,
        end: 1329,
        loc: {
          start: {
            line: 95,
            column: 23,
          },
          end: {
            line: 95,
            column: 32,
          },
        },
        range: [1320, 1329],
        value: './other',
        raw: "'./other'",
      },
      declaration: null,
    },
    {
      type: 'ExportDefaultDeclaration',
      start: 1330,
      end: 1346,
      loc: {
        start: {
          line: 96,
          column: 0,
        },
        end: {
          line: 96,
          column: 16,
        },
      },
      range: [1330, 1346],
      declaration: {
        type: 'Identifier',
        start: 1345,
        end: 1346,
        loc: {
          start: {
            line: 96,
            column: 15,
          },
          end: {
            line: 96,
            column: 16,
          },
        },
        range: [1345, 1346],
        name: 'b',
      },
    },
    {
      type: 'ExportNamedDeclaration',
      start: 1347,
      end: 1368,
      loc: {
        start: {
          line: 97,
          column: 0,
        },
        end: {
          line: 97,
          column: 21,
        },
      },
      range: [1347, 1368],
      specifiers: [],
      source: null,
      declaration: {
        type: 'VariableDeclaration',
        start: 1354,
        end: 1368,
        loc: {
          start: {
            line: 97,
            column: 7,
          },
          end: {
            line: 97,
            column: 21,
          },
        },
        range: [1354, 1368],
        declarations: [
          {
            type: 'VariableDeclarator',
            start: 1360,
            end: 1368,
            loc: {
              start: {
                line: 97,
                column: 13,
              },
              end: {
                line: 97,
                column: 21,
              },
            },
            range: [1360, 1368],
            id: {
              type: 'Identifier',
              start: 1360,
              end: 1363,
              loc: {
                start: {
                  line: 97,
                  column: 13,
                },
                end: {
                  line: 97,
                  column: 16,
                },
              },
              range: [1360, 1363],
              name: 'yyy',
            },
            init: {
              type: 'Literal',
              start: 1366,
              end: 1368,
              loc: {
                start: {
                  line: 97,
                  column: 19,
                },
                end: {
                  line: 97,
                  column: 21,
                },
              },
              range: [1366, 1368],
              value: 10,
              raw: '10',
            },
          },
        ],
        kind: 'const',
      },
    },
    {
      type: 'ExportAllDeclaration',
      start: 1369,
      end: 1386,
      loc: {
        start: {
          line: 98,
          column: 0,
        },
        end: {
          line: 98,
          column: 17,
        },
      },
      range: [1369, 1386],
      source: {
        type: 'Literal',
        start: 1383,
        end: 1386,
        loc: {
          start: {
            line: 98,
            column: 14,
          },
          end: {
            line: 98,
            column: 17,
          },
        },
        range: [1383, 1386],
        value: 's',
        raw: "'s'",
      },
      exported: null,
    },
  ],
}
