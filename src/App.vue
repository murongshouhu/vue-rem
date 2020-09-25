<template>
  <div id="app">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
    />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* 引入公共样式 */
@import "./style/style";
</style>
