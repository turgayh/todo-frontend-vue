import Client from "./clients/AxiosClient";
const resource = "/v1/todo";

export default {
  get() {
    return Client.get(`${resource}/get-all`);
  },

  create(payload) {
    return Client.post(`${resource}/create`, payload);
  },

  delete(id) {
    return Client.delete(`${resource}/${id}`);
  },
};
