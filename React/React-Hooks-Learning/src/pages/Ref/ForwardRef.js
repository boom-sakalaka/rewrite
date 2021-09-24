/*
 * @Author: GZH
 * @Date: 2021-07-21 11:16:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-27 11:31:09
 * @FilePath: \my-app\src\pages\Ref\ForwardRef.js
 * @Description:  https://juejin.cn/post/6844903955147980813
 */

/* // 孙组件 forwordRef 使用场景一 跨层级 获取 孙子组件的 ref
function Son(props) {
  const { grandRef } = props;
  return (
    <div>
      <div> i am alien </div>
      <span ref={grandRef}>这个是想要获取元素</span>
    </div>
  );
}
// 父组件
class Father extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Son grandRef={this.props.grandRef} />
      </div>
    );
  }
}
const NewFather = React.forwardRef((props, ref) => <Father grandRef={ref} {...props} />);
// 爷组件
class GrandFather extends React.Component {
  constructor(props) {
    super(props);
  }
  node = null;
  componentDidMount() {
    console.log(this.node); // span #text 这个是想要获取元素
  }
  render() {
    return (
      <div>
        <NewFather ref={node => (this.node = node)} />
      </div>
    );
  }
} */

/* =============================================================================================================== */

/* // 表单组件 场景二:合并转发ref
class Form extends React.Component{
  render(){
     return <div>{...}</div>
  }
}
// index 组件
class Index extends React.Component{
  componentDidMount(){
      const { forwardRef } = this.props
      forwardRef.current={
          form:this.form,      // 给form组件实例 ，绑定给 ref form属性
          index:this,          // 给index组件实例 ，绑定给 ref index属性
          button:this.button,  // 给button dom 元素，绑定给 ref button属性
      }
  }
  form = null
  button = null
  render(){
      return <div   >
        <button ref={(button)=> this.button = button }  >点击</button>
        <Form  ref={(form) => this.form = form }  />
    </div>
  }
}
const ForwardRefIndex = React.forwardRef(( props,ref )=><Index  {...props} forwardRef={ref}  />)
// home 组件
export default function Home(){
  const ref = useRef(null)
   useEffect(()=>{
       console.log(ref.current)
   },[])
  return <ForwardRefIndex ref={ref} />
}
 */

/* =============================================================================================================== */

//  场景三：高阶组件转发
/* function HOC(Component) {
  class Wrap extends React.Component {
    render() {
      const { forwardedRef, ...otherprops } = this.props;
      return <Component ref={forwardedRef} {...otherprops} />;
    }
  }
  return React.forwardRef((props, ref) => <Wrap forwardedRef={ref} {...props} />);
}
class Index extends React.Component {
  render() {
    return <div>hello,world</div>;
  }
}
const HocIndex = HOC(Index);
export default () => {
  const node = useRef(null);
  useEffect(() => {
    console.log(node.current); //Index 组件实例
  }, []);
  return (
    <div>
      <HocIndex ref={node} />
    </div>
  );
};
 */

/* =============================================================================================================== */

// / 父组件 调用子组件的方法
/* 子组件 */
// class Son extends React.PureComponent {
//   state = {
//     fatherMes: '',
//     sonMes: '',
//   };
//   fatherSay = fatherMes => this.setState({ fatherMes }); // 提供给父组件的API
//   render() {
//     const { fatherMes, sonMes } = this.state;
//     return (
//       <div className='sonbox'>
//         <div className='title'>子组件</div>
//         <p>父组件对我说：{fatherMes}</p>
//         <div className='label'>对父组件说</div>{' '}
//         <input onChange={e => this.setState({ sonMes: e.target.value })} className='input' />
//         <button className='searchbtn' onClick={() => this.props.toFather(sonMes)}>
//           to father
//         </button>
//       </div>
//     );
//   }
// }
// /* 父组件 */
// export default function Father() {
//   const [sonMes, setSonMes] = React.useState('');
//   const sonInstance = React.useRef(null); /* 用来获取子组件实例 */
//   const [fatherMes, setFatherMes] = React.useState('');
//   const toSon = () => sonInstance.current.fatherSay(fatherMes); /* 调用子组件实例方法，改变子组件state */
//   return (
//     <div className='box'>
//       <div className='title'>父组件</div>
//       <p>子组件对我说：{sonMes}</p>
//       <div className='label'>对子组件说</div> <input onChange={e => setFatherMes(e.target.value)} className='input' />
//       <button className='searchbtn' onClick={toSon}>
//         to son
//       </button>
//       <Son ref={sonInstance} toFather={setSonMes} />
//     </div>
//   );
// }

/* =============================================================================================================== */

// 子组件
function Son(props, ref) {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  useImperativeHandle(
    ref,
    () => {
      const handleRefs = {
        onFocus() {
          /* 声明方法用于聚焦input框 */
          inputRef.current.focus();
        },
        onChangeValue(value) {
          /* 声明方法用于改变input的值 */
          setInputValue(value);
        },
      };
      return handleRefs;
    },
    []
  );
  return (
    <div>
      <input placeholder='请输入内容' ref={inputRef} value={inputValue} />
    </div>
  );
}

const ForwarSon = forwardRef(Son);
// 父组件
class Index extends React.Component {
  cur = null;
  handerClick() {
    const { onFocus, onChangeValue } = this.cur;
    onFocus(); // 让子组件的输入框获取焦点
    onChangeValue('let us learn React!'); // 让子组件input
  }
  render() {
    return (
      <div style={{ marginTop: '50px' }}>
        <ForwarSon ref={cur => (this.cur = cur)} />
        <button onClick={this.handerClick.bind(this)}>操控子组件</button>
      </div>
    );
  }
}
