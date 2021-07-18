/*
 * @Author: GZH
 * @Date: 2021-07-03 13:56:14
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-03 14:22:52
 * @FilePath: \rewrite\DesignPattern\DecoratorPattern.js
 * @Description: 装饰器
 */
// 定义打开按钮
class OpenButton {
  // 点击后展示弹框（旧逻辑）
  onClick() {
    const modal = new Modal();
    modal.style.display = 'block';
  }
}

// 定义按钮对应的装饰器
class Decorator {
  // 将按钮实例传入
  constructor(open_button) {
    this.open_button = open_button;
  }

  onClick() {
    this.open_button.onClick();
    // “包装”了一层新逻辑
    this.changeButtonStatus();
  }

  changeButtonStatus() {
    this.changeButtonText();
    this.disableButton();
  }

  disableButton() {
    const btn = document.getElementById('open');
    btn.setAttribute('disabled', true);
  }

  changeButtonText() {
    const btn = document.getElementById('open');
    btn.innerText = '快去登录';
  }
}

const openButton = new OpenButton();
const decorator = new Decorator(openButton);

document.getElementById('open').addEventListener('click', function () {
  // openButton.onClick()
  // 此处可以分别尝试两个实例的onClick方法，验证装饰器是否生效
  decorator.onClick();
});
