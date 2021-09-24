/*
 * @Author: GZH
 * @Date: 2021-07-22 13:37:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-22 14:14:40
 * @FilePath: \my-app\src\pages\mini-router\hooks\useLocation.js
 * @Description:
 */
import { useContext } from 'react';
import { RouterContext } from '../components/Router';

export default function useLocation() {
  return useContext(RouterContext).location;
}
