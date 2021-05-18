import Vue from 'vue';
import Vuex from 'vuex';
import { api } from '@/service/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boardList: [],
    board: {},
  },
  mutations: {
    setBoardList(state, payload) {
      state.boardList = payload;
    },
    setBoard(state, payload) {
      state.board = payload;
    },
    writeBoard(state, payload) {
      state.boardList.push(payload);
    },
  },
  actions: {
    getBoardList({ commit }) {
      api.getBoardList().then((data) => {
        commit('setBoardList', data);
      });
    },
    getBoard({ commit }, boardId) {
      api.getBoard(boardId).then((data) => {
        commit('setBoard', data);
      });
    },
    writeBoard({ commit }, board) {
      api.writeBoard(board).then((data) => {
        console.log(data);
        commit('writeBoard', board);
      });
    },
  },
  getters: {
    getBoardList(state) {
      return state.boardList;
    },
    board(state) {
      return state.board;
    },
  },
  modules: {},
});
