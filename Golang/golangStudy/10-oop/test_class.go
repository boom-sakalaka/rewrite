/*
 * @Author: GZH
 * @Date: 2021-09-16 10:35:11
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-16 10:42:08
 * @FilePath: \GoProJ\src\golangStudy\10-oop\test_class.go
 * @Description:
 */
package main

import "fmt"

type Hero struct {
	Name  string
	Ad    int
	Level int
}

/* func (this Hero) Show() {
	fmt.Println("hero===", this)
}

func (this Hero) GetName() string {
	return this.Name
}

func (this Hero) setName(newName string) {
	this.Name = newName
} */

func (this *Hero) Show() {
	fmt.Println("hero===", this)
}

func (this *Hero) GetName() string {
	return this.Name
}

func (this *Hero) setName(newName string) {
	this.Name = newName
}

func main() {
	// 创建一个对象
	hero := Hero{Name: "zhang3", Ad: 100, Level: 1}

	hero.setName("li4")
	hero.Show()
}
