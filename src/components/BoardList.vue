<template>
  <table class="qna-table">
    <thead>
      <tr>
        <td class="title">제목</td>
        <td class="writer">작성자</td>
        <td class="creation-time">작성일</td>
        <td class="views">조회</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(board, index) in getBoardList" :key="index">
        <router-link class="tr" :to="{ name: 'Read', params: { boardId: board.board_no } }">
          <td class="td">{{ board.board_title }}</td>
        </router-link>
        <td>장준혁</td>
        <td>2011-02-11</td>
        <td>{{ board.board_count }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  created() {
    this.$store.dispatch('getBoardList');
  },
  computed: {
    ...mapGetters(['getBoardList']),
  },
};
</script>
<style scoped>
.qna-table {
  margin-top: 1em;
  border: 0.5px solid whitesmoke;
  border-collapse: collapse;
  text-align: center;
}

.title {
  width: 70%;
}

.writer {
  width: 10%;
}

.creation-time {
  width: 10%;
}
.views {
  width: 5%;
}

.qna-table th,
td {
  border: 1px solid whitesmoke;
}
.qna-table td {
  color: whitesmoke;
  padding: 0.35em;
}

.tr {
  display: flex;
}

.td {
  width: 100%;
}
</style>
