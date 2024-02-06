import { useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { service } from "~/services/apiServices";
import { UserDataType } from "~/shared/type";

interface UsePostProps {
  url: string;
  userData: UserDataType;
}

export function usePost({ url, userData }: UsePostProps) {
  const [data, setData] = useState<UserDataType[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const call = function () {
    setIsLoading(true);
    service
      .post(url, {
        ...userData,
      })
      .then((res: AxiosResponse) => {
        setIsLoading(false);
        setData(res?.data);
      })
      .catch((err: AxiosError) => {
        setIsLoading(false);
        setError(err?.message);
      });
  };

  return { data, error, isLoading, call };
}
