import {
  SORT_NODE_ITEMS,
  CREATE_NODES,
  CHANGE_SORT_DIRECTION,
} from "./actions.type";
import { SET_SORT_DIRECTION } from "./mutations.type";

const initialState = {
  sortType: "asc",
};

const state = { ...initialState };

const actions = {
  [SORT_NODE_ITEMS]({ rootState, state, dispatch }) {
    const items = [];
    rootState.list.nodes.map((node) => items.push(...node.items));

    const maped = items.map((el, i) => {
      return { index: i, value: el.title.toLowerCase() };
    });

    if (state.sortType === "asc") {
      maped.sort(function (a, b) {
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        return 0;
      });
    }
    if (state.sortType === "desc") {
      maped.sort(function (a, b) {
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
        return 0;
      });
    }

    const sortedItems = maped.map((el) => items[el.index]);

    dispatch(CREATE_NODES, sortedItems);
  },
  [CHANGE_SORT_DIRECTION]({ commit, dispatch }, direction) {
    commit(SET_SORT_DIRECTION, direction);
    dispatch(SORT_NODE_ITEMS);
  },
};

const mutations = {
  [SET_SORT_DIRECTION](state, payload) {
    state.sortType = payload;
  },
};

export default {
  state,
  mutations,
  actions,
};
