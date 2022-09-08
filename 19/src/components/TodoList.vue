<template>
  <div class="todoList">
    <h2 class="text-center">Todo list</h2>
    <b-container>
      <b-list-group class="mb-3 mt-3">
        <div v-if="tasks.length === 0">
          <h2>No tasks yet</h2>
        </div>
        <b-list-group-item v-else v-for="(taskEl, index) in tasks" :key="index">
          <div class="d-flex w-100 justify-content-between align-items-center">
            <div class="row done w-50" v-if="tasks[index].isDone">
              <span class="col">{{ index + 1 }}</span>
              <span class="col">{{ taskEl.text }}</span>
              <hr class="w-100" />
            </div>
            <div class="row w-50" v-else>
              <span class="col">{{ index + 1 }}</span>
              <span class="col">{{ taskEl.text }}</span>
            </div>
            <div class="row">
              <b-form-checkbox class="col" v-model="tasks[index].isDone" button
                >Done</b-form-checkbox
              >
              <b-button class="col" @click="deleteTask(index)">Delete</b-button>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
      <h2 class="text-center">Add task</h2>
      <b-form class="w-100 mt-5">
        <b-form-group label="Enter a task:" label-for="task" class="mb-3"
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

      <b-button
        v-if="taskState"
        class="mb-3"
        variant="outline-primary"
        @click="addTask"
        >Add a task</b-button
      >
    </b-container>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      task: "",
      tasks: [],
    };
  },
  watch: {
    tasks: {
      handler: function () {
        this.saveTasks();
      },
      deep: true,
    },
  },
  mounted() {
    this.loadSavedTasks();
  },
  computed: {
    taskState() {
      return this.task.length > 4 ? true : false;
    },
  },
  methods: {
    addTask() {
      this.tasks.push({
        text: this.task,
        isDone: false,
      });
      this.task = "";
      this.saveTasks();
    },
    doneTask() {
      console.log(this.tasks);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    loadSavedTasks() {
      let savedTasks = JSON.parse(localStorage.getItem("tasks"));
      if (savedTasks) {
        for (let savedTask of savedTasks) {
          this.tasks.push(savedTask);
        }
      }
    },
  },
};
</script>

<style>
.switch button {
  display: none;
}

.row {
  font-size: 25px;
}
.done {
  position: relative;
  color: #d1cccc;
}

.done > hr {
  position: absolute;
  top: 50%;
  left: 5px;
}
</style>