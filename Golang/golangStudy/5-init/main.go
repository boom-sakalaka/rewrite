/*
 * @Author: GZH
 * @Date: 2021-09-15 09:26:45
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-15 13:57:54
 * @FilePath: \GoProJ\src\golangStudy\5-init\main.go
 * @Description:
 */
package main

import (
	_ "golangStudy/5-init/lib1"      // 匿名导入只执行init方法
	mylib2 "golangStudy/5-init/lib2" // 起别名
)

func main() {
	// lib1.Lib1Test()
	mylib2.Lib2Test()
}
