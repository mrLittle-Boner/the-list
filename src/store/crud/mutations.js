export default {
  SET_FORM_VALUES(state, payload) {
    state.formValues.input = payload.item.title;
    state.formValues.id = payload.item._id;
    state.formValues.main = payload.item.main;
  },
  SET_FORM_INPUT_VALUE(state, payload) {
    state.formValues.input = payload.input;
  },
  SET_FORM_ID_VALUE(state, payload) {
    state.formValues.id = payload.id;
  },
  SET_FORM_MAIN_VALUE(state, payload) {
    state.formValues.main = payload.main;
  },
};
