import React, { useContext } from 'react';
import { matchPath } from 'react-router';
import { RouterContext } from './Router';

export default function Switch(props) {
  const context = useContext(RouterContext);
  const location = props.location || context.location;
  let children, match;
  // 遍历children Route 找到匹配的
  React.Children.forEach(props.children, child => {
    if (!match && React.isValidElement(child)) {
      /* 路由匹配并为React.element元素的时候 */
      const path = child.props.path;
      children = child;
      match = path ? matchPath(location.pathname, { ...child.props }) : context.match; /* 计算是否匹配 */
    }
  });
  /* 克隆一份Children，混入 computedMatch 并渲染。 */
  return match ? React.cloneElement(children, { location, computedMatch: match }) : null;
}
