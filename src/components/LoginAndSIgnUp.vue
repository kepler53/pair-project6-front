<template>
  <div class="loginAndSignup">
    <LoginBtn />
    <SignUpBtn />
  </div>
</template>
<script>
import LoginBtn from './LoginBtn.vue';
import SignUpBtn from './SignUpBtn.vue';
export default {
  components: { LoginBtn, SignUpBtn },
};
</script>
<style>
.loginAndSignup {
  margin-right: 1em;
}
</style>
