import axios from "axios";
import { UserDataType } from "../shared/type";

const BASE_URL = "http://localhost:3000/user";

const userApi = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
});

export async function createUser(data: UserDataType) {
  await userApi.post("/", { ...data });
}

export async function getAllUser() {
  const data = await userApi.get("/").then((res) => res.data);
  return data;
}

export async function getUser(id: string) {
  const data = await userApi.get(`/${id}`);
  return data;
}

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
