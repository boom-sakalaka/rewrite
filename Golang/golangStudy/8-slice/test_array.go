/*
 * @Author: GZH
 * @Date: 2021-09-15 14:37:10
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-15 14:46:56
 * @FilePath: \GoProJ\src\golangStudy\8-slice\test_array.go
 * @Description:
 */
package main

import "fmt"

func PirntArr(b [4]int) {
	for index, value := range b {
		fmt.Println("index=", index, "value", value)
	}
}

func main() {
	// var a [10]int

	b := [4]int{1, 2, 3, 4}

	// for i := 0; i < len(a); i++ {
	// 	fmt.Println(a[i])
	// }

	// for index, value := range b {
	// 	fmt.Println("index=", index, ",value=", value)
	// }
	PirntArr(b)
}
