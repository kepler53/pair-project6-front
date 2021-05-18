<template>
  <section class="qna">
    <h1>QNA Page</h1>
    <div class="write-container">
      <router-link to="/qna/write"><button class="write-btn">글쓰기</button></router-link>
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  color: whitesmoke;
  margin: 0;
  margin-top: 5em;
}
.qna {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50em;
  background-color: darkslateblue;
}

.write-container {
  text-align: right;
  width: 57.7em;
}

.write-btn {
  background-color: transparent;
  color: whitesmoke;
  border: 1px solid whitesmoke;
  border-radius: 2em;
  padding: 0.5em;
  transition: all 200ms ease-in-out;
}

.write-btn:hover {
  color: darkslateblue;
  background-color: whitesmoke;
}
</style>
