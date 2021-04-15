<template>
    <div class ='container'>
      <img alt="Vue logo" class = 'logo' src="./assets/logo.png" />
       <TodoList/>
    </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
*{
    box-sizing:border-box;
}
.container {
    margin: 0 auto;
    max-width: 600px;
}
.logo{
    height: 75px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
