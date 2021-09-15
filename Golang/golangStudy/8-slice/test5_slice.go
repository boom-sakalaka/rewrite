/*
 * @Author: GZH
 * @Date: 2021-09-15 15:26:44
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-15 15:36:03
 * @FilePath: \GoProJ\src\golangStudy\8-slice\test5_slice.go
 * @Description:
 */
package main

import "fmt"

func main() {
	s := []int{1, 2, 3} // len=3,cap=3

	// 左闭合 切片截取
	s1 := s[0:1]

	fmt.Println(s1)
}
