/*
 * @Author: GZH
 * @Date: 2021-07-21 10:42:56
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-21 10:43:10
 * @FilePath: \my-app\src\pages\Rform\Input.js
 * @Description:
 */
/* Input 组件, 负责回传value值 */
export default function Input({ onChange, value }) {
  return <input className='input' onChange={e => onChange && onChange(e.target.value)} value={value} />;
}
/* 给Component 增加标签 */
Input.displayName = 'input';
