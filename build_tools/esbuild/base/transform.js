/*
 * @Date: 2022-04-19 13:36:26
 * @LastEditTime: 2022-04-19 13:41:53
 * @FilePath: \rewrite\build_tools\esbuild\base\transform.js
 * @Description:
 */
const { transform } = require('esbuild');

async function runTransform() {
  // 第一个参数是代码字符串，第二个参数为编译配置
  const content = await transform('const isNull = (str: string): boolean => str.length > 0;', {
    sourcemap: true,
    loader: 'tsx',
  });
  console.log(content);
}

runTransform();
