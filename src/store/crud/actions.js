import axios from "axios";

export default {
  GET_ITEM_BY_ID({ commit, state }, id) {
    axios
      .get(state.baseUrl + "brand/" + id)
      .then((resp) => commit("SET_FORM_VALUES", { item: resp.data }));
  },
  CREATE_ITEM({ state }) {
    axios.post(state.baseUrl + "brands", {
      title: state.formValues.input,
      main: state.formValues.main,
    });
  },
  DELETE_ITEM({ state }) {
    axios.delete(state.baseUrl + "brand/" + state.formValues.id);
  },
  UPDATE_ITEM({ state }) {
    axios.put(state.baseUrl + "brand/" + state.formValues.id, {
      title: state.formValues.input,
      main: state.formValues.main,
    });
  },
};
