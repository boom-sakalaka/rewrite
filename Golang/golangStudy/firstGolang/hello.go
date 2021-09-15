/*
 * @Author: GZH
 * @Date: 2021-09-11 17:35:16
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-11 17:44:15
 * @FilePath: \GoProJ\src\golangStudy\firstGolang\hello.go
 * @Description: 
 */
package main // 程序的包名

// import "fmt"
// import "time"

import (
	"fmt"
	"time"
)

// main函数
func main() {
	// 加不加分号都行
	fmt.Println("Hello Go!");

	time.Sleep(1* time.Second)
}