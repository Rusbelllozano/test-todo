import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false },
    ],
    todos2: [],
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done),
  },
  actions: {
    GET_TODOS({ commit }) {
      axios.get('http://5d63ff9926046800144d71fa.mockapi.io/cards').then((res) => {
        console.log(res.data);
        commit('setTodos', res.data);
      });
    },
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;// eslint-disable-line no-param-reassign
    },
  },
});
