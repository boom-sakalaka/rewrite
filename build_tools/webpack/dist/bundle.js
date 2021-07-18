(function (graph) {
        function require(file) {
            function absRequire(relPath) {
                return require(graph[file].deps[relPath])
            }
            var exports = {};
            (function (require,exports,code) {
                eval(code)
            })(absRequire,exports,graph[file].code)
            return exports
        }
        require('./src/index.js')
    })({"./src/index.js":{"deps":{"./add.js":"./src\\add.js","./minus.js":"./src\\minus.js"},"code":"\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\n\nvar _minus = require(\"./minus.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/*\r\n * @Author: GZH\r\n * @Date: 2021-06-30 11:01:43\r\n * @LastEditors: GZH\r\n * @LastEditTime: 2021-06-30 11:26:40\r\n * @FilePath: \\rewrite\\build_tools\\webpack\\src\\index.js\r\n */\nconsole.log((0, _minus.minus)(10, 9));\nconsole.log((0, _add[\"default\"])(1, 3));"},"./src\\add.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n/*\r\n * @Author: GZH\r\n * @Date: 2021-06-30 10:47:23\r\n * @LastEditors: GZH\r\n * @LastEditTime: 2021-06-30 11:01:09\r\n * @FilePath: \\rewrite\\build_tools\\webpack\\src\\add.js\r\n */\nvar _default = function _default(a, b) {\n  return a + b;\n};\n\nexports[\"default\"] = _default;"},"./src\\minus.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.minus = void 0;\n\n/*\r\n * @Author: GZH\r\n * @Date: 2021-06-30 11:01:23\r\n * @LastEditors: GZH\r\n * @LastEditTime: 2021-06-30 11:01:37\r\n * @FilePath: \\rewrite\\build_tools\\webpack\\src\\minus.js\r\n */\nvar minus = function minus(a, b) {\n  return a - b;\n};\n\nexports.minus = minus;"}})