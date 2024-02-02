import { AxiosError } from "axios";
import { useState } from "react";
import { service } from "~/services/apiServices";
import { UserDataType } from "~/shared/type";

export function useUpdate(id: string, data: UserDataType) {
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function updateUser() {
    setIsLoading(true);
    service
      .put(`http://localhost:3000/user/${id}`, data)
      .then((res) => {
        console.log(res.data.id);
        setUserData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        const err = error as AxiosError;
        setError(err.message);
        setIsLoading(false);
      });
  }

  return { userData, error, isLoading, updateUser };
}
