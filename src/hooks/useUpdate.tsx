import { AxiosError } from "axios";
import { useState } from "react";
import { service } from "../services/apiServices";
import { UserDataType } from "../shared/type";

export function useUpdate(id: string, data: UserDataType) {
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchSingleUser() {
    setIsLoading(true);
    service
      .patch(`http://localhost:3000/user-data/${id}`, { ...data })
      .then((res) => console.log(res))
      .catch((error) => {
        const err = error as AxiosError;
        setError(err.message);
      });
    setIsLoading(false);
  }

  return { userData, error, isLoading, fetchSingleUser };
}
