<template>
  <form class="app-form" @submit.prevent="submitForm">
    <input
      class="app-form__input"
      v-model="addInputValue"
      type="text"
      placeholder="Some item title"
      required
    />
    <button class="app-form__button">Add Item</button>
  </form>
</template>

<script>
import { ADD_ITEM } from "../store/actions.type";
export default {
  name: "AppForm",
  data() {
    return {
      addInputValue: "",
    };
  },
  methods: {
    submitForm() {
      if (this.addInputValue.trim()) {
        this.$store.dispatch(ADD_ITEM, this.addInputValue.trim());
        this.addInputValue = "";
      }
    },
  },
};
</script>

<style>
.app-form {
  display: flex;
}
.app-form__input {
  border: none;
  border-radius: 3px 0px 0px 3px;
  padding: 0 10px;
  flex-grow: 1;
}
.app-form__button {
  border: none;
  background-color: #29db30;
  color: whitesmoke;
  padding: 8px;
  border-radius: 0px 3px 3px 0px;
  cursor: pointer;
}
</style>
