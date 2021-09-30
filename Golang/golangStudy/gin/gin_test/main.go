package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.LoadHTMLFiles("./login.html")
	r.GET("/login", func(c *gin.Context) {
		c.HTML(http.StatusOK, "login.html", nil)
	})

	r.POST("/login", func(c *gin.Context) {
		userName := c.PostForm("username")
		password := c.PostForm("password")

		c.JSON(http.StatusOK, gin.H{
			"usename":  userName,
			"password": password,
		})
	})

	r.Run(":9090")
}
