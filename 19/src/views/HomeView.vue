<template>
  <div class="home">
    <FormColor />
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import FormColor from '@/components/FormColor.vue'
import TodoList from '@/components/TodoList.vue'


export default {
  name: 'HomeView',
  components: {
    FormColor,
    TodoList,
  }
}
</script>
