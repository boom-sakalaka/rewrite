/*
 * @Author: GZH
 * @Date: 2021-07-01 11:17:35
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-01 11:24:21
 * @FilePath: \my-app\src\hooks\useFormatList.js
 */
/** 自定义hooks 用于格式化数组将小写转成大写
 * 自定义hook 要考虑性能，要和 useMemo useCallback 配合使用
 */
import { useMemo } from 'react';
export default function useFormatList(list) {
  return useMemo(
    () =>
      list.map(item => {
        console.log(1111);
        return item.toUpperCase();
      }),
    []
  );
}
