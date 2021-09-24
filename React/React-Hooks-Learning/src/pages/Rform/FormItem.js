/*
 * @Author: GZH
 * @Date: 2021-07-21 10:39:19
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-21 10:49:20
 * @FilePath: \my-app\src\pages\Rform\FormItem.js
 * @Description:
 */
import React from 'react';

export default function FormItem(props) {
  const { children, name, handleChange, value, label } = props;
  const onChange = value => {
    // 通知上一次Value 已经改变
    handleChange(name, value);
  };
  return (
    <div className='form'>
      <span>{label}:</span>
      {React.isValidElement(children) && children.type.displayName === 'input'
        ? React.cloneElement(children, { onChange, value })
        : null}
    </div>
  );
}

FormItem.displayName = 'formItem';
