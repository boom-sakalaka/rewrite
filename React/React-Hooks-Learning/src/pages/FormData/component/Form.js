/*
 * @Author: GZH
 * @Date: 2021-07-23 16:45:47
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-26 14:40:05
 * @FilePath: \my-app\src\pages\FormData\component\Form.js
 * @Description:
 */
import React, { forwardRef, useImperativeHandle } from 'react';

import FormContext from './FormContext';
import useForm from '../hooks/useForm';

/**
 * props -> default
 */
function Form({ onFinish, form, onFinishFailed, initialValues, children }, ref) {
  /* 创建 form 状态管理实例 */
  const formInstance = useForm(form, initialValues);
  const { setCallback, ...providerFormInstance } = formInstance;

  /* 向 form 中注册回调函数 */
  setCallback({
    onFinish,
    onFinishFailed,
  });

  /* Form 能够被 ref 标记，并操作实例。 */
  useImperativeHandle(ref, () => providerFormInstance, []);

  const RenderChildren = <FormContext.Provider value={formInstance}> {children} </FormContext.Provider>;

  return (
    <form
      onReset={e => {
        e.preventDefault();
        e.stopPropagation();
        formInstance.resetFields(); /* 重置表单 */
      }}
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        formInstance.submit(); /* 提交表单 */
      }}
    >
      {RenderChildren}
    </form>
  );
}

export default forwardRef(Form);
