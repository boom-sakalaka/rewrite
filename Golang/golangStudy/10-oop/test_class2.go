/*
 * @Author: GZH
 * @Date: 2021-09-16 10:45:13
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-17 15:56:13
 * @FilePath: \rewrite\Golang\golangStudy\10-oop\test_class2.go
 * @Description: 类的定义  类的继承
 */
package main

import "fmt"

type Human struct {
	name string
	sex  string
}

func (this *Human) Eat() {
	fmt.Println("human.Eat()")
}

func (this *Human) Run() {
	fmt.Println("human.Run()")
}

/* ========================== */

type SuperMan struct {
	Human // superMan 继承了Human类的方法

	level int
}

// 重新定义父类的方法
func (this *SuperMan) Eat() {
	fmt.Println("SupenMan.Eat()")
}

// 子类自己的方法
func (this *SuperMan) Fly() {
	fmt.Println("SuperMan.fly")
}

func main() {
	human := Human{name: "zhangsan", sex: "man"}
	human.Eat()
	human.Run()

	// spman := SuperMan{Human{name: "superman", sex: "man"}, 100}
	// 第一种方式

	// 第二种方式
	var spman SuperMan
	spman.name = "li4"
	spman.sex = "man"
	spman.level = 111

	spman.Run() // 父类的方法
	spman.Eat() // 子类的方法
	spman.Fly() // 子类的方法

}
