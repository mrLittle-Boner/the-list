import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  formValues: {
    input: "",
    id: "",
    main: false,
  },
  baseUrl: "https://recruting-test-api.herokuapp.com/api/v1/",
};

export const crud = {
  state,
  mutations,
  actions,
  getters,
};
