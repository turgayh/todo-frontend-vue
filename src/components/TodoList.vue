<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done"
      @keyup.enter="addTodo"
      v-model="newTodo"
    />

    <button class="add-item" @click="addTodo">Add</button>
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
      <div>
        {{ todo.description }}
      </div>
    </div>
  </div>
</template>

<script>
import Repository from "../repositories/RepositoryFactory";
const TodoRepository = Repository.get("todo");

export default {
  name: "TodoList",
  data() {
    return {
      isLoading: true,
      newTodo: "",
      idForTodo: 3,
      todos: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    addTodo: async function () {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      const { data } = await TodoRepository.create({
        description: this.newTodo,
      });
      if (data !== undefined && data.id !== undefined) {
        this.todos.push({
          id: data.id,
          description: this.newTodo,
          completed: false,
        });
        this.newTodo = "";
      }
      this.isLoading = false;
    },
    loadData: async function () {
      const { data } = await TodoRepository.get();
      this.todos = data;
    },
  },
};
</script>
<style lang="scss">
.todo-input {
  width: 90%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  &:focus {
    outline: 0;
  }
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

.add-item {
  cursor: pointer;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 18px;
  margin-left: 5px;
  &:hover {
    background-color: green;
  }
}
</style>
