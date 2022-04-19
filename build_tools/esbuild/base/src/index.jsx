/*
 * @Date: 2022-04-19 11:45:15
 * @LastEditTime: 2022-04-19 11:45:15
 * @FilePath: \rewrite\build_tools\esbuild\base\src\index.jsx
 * @Description:
 */
// src/index.jsx
import Server from 'react-dom/server';

let Greet = () => <h1>Hello, juejin!</h1>;
console.log(Server.renderToString(<Greet />));
