<template>
  <span @click="goToHome" class="title">HappyHouse</span>
</template>
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 1.5rem;
  color: whitesmoke;
  margin-left: 1em;
  cursor: pointer;
}
</style>
