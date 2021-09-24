/*
 * @Author: GZH
 * @Date: 2021-07-26 15:00:34
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-26 15:01:06
 * @FilePath: \my-app\src\pages\FormData\component\Message.js
 * @Description:
 */
import React from 'react';

import './style.css';

function Message(props) {
  const { status, message, required, name, value } = props;
  console.log(props);
  let showMessage = '';
  if (required && !value && status === 'reject') {
    showMessage = `${name} 为必填项`;
  } else if (status === 'reject') {
    showMessage = message;
  } else if (status === 'resolve' || status === 'pendding') {
    showMessage = null;
  }
  return <div className='form-message'>{showMessage}</div>;
}

export default Message;
