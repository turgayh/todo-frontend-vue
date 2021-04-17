import TodoRepository from "./TodoRepository";

const repositories = {
  todo: TodoRepository,
};

export default {
  get: (name) => repositories[name],
};
