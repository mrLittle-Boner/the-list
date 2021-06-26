import { createStore } from "vuex";

import list from "./list";
import sort from "./sort";
import search from "./search";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    list,
    sort,
    search,
  },
});
