/*
 * @Author: GZH
 * @Date: 2021-12-18 14:32:26
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-18 15:54:55
 * @FilePath: \mini-vue\src\runtime\render.js
 * @Description: render 函数 接受一个虚拟dom和真实节点，把虚拟dom挂载到真实节点上
 *
 */

import { ShapeFlags } from './vnode';

export function render(vnode, container) {
  mount(vnode, container);
}

function mount(vnode, container) {
  const { shapeFlag } = vnode;
  if (shapeFlag & ShapeFlags.ELEMENT) {
    mountElement(vnode, container);
  } else if (shapeFlag & ShapeFlags.TEXT) {
    mountTextNode(vnode, container);
  } else if (shapeFlag & ShapeFlags.FRAGMENT) {
    mountFragment(vnode, container);
  } else {
    mountComponent(vnode, container);
  }
}

function mountElement(vnode, container) {
  const { type, props } = vnode;
  const el = document.createElement(type);
  mountProps(props, el);
  mountChildren(vnode, el);
  container.appendChild(el);
}
function mountTextNode(vnode, container) {
  const textNode = document.createTextNode(vnode.children);
  container.appendChild(textNode);
}
function mountFragment(vnode, container) {
  mountChildren(vnode, container);
}

function mountComponent(vnode, container) {}

function mountChildren(vnode, container) {
  const { shapeFlag, children } = vnode;
  if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
    mountTextNode(vnode, container);
  } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
    children.forEach((child) => {
      mount(child, container);
    });
  }
}

// {
//   class: 'a b',
//   style: {
//     color: 'red',
//     fontSize: '14px',
//   },
//   onClick: () => console.log('click'),
//   checked: '',
//   custom: false
// }
const domPropsRE = /[A-Z]|^(value|checked|selected|muted|disabled)$/;
function mountProps(props, el) {
  for (const key in props) {
    let value = props[key];
    switch (key) {
      case 'class':
        el.className = value;
        break;
      case 'style':
        for (const styleName in value) {
          el.style[styleName] = value[styleName];
        }
        break;

      default:
        if (/^on[^a-z]/.test(key)) {
          const eventName = key.slice(2).toLocaleLowerCase();
          el.addEventListener(eventName, value);
        } else if (domPropsRE.test(key)) {
          // 满足上面正则的，作为domProp赋值
          if (value === '' && typeof el[key] === 'boolean') {
            // 例如{checked: ''}
            value = true;
          }
          el[key] = value;
        } else {
          if (value == null || value === false) {
            el.removeAttribute(key);
          } else {
            el.setAttribute(key, value);
          }
        }
        break;
    }
  }
}
