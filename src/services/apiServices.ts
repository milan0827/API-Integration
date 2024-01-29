import axios from "axios";
import { UserDataType } from "../shared/type";

const BASE_URL = "http://localhost:3000/user";

export async function createUser(data: UserDataType) {
  try {
    await axios.post(BASE_URL, { ...data });
  } catch (err) {
    console.error(err);
  }
}

export async function geAlltUser() {
  try {
    const data = await axios.get(`${BASE_URL}`);
    console.log(data.data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUser(id: string) {
  try {
    const data = await axios.get(`${BASE_URL}/${id}}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}
