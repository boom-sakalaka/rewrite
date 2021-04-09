/*
 * @Author: your name
 * @Date: 2021-04-09 09:45:33
 * @LastEditTime: 2021-04-09 09:46:26
 * @LastEditors: Please set LastEditors
 * @Description: 手机移动端 rem 自适应
 * @FilePath: \rewrite\rem.js
 */

window.onresize = getRem;
function getRem() {
  document.documentElement.style.fontSize = document.documentElement.offsetWidth / 20 + 'px';
}
getRem();
