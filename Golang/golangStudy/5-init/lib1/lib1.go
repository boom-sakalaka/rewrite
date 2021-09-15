/*
 * @Author: GZH
 * @Date: 2021-09-15 09:27:12
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-15 10:33:21
 * @FilePath: \GoProJ\src\golangStudy\5-init\lib1\lib1.go
 * @Description: 
 */
package lib1

import "fmt"

// lib1 的方法 api
func  Lib1Test()  {
	fmt.Println("lib1---fn");
}

func  init()  {
	fmt.Println("lib1---Init");
}