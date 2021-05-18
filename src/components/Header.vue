<template lang="">
  <header class="header">
    <Logo />
    <Nav />
    <LoginAndSignUp />
  </header>
</template>
<script>
import Logo from './Logo.vue';
import Nav from './Nav.vue';
import LoginAndSignUp from './LoginAndSIgnUp.vue';
export default {
  components: {
    Logo,
    Nav,
    LoginAndSignUp,
  },
};
</script>
<style scoped>
.header {
  position: fixed;
  top: 1em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
}
</style>
