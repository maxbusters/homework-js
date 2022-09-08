<template>
  <div class="formColor">
    <h2 class="text-center">Set text color</h2>
    <b-container>
      <b-form class="w-100 mt-5">
        <b-form-group
          id="color-group-1"
          label="Color name:"
          label-for="colorName"
          class="mb-3"
        >
          <b-form-input
            id="textField"
            type="text"
            placeholder="Enter color name "
            aria-describedby="text-live-feedback"
            required
            v-model="form.text"
            :state="textState"
            class="font-size: 20px"
          ></b-form-input>
          <b-form-invalid-feedback id="text-live-feedback">
            Enter at least 3 letters
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="color-picker-group"
          label="Colorpicker:"
          label-for="colorPicker"
          class="mb-3"
        >
          <b-form-input
            class="for"
            id="colorPicker"
            type="color"
            placeholder="Pick the color"
            aria-describedby="color-live-feedback"
            required
            v-model="form.color"
            :state="colorState"
          ></b-form-input>
          <b-form-invalid-feedback id="color-live-feedback">
            Please select a color
          </b-form-invalid-feedback>
        </b-form-group>
        <b-button class="mb-3" variant="outline-primary" @click="setTextColor"
          >Color it !</b-button
        >
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "FormColor",
  data() {
    return {
      form: {
        color: "",
        text: "",
      },
    };
  },
  computed: {
    textState() {
      return this.form.text.length > 3 ? true : false;
    },
    colorState() {
      return this.form.color.length > 0 ? true : false;
    },
  },
  methods: {
    setTextColor(event) {
      event.preventDefault();
      let input = document.getElementById('textField');
      input.style.color = this.form.color;
    },
  },
};
</script>
<style scoped lang="scss">
</style>
