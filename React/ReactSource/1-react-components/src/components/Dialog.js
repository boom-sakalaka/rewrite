/*
 * @Author: GZH
 * @Date: 2021-10-06 22:14:41
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-06 22:14:44
 * @FilePath: \rewrite\React\1-react-components\src\components\Dialog.js
 * @Description: 传送门
 */
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
  }

  componentWillUnmount() {
    if (this.node) {
      window.document.body.removeChild(this.node);
    }
  }

  render() {
    return createPortal(
      <div className='dialog'>
        <h3>Dialog</h3>
      </div>,
      this.node
    );
  }
}
