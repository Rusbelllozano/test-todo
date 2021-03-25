<template>
  <div id="app">
    <h1 class="ui dividing centered header">Vue.js Todo App</h1>
    <div class="ui three column centered grid">
      <div class="column">
        <div class="ui column card centered grid">
          <strong>Filters</strong>
          <FilterTodo v-on:filter-todo="filterTodos"> </FilterTodo>
          <button class="ui blue basic button" v-on:click="resetTodos()">
            Reset
          </button>
        </div>
        <todo-list v-bind:todos="values ? values : todos"></todo-list>
        <create-todo v-on:create-todo="createTodo"></create-todo>
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
import FilterTodo from './components/FilterTodo';

export default {
  name: 'app',
  created() {
    this.$store.dispatch('GET_TODOS');
  },
  components: {
    TodoList,
    CreateTodo,
    FilterTodo,
  },
  data() {
    return {
      values: null,
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    resetTodos() {
      this.values = null;
    },
    filterTodos(filtertodo) {
      this.values = this.todos.filter(
        todo => todo.isCompleted === filtertodo.filter,
      );
    },
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('Success!', 'To-Do created!', 'success');
    },
  },
};
</script>
<style>
  /* .ui.card{
    box-shadow: -4px 14px 27px 0px rgb(255, 191, 135);
  } */
</style>
