import axios from "axios";

export const service = axios.create({
  baseURL: "http://localhost:3000/user",
  // timeout: 1000,
});

service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err: Error) {
    return Promise.reject(err);
  },
);

service.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err: Error) {
    return Promise.reject(err);
  },
);