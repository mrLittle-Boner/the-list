<template>
  <li class="list__item">
    <span class="list__item-text">
      - {{ item.title }} { main: {{ item.main }} }
    </span>
    <div class="list__item-buttons">
      <button class="list__item-delete" @click="deleteItem(item._id)">
        <i class="far fa-trash-alt"></i>
      </button>
      <button class="list__item-change" @click="openEditor()">
        <i class="far fa-edit"></i>
      </button>
    </div>
  </li>

  <li class="list__item" v-if="editable">
    <form class="edit-form" @submit.prevent="updateItem()">
      <label class="edit-form__label">
        Title:
        <input class="edit-form__title" v-model="inputTitle" type="text" />
      </label>

      <label class="edit-form__label">
        Main:
        <input
          class="edit-form__checkbox"
          v-model="inputMain"
          type="checkbox"
        />
      </label>
      <button class="edit-form__button">Update</button>
    </form>
  </li>
</template>

<script>
import { DELETE_ITEM, UPDATE_ITEM } from "../store/actions.type";
export default {
  name: "ListItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editable: false,
      inputTitle: "",
      inputMain: false,
    };
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch(DELETE_ITEM, id);
    },
    updateItem() {
      let data = {
        id: this.item._id,
        title: this.inputTitle,
        isMain: this.inputMain,
      };
      this.$store.dispatch(UPDATE_ITEM, data);
      this.editable = false;
    },
    openEditor() {
      this.editable = !this.editable;
      this.inputTitle = this.item.title;
      this.inputMain = this.item.main;
    },
  },
};
</script>

<style>
.list__item {
  display: flex;
  margin-bottom: 5px;
}
.list__item-buttons {
  margin-left: auto;
}
.list__item-delete {
  border: none;
  color: red;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  margin-left: 5px;
}
.list__item-change {
  border: none;
  color: greenyellow;
  cursor: pointer;
  margin-left: 5px;
  background-color: transparent;
  font-size: 20px;
}
.edit-form {
  display: flex;
  padding: 5px;
  border: 1px solid;
  flex-direction: column;
  gap: 5px;
}
.edit-form__label {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
