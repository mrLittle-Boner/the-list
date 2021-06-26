import { api } from "./api";
import {
  FETCH_ITEMS,
  CREATE_TITLES,
  CREATE_NODES,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  SORT_NODE_ITEMS,
} from "./actions.type";
import {
  SET_DATA,
  SET_LOADING_STATUS,
  SET_NODES,
  SET_TITLES,
} from "./mutations.type";

const initialState = {
  data: [],
  titles: [],
  nodes: [],
  loadingStatus: false,
};

const state = { ...initialState };

const actions = {
  async [FETCH_ITEMS]({ dispatch, commit, state }) {
    commit(SET_LOADING_STATUS);
    const resp = await api.getAllItems();
    commit(SET_DATA, { data: resp.data });
    dispatch(CREATE_TITLES);
    dispatch(CREATE_NODES, state.data);
    dispatch(SORT_NODE_ITEMS);
    commit(SET_LOADING_STATUS);
  },
  [CREATE_TITLES]({ commit, state }) {
    let titles = [];

    state.data.forEach((el) => {
      if (titles.indexOf(el.title[0]) === -1) {
        titles.push(el.title[0]);
      }
    });

    commit(SET_TITLES, { titles });
  },
  [CREATE_NODES]({ commit, state }, fromData) {
    let nodes = [];

    state.titles.forEach((title) => {
      let name = title;
      let items = fromData.filter((el) => el.title[0] === title);
      nodes.push({ name, items });
    });

    commit(SET_NODES, { nodes });
  },
  [ADD_ITEM]({ dispatch }, title) {
    api.createItem({ title, main: true }).then(() => dispatch(FETCH_ITEMS));
  },
  [DELETE_ITEM]({ dispatch }, id) {
    api.deleteItem(id).then(() => dispatch(FETCH_ITEMS));
  },
  [UPDATE_ITEM]({ dispatch }, params) {
    api
      .updateItem(params.id, { title: params.title, main: params.isMain })
      .then(() => dispatch(FETCH_ITEMS));
  },
};

const mutations = {
  [SET_DATA](state, payload) {
    state.data = payload.data;
  },
  [SET_NODES](state, payload) {
    state.nodes = payload.nodes;
  },
  [SET_TITLES](state, payload) {
    state.titles = payload.titles;
  },
  [SET_LOADING_STATUS](state) {
    state.loadingStatus = !state.loadingStatus;
  },
};

const getters = {
  fullData(state) {
    return state.data;
  },
  titles(state) {
    return state.titles;
  },
  nodes(state) {
    return state.nodes;
  },
  loadingStatus(state) {
    return state.loadingStatus;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
