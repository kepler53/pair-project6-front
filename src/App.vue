<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}

button {
  border: 0.5px solid black;
  outline: none;
  background-color: whitesmoke;
  cursor: pointer;
}

a {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: whitesmoke;
}

/* .container {
  margin-top: 10em;
  width: 30em;
  height: 20em;
  background-color: white;
} */

button.primary {
  background-color: #00ffee;
  color: white;
}
</style>
