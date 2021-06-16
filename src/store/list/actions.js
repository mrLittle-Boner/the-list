import axios from "axios";

export default {
  GET_DATA({ commit, dispatch }) {
    axios
      .get("https://recruting-test-api.herokuapp.com/api/v1/brands")
      .then((resp) => commit("SET_DATA", { data: resp.data }))
      .then(() => dispatch("CREATE_TITLES"));
  },
  CREATE_TITLES({ state }) {
    // const searchebleData = rootState.search.searchebleData;
    const firstCharOfTitles = state.data.map((el) => el.title[0]);
    const uniqCharArray = Array.from(new Set(firstCharOfTitles));
    state.titles = uniqCharArray;
  },
};
