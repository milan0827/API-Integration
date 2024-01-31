// import axios, { AxiosResponse } from "axios";
// import { useEffect, useState } from "react";
// import { UserDataType } from "../shared/type";
// // import { createUser, userApi } from "../services/apiServices";

// export function useApi(url: string, method: string, options?: UserDataType) {
//   const [data, setData] = useState<UserDataType>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response: AxiosResponse = await axios[method](url, options);
//       setData(response.data);
//     } catch (err) {
//       setError(error);
//     }
//     setIsLoading(false);
//   };

//   // useEffect(() => {
//   //   userApi.get("urlk");

//   //   userApi.post("url", {});
//   // }, []);

//   return { data, isLoading, error };
// }
