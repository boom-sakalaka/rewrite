/*
 * @Author: GZH
 * @Date: 2021-09-15 14:48:51
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-17 16:09:34
 * @FilePath: \rewrite\Golang\golangStudy\8-slice\test2_slice.go
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

	// 如果不想用这个参数，可以使用下划线替换，就不会有提示
	for _, value := range myArr {
		fmt.Println("value", value)
	}

}
