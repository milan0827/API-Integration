import { useState } from "react";
import { AxiosError } from "axios";
import { UserDataType } from "~/shared/type";
import { service } from "~/services/apiServices";
export function useDelete(
  url: string,
  data: UserDataType,

  setUserData: (data: UserDataType[]) => void,
  userList: UserDataType[],
) {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function deleteUser() {
    setIsLoading(true);
    try {
      console.log(url, data.id, "url-path");
      await service.delete(`${url}${data.id}`).then((data) => {
        setUserData(userList.filter((datas) => data.data.id !== datas.id));
      });
      setIsLoading(false);
    } catch (error) {
      const err = error as AxiosError;
      setError(err.message);
      setIsLoading(false);
    }
  }

  return { error, isLoading, deleteUser };
}
