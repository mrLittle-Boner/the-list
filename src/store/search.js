import { CREATE_NODES, SEARCH_ITEMS } from "./actions.type";
import { CHANGE_CASE_SENSITIVE } from "./mutations.type";

const initialState = {
  caseSensitive: true,
};

const state = { ...initialState };

const actions = {
  [SEARCH_ITEMS]({ dispatch, state, rootState }, searchValue) {
    const regFlags = state.caseSensitive ? "" : "i";
    const regExp = new RegExp(searchValue, regFlags);
    const searchebleData = rootState.list.data.filter((el) => {
      return regExp.test(el.title);
    });

    dispatch(CREATE_NODES, searchebleData);
  },
};

const mutations = {
  [CHANGE_CASE_SENSITIVE](state) {
    state.caseSensitive = !state.caseSensitive;
  },
};

const getters = {
  caseSensitive(state) {
    return state.caseSensitive;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
