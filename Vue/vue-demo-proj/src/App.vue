<!--
 * @Author: GZH
 * @Date: 2021-07-18 17:18:17
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-08 10:31:28
 * @FilePath: \vue-demo-proj\src\App.vue
 * @Description: 
-->
<template>
  <!-- <div id="app"> -->
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/betterScroll">betterScroll</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  <router-view />
  <!-- </div> -->
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
