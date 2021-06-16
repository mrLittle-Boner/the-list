import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  searchString: "",
  caseSensitive: false,
  searchebleData: [],
};

export const search = {
  state,
  actions,
  mutations,
  getters,
};
