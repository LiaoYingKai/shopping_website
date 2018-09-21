<template>
<div id="app">
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}

body::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: sans-serif;
}
</style>
