/*
 * @Author: GZH
 * @Date: 2021-07-13 09:05:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-15 09:19:00
 * @FilePath: \my-app\src\pages\jsxSource\index.js
 * @Description: render 会被babel编译成  React.createElement的嵌套结构，
 * 从而生成一个个React element,在最后一个调和阶段生成与之对应的fiber对象
 *
 *
 *
 * babel 编译 render 函数
 * createElement 组件的参数
 * React.createElement(
 *  type,
 *  [props],
 *  [...children]
 * )
 *
 * type: 第一个参数，如果是组件类型，会传入组件对应的类或函数，如果是dom类型，就是标签名
 * props: 如果type 是dom ，那么props 属性传入的就会是 dom属性，如果是组件，传入的就是 props
 * children 嵌套,有可能是文本节点或者是组件、dom的数组，不断嵌套
 */
import React from 'react';

const toLearn = ['react', 'vue', 'webpack', 'nodejs'];

const TextComponent = () => <div> hello , i am function component </div>;

/* TODO: ② */
class Index extends React.Component {
  status = false; /* 状态 */
  renderFoot = () => <div> i am foot</div>;
  /* 控制渲染 */
  controlRender = () => {
    const reactElement = (
      <div style={{ marginTop: '100px' }} className='container'>
        {/* element 元素类型 */}
        <div>
          hello,world
          <div>mmmmmname</div>
        </div>
        {/* fragment 类型 */}
        <React.Fragment>
          <div> 👽👽 </div>
        </React.Fragment>
        {/* text 文本类型 */}
        my name is alien
        {/* 数组节点类型 */}
        {toLearn.map(item => (
          <div key={item}>let us learn {item} </div>
        ))}
        {/* 组件类型 */}
        <TextComponent />
        {/* 三元运算 */}
        {this.status ? <TextComponent /> : <div>三元运算</div>}
        {/* 函数执行 */}
        {this.renderFoot()}
        <button onClick={() => console.log(this.render())}>打印render后的内容</button>
      </div>
    );

    const { children } = reactElement.props;
    // debugger;
    /* 第一步 ： 扁平化 children  ,只处理了第一层的嵌套*/
    const flatChildren = React.Children.toArray(children);
    console.log(flatChildren);
    /* 第二步 ： 除去文本节点 */
    const newChildren = [];
    React.Children.forEach(flatChildren, item => {
      if (React.isValidElement(item)) newChildren.push(item);
    });
    /* 第三步，插入新的节点 */
    const lastChildren = React.createElement(`div`, { props: { className: 'last' } }, `say goodbye`);
    newChildren.push(lastChildren);

    /* 第四步：修改容器节点 */
    console.log(reactElement);
    const newReactElement = React.cloneElement(reactElement, {}, ...newChildren);
    console.log(newReactElement);
    return newReactElement;
  };
  render() {
    return this.controlRender();
  }
}

/* TODO: ①  */
// class Index extends React.Component {
//   status = false; /* 状态 */
//   componentDidMount() {
//     console.log(this);
//   }
//   renderFoot = () => <div> i am foot</div>;
//   render() {
//     /* 以下都是我们常用的jsx元素节 */
//     return (
//       <div style={{ marginTop: '100px' }}>
//         {/* element 元素类型 */}
//         <div>hello,world</div>
//         {/* fragment 类型 */}
//         <React.Fragment>
//           <div> 👽👽 </div>
//         </React.Fragment>
//         {/* text 文本类型 */}
//         my name is alien
//         {/* 数组节点类型 */}
//         {toLearn.map(item => (
//           <div key={item}>let us learn {item} </div>
//         ))}
//         {/* 组件类型 */}
//         <TextComponent />
//         {/* 三元运算 */}
//         {this.status ? <TextComponent /> : <div>三元运算</div>}
//         {/* 函数执行 */}
//         {this.renderFoot()}
//         <button onClick={() => console.log(this.render())}>打印render后的内容</button>
//       </div>
//     );
//   }
// }

export default Index;
