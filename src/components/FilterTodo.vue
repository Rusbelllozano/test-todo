<template>
  <div class="ui basic centered">
      <div class="ui buttons center">
        <button class="ui button red" v-on:click="filterTodos(false)">
          Pending
        </button>
        <div class="or"></div>
        <button class="ui positive button" v-on:click="filterTodos(true)">
          Completed
        </button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    filterTodos(value) {
      this.$emit('filter-todo', {
        filter: value,
      });
    },
  },
};
</script>

<style></style>
