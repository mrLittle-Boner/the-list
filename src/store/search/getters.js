export default {
  GET_SEARCH_VALUE(state) {
    return state.searchString;
  },
  GET_SEARCH_SENSITIVE(state) {
    return state.caseSensitive;
  },
  GET_SEARCHEBLE_DATA(state) {
    return state.searchebleData;
  },
};
