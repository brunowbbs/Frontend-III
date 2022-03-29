import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  // headers: {
  //   Authorization: "Bearer 1123019283019238",
  // },
});

export default api;
