/*
 * @Author: your name
 * @Date: 2021-04-09 09:45:33
 * @LastEditTime: 2021-08-18 11:43:55
 * @LastEditors: GZH
 * @Description: 手机移动端 rem 自适应
 * @FilePath: \rewrite\rem.js
 */

// window.onresize = getRem;
// function getRem() {
//   document.documentElement.style.fontSize = document.documentElement.offsetWidth / 20 + 'px';
// }
// getRem();

//https://segmentfault.com/a/1190000021045487
(function (doc, win) {
  var dpr = window.devicePixelRatio;
  // dpr = dpr > 2 ? 2: dpr;
  dpr = 1;
  var docEl = doc.documentElement;
  var metaEl = document.querySelector('meta[name="viewport"]');
  if (!metaEl) {
    metaEl = document.createElement('meta');
    metaEl.name = 'viewport';
    doc.documentElement.firstElementChild.appendChild(metaEl);
  }
  // var clientWidth = window.innerWidth;
  var scale = 1 / dpr;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    var clientWidth = window.innerWidth * scale;
    docEl.style.fontSize = 100 * ((clientWidth * dpr) / 900) + 'px';
    // docEl.style.fontSize = clientWidth / 1000 + 'px';
    // metaEl.setAttribute('content', 'width=' + clientWidth * dpr + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
