import {
  CREATE_NODES,
  SEARCH_ITEMS,
  UPDATE_SEARCH_VALUE,
} from "./actions.type";
import { CHANGE_CASE_SENSITIVE, SET_SEARCH_VALUE } from "./mutations.type";

const initialState = {
  caseSensitive: true,
  searchValue: "",
};

const state = { ...initialState };

const actions = {
  [SEARCH_ITEMS]({ dispatch, state, rootState }) {
    const regFlags = state.caseSensitive ? "" : "i";
    const regExp = new RegExp(state.searchValue, regFlags);
    const searchebleData = rootState.list.data.filter((el) => {
      return regExp.test(el.title);
    });

    dispatch(CREATE_NODES, searchebleData);
  },
  [UPDATE_SEARCH_VALUE]({ dispatch, commit }, value) {
    commit(SET_SEARCH_VALUE, value);
    dispatch(SEARCH_ITEMS);
  },
};

const mutations = {
  [CHANGE_CASE_SENSITIVE](state) {
    state.caseSensitive = !state.caseSensitive;
  },
  [SET_SEARCH_VALUE](state, value) {
    state.searchValue = value;
  },
};

const getters = {
  caseSensitive(state) {
    return state.caseSensitive;
  },
  searchValue(state) {
    return state.searchValue;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
