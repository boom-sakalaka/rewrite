/*
 * @Author: GZH
 * @Date: 2021-09-15 15:08:50
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-15 15:26:17
 * @FilePath: \GoProJ\src\golangStudy\8-slice\test4_slice.go
 * @Description:
 */
package main

import "fmt"

func main() {
	// 初始化切片空间 // 5 容量为5,每次超出使用这个值新增位置，如果不设置， 根据之前的cap 容量增加2倍
	var numbers = make([]int, 3, 5)

	numbers = append(numbers, 1)
	numbers = append(numbers, 2) // 追加元素
	numbers = append(numbers, 6)

	fmt.Println(len(numbers))
	fmt.Println(cap(numbers))
	fmt.Println(numbers)
}
