import { createStore } from "vuex";

import { list } from "./list/index";
import { crud } from "./crud/index";
import { search } from "./search/index";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    list,
    crud,
    search,
  },
});
