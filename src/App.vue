<template>
  <main>
    <div>
      <Search />
      <List
        v-for="tittle in titles"
        :key="tittle.charCodeAt()"
        :name="tittle"
        :namedItems="listItems(tittle)"
      />
    </div>
    <Form />
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import List from "./components/List/List.vue";
import Form from "./components/Crud/Form.vue";
import Search from "./components/Search/Search.vue";

export default {
  name: "App",
  components: {
    List,
    Form,
    Search,
  },
  methods: {
    ...mapActions(["GET_DATA", "CREATE_SEARCHEBLE_DATA", "CREATE_TITLES"]),
  },
  computed: {
    ...mapGetters({
      titles: "TITLES_ARRAY",
      listItems: "GET_ITEMS_BY_TITLE",
      fromList: "fromListCompSearchValue",
    }),
  },
  created() {
    this.GET_DATA();
  },
  mounted() {
    this.CREATE_SEARCHEBLE_DATA();
    this.CREATE_TITLES();
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
main {
  display: flex;
}
</style>
