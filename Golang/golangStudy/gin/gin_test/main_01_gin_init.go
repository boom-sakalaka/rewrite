package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func SayHello(w http.ResponseWriter, r *http.Request) {
	b, _ := ioutil.ReadFile("./hello.txt")
	fmt.Fprintln(w, string(b))
}

func main() {
	http.HandleFunc("/hello", SayHello)
	err := http.ListenAndServe(":8001", nil)
	if err != nil {
		fmt.Printf("http serve failed error%v\n", err)
		return
	}
}
