<template lang="">
  <form @submit.prevent="login">
    <div class="form__row"><input type="text" placeholder="user@example.com" /></div>
    <div class="form__row"><input type="password" placeholder="********" /></div>
    <button class="primary">로그인</button>
  </form>
</template>
<script>
export default {
  methods: {
    login() {
      console.log('login');
    },
  },
};
</script>
<style lang=""></style>
