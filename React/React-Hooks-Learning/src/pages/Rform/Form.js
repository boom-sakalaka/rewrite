/*
 * @Author: GZH
 * @Date: 2021-07-21 10:21:59
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-21 10:49:09
 * @FilePath: \my-app\src\pages\Rform\form.js
 * @Description:  封装一个表单组件
 */
import React from 'react';

export default class Form extends React.Component {
  state = {
    formData: {},
  };
  // 提交表单数据
  submitForm = cb => {
    cb({ ...this.state.formData });
  };
  // 重置表单数据
  resetForm = () => {
    const { formData } = this.state;
    Object.keys(formData).forEach(item => {
      formData[item] = '';
    });

    this.setState({
      formData,
    });
  };

  // 设置表单数据层
  setValue = (name, value) => {
    const { formData } = this.state;
    this.setState({
      formData: {
        ...formData,
        [name]: value,
      },
    });
  };

  render() {
    const { formData } = this.state;
    const { children } = this.props;
    const renderChildren = [];
    React.Children.forEach(children, child => {
      if (child.type.displayName === 'formItem') {
        const { name } = child.props;
        const Childern = React.cloneElement(
          child,
          {
            key: name,
            handleChange: this.setValue,
            value: formData[name] || '',
          },
          child.props.children
        );
        renderChildren.push(Childern);
      }
    });
    return renderChildren;
  }
}

Form.displayName = 'from';
