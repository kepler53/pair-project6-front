<template lang="">
  <section class="main">
    <SearchForm />
  </section>
</template>
<script>
import SearchForm from '@/components/SearchForm';
export default {
  components: {
    SearchForm,
  },
};
</script>
<style scoped>
.main {
  height: 50em;
  background: center/100% no-repeat url('../assets/header_back.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
