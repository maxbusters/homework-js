<template>
  <div class="todoList">
    <h2 class="text-center">Todo list</h2>
    <b-container>
      <b-list-group class="mb-3 mt-3">
        <b-list-group-item v-for="(taskEl, index) in tasks" :key="index">
          <div class="d-flex w-100 justify-content-between">
            <span>{{index + 1}}</span>
            <span>{{taskEl.text}}</span>
            <b-checkbox :value="taskEl.isDone"></b-checkbox>
          </div>
        </b-list-group-item>
      </b-list-group>
      <h2 class="text-center">Add task</h2>
      <b-form class="w-100 mt-5">
        <b-form-group
          label="Enter a task:"
          label-for="task"
          class="mb-3"
          ><b-form-input
            id="task"
            type="text"
            placeholder="todo task"
            aria-describedby="task-live-feedback"
            required
            v-model="task"
            :state="taskState"
          ></b-form-input>
          <b-form-invalid-feedback id="task-live-feedback">
            Enter at least 5 letters
          </b-form-invalid-feedback>
        </b-form-group>
      </b-form>

      <b-button v-if="taskState" class="mb-3" variant="outline-primary" @click="addTask">Add a task</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data(){
    return{
        task: "",
        tasks: []
    }
  },
  computed: {
    taskState(){
        return this.task.length > 4 ? true: false;
    }
  },
  methods: {
    addTask(){
        this.tasks.push({
            text: this.task,
            isDone: false
        });
        this.task = "";
    }
  }
};
</script>

<style>
</style>