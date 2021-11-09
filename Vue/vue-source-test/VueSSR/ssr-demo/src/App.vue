<!--
 * @Author: GZH
 * @Date: 2021-09-21 10:18:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-21 11:57:43
 * @FilePath: \rewrite\Vue\VueSSR\ssr-demo\src\App.vue
 * @Description: 
-->
<template>
  <div id="app">
    <p>{{ $store.state.count }}</p>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
