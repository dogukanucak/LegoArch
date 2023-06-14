import { HttpRequestConfig, IHttpClient } from "@red/Contracts/Http";
import { HttpMethod } from "@red/Contracts/Http/enums/HttpMethod.enum";
import { ApiResponseBody } from "@red/Data/Response/generic.response";
import { HTTP_TOKENS } from "@red/IoC/Tokens/Http.token";
import DI_CONTAINER from "@red/IoC/di.container";
import { useEffect, useState } from "react";
const useFetch = <REQ, RES>(request: HttpRequestConfig<REQ>): { data: RES; loading: boolean; error: any } => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const httpClient = DI_CONTAINER.get<IHttpClient>(HTTP_TOKENS.HttpClient);

  useEffect(() => {
    httpClient
      .request<REQ, ApiResponseBody<RES>>(request)
      .then((response) => {
        console.log("Data", response);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log("Error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [request.url]);
  return { data, loading, error };
};
export default useFetch;
