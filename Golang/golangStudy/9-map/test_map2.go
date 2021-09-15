/*
 * @Author: GZH
 * @Date: 2021-09-15 17:44:16
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-15 17:50:29
 * @FilePath: \GoProJ\src\golangStudy\9-map\test_map2.go
 * @Description:
 */
package main

import "fmt"

func printMap(cityMap map[string]string) {

	// 指针 同一块共享空间
	// 遍历
	for key, value := range cityMap {
		fmt.Println("key=", key, "value=", value)
	}
}

func main() {
	cityMap := make(map[string]string)

	//添加
	cityMap["China"] = "beijine"
	cityMap["Japan"] = "Tokyo"
	cityMap["USA"] = "NewYork"

	//删除
	delete(cityMap, "China")

	// 修改
	cityMap["USA"] = "DC"

	// -----------------
	printMap(cityMap)
}
