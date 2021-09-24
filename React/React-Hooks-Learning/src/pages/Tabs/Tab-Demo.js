/*
 * @Author: GZH
 * @Date: 2021-09-24 16:09:58
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-24 16:30:40
 * @FilePath: \rewrite\React\React-Hooks-Learning\src\pages\Tabs\Tab-demo.js
 * @Description:
 */
import { Tab, TabItem } from './index';

import React from 'react';

export default function TabDemo() {
  const handleClickTab = name => {
    console.warn(name);
  };
  return (
    <div>
      <Tab onChange={handleClickTab}>
        <TabItem name='Vue' label='vue'>
          vue
        </TabItem>
        <TabItem name='react' label='react'>
          react
        </TabItem>
        <TabItem name='angular' label='angular'>
          angular
        </TabItem>
      </Tab>
    </div>
  );
}
