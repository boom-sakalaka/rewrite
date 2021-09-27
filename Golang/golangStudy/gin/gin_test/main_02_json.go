// gin 返回json
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.GET("/json", func(c *gin.Context) {
		// 方法一 使用map
		//data := map[string]interface{}{
		//	"name":    "小王子",
		//	"message": "hello world!",
		//	"age":     18,
		//}

		//data := gin.H{
		//	"name":    "小王子",
		//	"message": "hello world!",
		//	"age":     18,
		//}
		//c.JSON(http.StatusOK, data)

	})
	// 方法2 结构体
	type msg struct {
		Name    string `json:"name"`
		Age     int
		Message string
	}

	r.GET("/another_json", func(c *gin.Context) {
		data := msg{
			Name:    "测试name",
			Age:     15,
			Message: "msgTest",
		}

		c.JSON(http.StatusOK, data)
	})
	r.Run(":8888") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
