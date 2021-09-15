/*
 * @Author: GZH
 * @Date: 2021-09-15 14:48:51
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-15 15:02:20
 * @FilePath: \GoProJ\src\golangStudy\8-slice\test2_slice.go
 * @Description:
 */
package main

import "fmt"

func printArray(myArray []int) {

	// 切片传递的是引用
	for _, value := range myArray {
		fmt.Println("value=", value)
	}

	myArray[0] = 1010
}

func main() {
	myArr := []int{1, 2, 3, 4} // 动态数组 切片

	fmt.Printf("%T", myArr)
	printArray(myArr)

	fmt.Println("===========")

	for _, value := range myArr {
		fmt.Println("value", value)
	}

}
