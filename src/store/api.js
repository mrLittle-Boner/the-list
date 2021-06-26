import axios from "axios";

const API_URL = "https://recruting-test-api.herokuapp.com/api/v1/";

export const clientService = axios.create({
  baseURL: API_URL,
});

export const api = {
  getAllItems() {
    return clientService.get("/brands").catch((error) => {
      throw new Error(`MyApp ApiSevice ${error}`);
    });
  },

  getItemByID(url, id) {
    return clientService.get(`${url}/${id}`).catch((error) => {
      throw new Error(`MyApp ApiSevice ${error}`);
    });
  },

  createItem(config) {
    return clientService.post("/brands", config);
  },

  updateItem(id, data) {
    return clientService.put("brand/" + id, data);
  },

  deleteItem(id) {
    return clientService.delete("/brand/" + id).catch((error) => {
      throw new Error(`MyApp ApiSevice ${error}`);
    });
  },
};
