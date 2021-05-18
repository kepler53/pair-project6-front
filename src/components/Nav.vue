<template>
  <ul class="nav">
    <router-link to="/home"><li class="nav-item">Home</li></router-link>
    <router-link to="/qna"><li class="nav-item">Qna</li></router-link>
    <router-link to="/about"><li class="nav-item">About</li></router-link>
  </ul>
</template>
<script>
export default {};
</script>
<style scoped>
.nav {
  display: flex;
  padding-left: 0;
}

.nav-item {
  font-size: 1.2rem;
  color: whitesmoke;
  list-style: none;
  margin: 1em;
}
</style>
