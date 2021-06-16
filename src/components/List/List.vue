<template>
  <div class="title">
    <Title :name="name" :length="namedItems.length" />
    <OpenList :isShort="isShortView" @openList="toggleList()" />
  </div>
  <ul>
    <Item
      v-for="item in renderedList"
      :key="item._id"
      :id="item._id"
      :title="item.title"
      :isMain="item.main"
    />
  </ul>
</template>

<script>
import Title from "./Title.vue";
import Item from "./Item.vue";
import OpenList from "./OpenList.vue";
export default {
  name: "List",
  components: {
    Title,
    Item,
    OpenList,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    namedItems: {
      type: Array,
      required: true,
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
      const mainItems = this.namedItems.filter((el) => el.main);
      if (mainItems.length > 0 && this.isShortView) {
        return mainItems.slice(0, 5);
      }
      if (this.isShortView) {
        return this.namedItems.slice(0, 5);
      }
      return this.namedItems;
    },
  },
};
</script>

<style lang="css" scoped>
.title {
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
ul {
  margin-bottom: 10px;
}
li {
  padding: 3px;
  padding-left: 10px;
}
</style>
