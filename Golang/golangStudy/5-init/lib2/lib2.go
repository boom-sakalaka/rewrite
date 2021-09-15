/*
 * @Author: GZH
 * @Date: 2021-09-15 09:27:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-15 09:57:49
 * @FilePath: \GoProJ\src\golangStudy\5-init\lib2\lib2.go
 * @Description: 
 */
package lib2

import "fmt"

// lib1 的方法 api
func  Lib2Test()  {
	fmt.Println("lib2---fn");
}

func  init()  {
	fmt.Println("lib2---Init");
}