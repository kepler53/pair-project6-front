<template>
  <form class="search-form" @submit.prevent="search">
    <input class="search-input" type="text" />
    <button class="search-btn"><font-awesome-icon :icon="['fas', 'search']" /></button>
  </form>
</template>
<script>
export default {
  methods: {
    search() {
      console.log('search');
    },
  },
};
</script>
<style>
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45em;
  background-color: white;
  border-radius: 3em;
}

.search-input {
  font-size: 2.8rem;
  padding: 0.5em;
  outline: none;
  border: none;
}

.search-btn {
  display: flex;
  color: white;

  background-color: darkslateblue;
  font-size: 1.5rem;
  padding: 0.5em;
  border-radius: 50%;
}
</style>
