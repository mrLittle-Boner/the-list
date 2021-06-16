<template>
  <form @submit.prevent="" class="crud-form">
    <label>
      Title:
      <input
        type="text"
        :value="formValues.input"
        @input="setInputValue({ input: $event.target.value })"
        placeholder="No choosen item"
      />
    </label>

    <label>
      ID:
      <input
        type="text"
        :value="formValues.id"
        placeholder="No choosen item"
        disabled
      />
    </label>

    <label>
      Main propperty:
      <input
        type="checkbox"
        :checked="formValues.main"
        @change="setMainValue({ main: $event.target.checked })"
      />
    </label>

    <div class="control-buttons">
      <button @click.prevent="addItem">Add</button>
      <button @click.prevent="updateItem">Update</button>
      <button @click.prevent="deleteItem">Delete</button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Form",
  computed: {
    ...mapGetters({
      formValues: "GET_FORM_VALUES",
    }),
  },
  methods: {
    ...mapActions({
      addItem: "CREATE_ITEM",
      updateItem: "UPDATE_ITEM",
      deleteItem: "DELETE_ITEM",
    }),
    ...mapMutations({
      setInputValue: "SET_FORM_INPUT_VALUE",
      setMainValue: "SET_FORM_MAIN_VALUE",
    }),
  },
};
</script>

<style scoped lang="css">
.crud-form {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
input {
  padding: 2px 4px;
  margin-bottom: 10px;
  margin-left: auto;
}
.control-buttons button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
label {
  display: flex;
  gap: 5px;
}
</style>
