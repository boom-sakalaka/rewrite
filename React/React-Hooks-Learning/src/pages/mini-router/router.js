/*
 * @Author: GZH
 * @Date: 2021-07-22 13:45:09
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-22 14:14:52
 * @FilePath: \my-app\src\pages\mini-router\router.js
 * @Description:
 */
//component
import Router, { RouterContext } from './components/Router';
import Route from './components/Route';
import Switch from './components/Switch';
//hooks
import useHistory from './hooks/useHistory';
import useListen from './hooks/useListen';
import useLocation from './hooks/useLocation';
//hoc
import withRouter from './hoc/withRouter';

export { Router, Switch, Route, RouterContext, useHistory, useListen, useLocation, withRouter };
