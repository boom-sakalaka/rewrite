// 利用@babel/parser 解析出的抽象语法树文件

const ast = {
  type: 'File',
  start: 0,
  end: 291,
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 14,
      column: 0,
    },
  },
  errors: [],
  program: {
    type: 'Program',
    start: 0,
    end: 291,
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 14,
        column: 0,
      },
    },
    sourceType: 'module',
    interpreter: null,
    body: [
      {
        type: 'ImportDeclaration',
        start: 175,
        end: 202,
        loc: {
          start: {
            line: 8,
            column: 0,
          },
          end: {
            line: 8,
            column: 27,
          },
        },
        leadingComments: [
          {
            type: 'CommentBlock',
            value:
              '\r\n * @Author: GZH\r\n * @Date: 2021-06-30 11:01:43\r\n * @LastEditors: GZH\r\n * @LastEditTime: 2021-06-30 11:02:50\r\n * @FilePath: \\rewrite\\build_tools\\webpack\\src\\index.js\r\n ',
            start: 0,
            end: 173,
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 7,
                column: 3,
              },
            },
          },
        ],
        specifiers: [
          {
            type: 'ImportDefaultSpecifier',
            start: 182,
            end: 185,
            loc: {
              start: {
                line: 8,
                column: 7,
              },
              end: {
                line: 8,
                column: 10,
              },
            },
            local: {
              type: 'Identifier',
              start: 182,
              end: 185,
              loc: {
                start: {
                  line: 8,
                  column: 7,
                },
                end: {
                  line: 8,
                  column: 10,
                },
                identifierName: 'add',
              },
              name: 'add',
            },
          },
        ],
        source: {
          type: 'StringLiteral',
          start: 191,
          end: 201,
          loc: {
            start: {
              line: 8,
              column: 16,
            },
            end: {
              line: 8,
              column: 26,
            },
          },
          extra: {
            rawValue: './add.js',
            raw: "'./add.js'",
          },
          value: './add.js',
        },
      },
      {
        type: 'ImportDeclaration',
        start: 204,
        end: 232,
        loc: {
          start: {
            line: 9,
            column: 0,
          },
          end: {
            line: 9,
            column: 28,
          },
        },
        specifiers: [
          {
            type: 'ImportDefaultSpecifier',
            start: 211,
            end: 216,
            loc: {
              start: {
                line: 9,
                column: 7,
              },
              end: {
                line: 9,
                column: 12,
              },
            },
            local: {
              type: 'Identifier',
              start: 211,
              end: 216,
              loc: {
                start: {
                  line: 9,
                  column: 7,
                },
                end: {
                  line: 9,
                  column: 12,
                },
                identifierName: 'minus',
              },
              name: 'minus',
            },
          },
        ],
        source: {
          type: 'StringLiteral',
          start: 222,
          end: 231,
          loc: {
            start: {
              line: 9,
              column: 18,
            },
            end: {
              line: 9,
              column: 27,
            },
          },
          extra: {
            rawValue: './minus',
            raw: "'./minus'",
          },
          value: './minus',
        },
      },
      {
        type: 'ExpressionStatement',
        start: 236,
        end: 262,
        loc: {
          start: {
            line: 11,
            column: 0,
          },
          end: {
            line: 11,
            column: 26,
          },
        },
        expression: {
          type: 'CallExpression',
          start: 236,
          end: 261,
          loc: {
            start: {
              line: 11,
              column: 0,
            },
            end: {
              line: 11,
              column: 25,
            },
          },
          callee: {
            type: 'MemberExpression',
            start: 236,
            end: 247,
            loc: {
              start: {
                line: 11,
                column: 0,
              },
              end: {
                line: 11,
                column: 11,
              },
            },
            object: {
              type: 'Identifier',
              start: 236,
              end: 243,
              loc: {
                start: {
                  line: 11,
                  column: 0,
                },
                end: {
                  line: 11,
                  column: 7,
                },
                identifierName: 'console',
              },
              name: 'console',
            },
            computed: false,
            property: {
              type: 'Identifier',
              start: 244,
              end: 247,
              loc: {
                start: {
                  line: 11,
                  column: 8,
                },
                end: {
                  line: 11,
                  column: 11,
                },
                identifierName: 'log',
              },
              name: 'log',
            },
          },
          arguments: [
            {
              type: 'CallExpression',
              start: 248,
              end: 260,
              loc: {
                start: {
                  line: 11,
                  column: 12,
                },
                end: {
                  line: 11,
                  column: 24,
                },
              },
              callee: {
                type: 'Identifier',
                start: 248,
                end: 253,
                loc: {
                  start: {
                    line: 11,
                    column: 12,
                  },
                  end: {
                    line: 11,
                    column: 17,
                  },
                  identifierName: 'minus',
                },
                name: 'minus',
              },
              arguments: [
                {
                  type: 'NumericLiteral',
                  start: 254,
                  end: 256,
                  loc: {
                    start: {
                      line: 11,
                      column: 18,
                    },
                    end: {
                      line: 11,
                      column: 20,
                    },
                  },
                  extra: {
                    rawValue: 10,
                    raw: '10',
                  },
                  value: 10,
                },
                {
                  type: 'NumericLiteral',
                  start: 258,
                  end: 259,
                  loc: {
                    start: {
                      line: 11,
                      column: 22,
                    },
                    end: {
                      line: 11,
                      column: 23,
                    },
                  },
                  extra: {
                    rawValue: 9,
                    raw: '9',
                  },
                  value: 9,
                },
              ],
            },
          ],
        },
      },
      {
        type: 'ExpressionStatement',
        start: 266,
        end: 289,
        loc: {
          start: {
            line: 13,
            column: 0,
          },
          end: {
            line: 13,
            column: 23,
          },
        },
        expression: {
          type: 'CallExpression',
          start: 266,
          end: 288,
          loc: {
            start: {
              line: 13,
              column: 0,
            },
            end: {
              line: 13,
              column: 22,
            },
          },
          callee: {
            type: 'MemberExpression',
            start: 266,
            end: 277,
            loc: {
              start: {
                line: 13,
                column: 0,
              },
              end: {
                line: 13,
                column: 11,
              },
            },
            object: {
              type: 'Identifier',
              start: 266,
              end: 273,
              loc: {
                start: {
                  line: 13,
                  column: 0,
                },
                end: {
                  line: 13,
                  column: 7,
                },
                identifierName: 'console',
              },
              name: 'console',
            },
            computed: false,
            property: {
              type: 'Identifier',
              start: 274,
              end: 277,
              loc: {
                start: {
                  line: 13,
                  column: 8,
                },
                end: {
                  line: 13,
                  column: 11,
                },
                identifierName: 'log',
              },
              name: 'log',
            },
          },
          arguments: [
            {
              type: 'CallExpression',
              start: 278,
              end: 287,
              loc: {
                start: {
                  line: 13,
                  column: 12,
                },
                end: {
                  line: 13,
                  column: 21,
                },
              },
              callee: {
                type: 'Identifier',
                start: 278,
                end: 281,
                loc: {
                  start: {
                    line: 13,
                    column: 12,
                  },
                  end: {
                    line: 13,
                    column: 15,
                  },
                  identifierName: 'add',
                },
                name: 'add',
              },
              arguments: [
                {
                  type: 'NumericLiteral',
                  start: 282,
                  end: 283,
                  loc: {
                    start: {
                      line: 13,
                      column: 16,
                    },
                    end: {
                      line: 13,
                      column: 17,
                    },
                  },
                  extra: {
                    rawValue: 1,
                    raw: '1',
                  },
                  value: 1,
                },
                {
                  type: 'NumericLiteral',
                  start: 285,
                  end: 286,
                  loc: {
                    start: {
                      line: 13,
                      column: 19,
                    },
                    end: {
                      line: 13,
                      column: 20,
                    },
                  },
                  extra: {
                    rawValue: 3,
                    raw: '3',
                  },
                  value: 3,
                },
              ],
            },
          ],
        },
      },
    ],
    directives: [],
  },
  comments: [
    {
      type: 'CommentBlock',
      value:
        '\r\n * @Author: GZH\r\n * @Date: 2021-06-30 11:01:43\r\n * @LastEditors: GZH\r\n * @LastEditTime: 2021-06-30 11:02:50\r\n * @FilePath: \\rewrite\\build_tools\\webpack\\src\\index.js\r\n ',
      start: 0,
      end: 173,
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 7,
          column: 3,
        },
      },
    },
  ],
};
