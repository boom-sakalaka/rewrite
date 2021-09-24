/*
 * @Author: GZH
 * @Date: 2021-07-22 13:37:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-22 14:14:33
 * @FilePath: \my-app\src\pages\mini-router\hooks\useHistory.js
 * @Description:
 */
import { useContext } from 'react';
import { RouterContext } from '../components/Router';

export default function useHistory() {
  return useContext(RouterContext).history;
}
