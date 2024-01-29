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

export async function geAlltUser() {
  const data = await userApi.get("/");
  return data;
}

export async function getUser(id: string) {
  const data = await userApi.get(`/${id}`);
  return data;
}
