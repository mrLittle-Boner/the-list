export default {
  // GET_SEARCHEBLE_DATA({ state, commit, rootState }) {
  //   const searchVal = state.searchString;
  //   const regFromVal = new RegExp(searchVal, "i");
  //   const searchebleItems = rootState.list.data.filter((el) => {
  //     return regFromVal.test(el.title);
  //   });
  //   commit("SET_SEARCHEBLE_DATA", { data: searchebleItems });
  // },
  CREATE_SEARCHEBLE_DATA({ commit, state, rootState }) {
    const searchVal = state.searchString;
    const regFromVal = new RegExp(searchVal, "i");
    const searchebleItems = rootState.list.data.filter((el) => {
      return regFromVal.test(el.title);
    });
    commit("SET_SEARCHEBLE_DATA", { data: searchebleItems });
  },
};
