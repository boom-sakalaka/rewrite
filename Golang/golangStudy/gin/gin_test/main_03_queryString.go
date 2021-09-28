package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.GET("web", func(context *gin.Context) {

		//name := context.Query("name")// 获取浏览器url携带的参数
		//name := context.DefaultQuery("name", "test") // 添加默认值
		name, ok := context.GetQuery("name") // 取不到返回Bool值
		if !ok {
			name = "no-ok"
		}

		context.JSON(http.StatusOK, gin.H{
			"name": name,
		})
	})

	r.Run(":8888")
}
