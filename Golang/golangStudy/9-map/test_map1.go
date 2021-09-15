/*
 * @Author: GZH
 * @Date: 2021-09-15 17:04:12
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-15 17:41:51
 * @FilePath: \GoProJ\src\golangStudy\9-map\test_map1.go
 * @Description:
 */
package main

import "fmt"

func main() {
	// 声明myMap1 是一种map 类型 key是string value是string

	var myMap map[string]string

	if myMap == nil {
		fmt.Println("myMap是一个空map")
	}

	myMap = make(map[string]string, 10)

	myMap["one"] = "java"
	myMap["two"] = "c++"
	myMap["three"] = "python"

	fmt.Println(myMap)

	// 第二种声明方式
	myMap2 := make(map[string]string, 10)

	myMap2["1"] = "12333"

	fmt.Println(myMap2)

	// 第三中声明方式
	myMap3 := map[string]string{
		"one":   "java",
		"two":   "c++",
		"three": "python",
	}

	fmt.Println(myMap3)

}
