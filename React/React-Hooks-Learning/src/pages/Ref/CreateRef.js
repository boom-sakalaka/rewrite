/*
 * @Author: GZH
 * @Date: 2021-07-21 11:06:26
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-21 11:08:14
 * @FilePath: \my-app\src\pages\Ref\CreateRef.js
 * @Description:
 */
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.currentDom = React.createRef(null);
  }
  componentDidMount() {
    console.log(this.currentDom);
  }
  render = () => <div ref={this.currentDom}>ref对象模式获取元素或组件</div>;
}

/* export function createRef() {
  const refObject = {
    current: null,
  }
  return refObject;
} */

// 函数组件中使用ref
/* export default function Index(){
  const currentDom = React.useRef(null)
  React.useEffect(()=>{
      console.log( currentDom.current ) // div
  },[])
  return  <div ref={ currentDom } >ref对象模式获取元素或组件</div>
}
 */
