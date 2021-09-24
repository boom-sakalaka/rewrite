/*
 * @Author: GZH
 * @Date: 2021-07-26 15:00:34
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-26 15:00:58
 * @FilePath: \my-app\src\pages\FormData\component\Label.js
 * @Description:
 */
import React from 'react';

import './style.css';

function Index({ children, label, labelWidth, required, height }) {
  return (
    <div className='form-label' style={{ height: height + 'px' }}>
      <div className='form-label-name' style={{ width: `${labelWidth}px` }}>
        {required ? <span style={{ color: 'red' }}>*</span> : null}
        {label}:
      </div>{' '}
      {children}
    </div>
  );
}

export default Index;
