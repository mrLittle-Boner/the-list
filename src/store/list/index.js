import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  data: [],
  titles: [],
  sortType: "asc",
};

export const list = {
  state,
  mutations,
  actions,
  getters,
};
