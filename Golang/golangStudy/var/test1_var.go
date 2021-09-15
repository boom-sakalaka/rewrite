/*
 * @Author: GZH
 * @Date: 2021-09-11 17:48:31
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-14 17:45:07
 * @FilePath: \GoProJ\src\golangStudy\var\test1_var.go
 * @Description: 
 */
package main

import ("fmt")

func main() {
	// 方式一 默认值为 0 
	var a int 
	fmt.Println("a===",a)

	fmt.Printf("%T",a)
	// var b int = 100

	var b int = 100
	fmt.Println("b=====",b)


var (
	c int= 1
	d int= 2
)
fmt.Println(c)
fmt.Println(d)
}