import { useEffect, useState } from "react";
import { service } from "../services/apiServices";
import { AxiosError, AxiosResponse } from "axios";

export default function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData() {
    setIsLoading(true);

    try {
      const response: AxiosResponse = await service.get(url);
      setData(response.data);
    } catch (error) {
      const err = error as AxiosError;
      setError(err.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading, error };
}
