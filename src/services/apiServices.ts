import axios from "axios";

export const service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
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
// export async function createUser(data: UserDataType) {
//   await userApi.post("/", data);
// }

// export async function getAllUser() {
//   const data = await userApi.get("/").then((res) => res.data);
//   return data;
// }

// export async function getUser(id: string) {
//   const data = await userApi.get(`/${id}`);
//   return data;
// }

// userApi.interceptors.request.use(
//   function (config) {
//     return config;
//   },
//   function (err: Error) {
//     return Promise.reject(err);
//   },
// );

// userApi.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (err) {
//     return Promise.reject(err);
//   },
// );
