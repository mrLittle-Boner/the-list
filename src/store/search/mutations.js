export default {
  SET_SEARCH_VALUE(state, payload) {
    state.searchString = payload.value;
  },
  TOGGLE_CASE_SENS(state) {
    state.caseSensitive = !state.caseSensitive;
  },
  SET_SEARCHEBLE_DATA(state, payload) {
    state.searchebleData = payload.data;
  },
};
