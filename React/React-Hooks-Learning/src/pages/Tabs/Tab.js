/*
 * @Author: GZH
 * @Date: 2021-09-24 15:27:06
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-24 16:20:52
 * @FilePath: \rewrite\React\React-Hooks-Learning\src\pages\Tabs\Tab.js
 * @Description:
 */
import React, { useRef, useState } from 'react';
import './index.css';

export default function Tab({ children, onChange }) {
  const activeIndex = useRef(null);
  const [, forceUpdate] = useState({});

  /*  提供给 tab 使用  */
  const tabList = [];

  /* 待渲染组件 */
  let renderChildren = null;

  React.Children.forEach(children, item => {
    /* 验证是否是 <TabItem></TabItem>  组件*/

    if (React.isValidElement(item) && item.type.displayName === 'tabItem') {
      const { props } = item;
      const { name, label } = props;
      const tabItem = {
        name,
        label,
        active: name === activeIndex.current,
        component: item,
      };
      // 如果activeIndex 是当前的，就渲染它
      if (name === activeIndex.current) renderChildren = item;
      tabList.push(tabItem);
    }
  });

  /* 第一次加载 或者 props children 改变的情况 */
  if (!renderChildren && tabList.length > 0) {
    const firstChildren = tabList[0];
    renderChildren = firstChildren.component;
    activeIndex.current = firstChildren.component.props.name;
    firstChildren.active = true;
  }

  /* 切换tab */
  const changeTab = name => {
    activeIndex.current = name;
    forceUpdate({});
    onChange && onChange(name);
  };
  console.warn(tabList);
  return (
    <div>
      <div className='header'>
        {tabList.map((tab, index) => (
          <div
            className='header_item'
            key={index}
            onClick={() => {
              changeTab(tab.name);
            }}
          >
            <div className={'text'}>{tab.label}</div>
            {tab.active && <div className='active_bored'></div>}
          </div>
        ))}
      </div>
      <div>{renderChildren}</div>
    </div>
  );
}

Tab.displayName = 'tab';
