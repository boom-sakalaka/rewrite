/*
 * @Author: GZH
 * @Date: 2021-09-22 19:51:51
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-23 20:11:39
 * @FilePath: \rewrite\React\1-react-components\src\App.js
 * @Description:
 */
import React from 'react';
// import ContextPage from "./pages/ContextPage";
// import HocPage from "./pages/HocPage";
// import AntdFormPage from "./pages/AntdFormPage";
import MyRCFieldForm from './pages/MyRCFieldForm';
// import MyRCForm from './pages/MyRCForm';
// import DialogPage from './pages/DialogPage';

export default function App(props) {
  return (
    <div>
      {/* <ContextPage /> */}
      {/* <HocPage /> */}
      {/* <AntdFormPage /> */}
      <MyRCFieldForm />
      {/* <MyRCForm /> */}
      {/* <DialogPage /> */}
    </div>
  );
}
