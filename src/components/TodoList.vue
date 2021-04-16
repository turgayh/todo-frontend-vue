<template>
  <div>
    <h1>fdsfas</h1>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done"
      @keyup.enter="addTodo"
      v-model="newTodo"
    />
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
      <div>
        {{ todo.title }}
      </div>
      <div class="remove-item">&times;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      todos: [
        { id: 1, title: "First Task", completed: false },
        { id: 2, title: "Second Task", completed: false },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
      });
      this.idForTodo++;
      this.newTodo = "";
    },
  },
};
</script>
<style lang="scss">
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  &:focus {
    outline: 0;
  }

  .todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .remove-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover {
      color: black;
    }
  }
}
</style>
