/*
 * @Author: GZH
 * @Date: 2021-09-15 14:30:38
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-15 14:32:23
 * @FilePath: \GoProJ\src\golangStudy\7-defer\defer.go
 * @Description:
 */

package main

import "fmt"

func main() {
	defer fmt.Println("end1")
	defer fmt.Println("end2") // 栈式调用

	fmt.Println("main: 1")
	fmt.Println("main: 2")
}
