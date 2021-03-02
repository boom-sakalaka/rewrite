function addEvent(type, el, fn) {
  console.log(1);
  if (window.addEventListener) {
    addEvent = function (type, el, fn) {
      el.addEventListener(type, fn, false);
    };
  } else if (window.attachEvent) {
    addEvent = function (type, el, fn) {
      el.attachEvent("on" + type, fn);
    };
  }
  addEvent(type, el, fn);
}

addEvent();
