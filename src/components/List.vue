<template>
  <ul class="list" v-if="items.length > 0">
    <li class="list__title">
      {{ title }}
      {{ items.length }}
      <button class="list__button" @click="toggleList">
        {{ buttonView }}
      </button>
    </li>
    <ListItem v-for="item in renderedList" :key="item._id" :item="item" />
    <li v-if="dots">...</li>
  </ul>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  name: "AppList",
  components: {
    ListItem,
  },
  props: {
    items: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      isShortView: true,
    };
  },
  methods: {
    toggleList() {
      this.isShortView = !this.isShortView;
    },
  },
  computed: {
    renderedList() {
      const mainItems = this.items.filter((el) => el.main);

      if (mainItems.length > 0 && this.isShortView) {
        return mainItems.slice(0, 5);
      }
      if (this.isShortView) {
        return this.items.slice(0, 5);
      }
      return this.items;
    },
    buttonView() {
      return this.isShortView ? ">>" : "<<";
    },
    dots() {
      return this.isShortView && this.items.length !== this.renderedList.length;
    },
  },
};
</script>

<style>
.list {
  padding: 10px 2px;
  max-width: fit-content;
}
.list__title {
  font-weight: 500;
  font-size: 22px;
}
.list__button {
  background-color: transparent;
  border: none;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
}
</style>
