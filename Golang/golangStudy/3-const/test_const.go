/*
 * @Author: GZH
 * @Date: 2021-09-14 17:37:25
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-14 17:41:52
 * @FilePath: \GoProJ\src\golangStudy\3-const\test_const.go
 * @Description: 
 */
package main

import "fmt"

const (
	BEIJING = 10*iota
	SHANGHAI
	SHENZHEN
)


func main() {
	// 常量 只读属性
	const length int = 10

	fmt.Println(length)


	fmt.Println("BEIJING=",BEIJING)
	fmt.Println("SHANGHAI",SHANGHAI)
	fmt.Println("SHENZHEN",SHENZHEN)
}