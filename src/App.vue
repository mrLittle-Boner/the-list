<template>
  <main class="main">
    <button @click="isSorted">SORT?</button>
    <AppForm />
    <AppSearch />
    <AppSort />
    <AppList
      v-for="node in nodes"
      :key="node.name.charCodeAt()"
      :title="node.name"
      :items="node.items"
    />
  </main>
  <AppLoader />
</template>

<script>
import { FETCH_ITEMS, SORT_NODE_ITEMS } from "./store/actions.type";
import { mapGetters } from "vuex";
import AppList from "./components/List.vue";
import AppForm from "./components/AddForm.vue";
import AppLoader from "./components/Loader.vue";
import AppSearch from "./components/Search.vue";
import AppSort from "./components/Sort.vue";

export default {
  name: "App",
  components: {
    AppSearch,
    AppList,
    AppForm,
    AppLoader,
    AppSort,
  },
  methods: {
    isSorted() {
      console.log(this.$store.dispatch(SORT_NODE_ITEMS));
    },
  },
  computed: {
    ...mapGetters(["nodes"]),
  },
  created() {
    this.$store.dispatch(FETCH_ITEMS);
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #009b9b63;
  padding: 9px;
  min-height: 100vh;
}
.main {
  display: flex;
  flex-direction: column;
}
</style>
