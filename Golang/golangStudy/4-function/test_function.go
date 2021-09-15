package main

import "fmt"


func fool(a string, b int) int {
	fmt.Println("a===", a)
	fmt.Println("b===",b)
	c:= 100
	return c
}

func fools(a string, b int) (int,int) {
	fmt.Println("a===", a)
	fmt.Println("b===",b)
	return 666,777
}



func  main()  {
	c := fool("abc",20)
	fmt.Println("c===",c)
	
  res1,res2:=fools("sss",1000)

	fmt.Println("res1==",res1)
	fmt.Println("res2==",res2)

}
