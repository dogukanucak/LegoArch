import { QuoteService } from "@red/BusinessServices/QuoteService/quote.service";
import { HTTP_TOKENS } from "@red/IoC/Tokens/Http.token";
import DI_CONTAINER from "@red/IoC/di.container";
import { IHttpClient } from "@red/Contracts/Http";
import React from "react";
import { QUOTE_ENDPOINT } from "@red/ApplicationConstants/Integration/server.config";
import { HttpMethod } from "@red/Contracts/Http/enums/HttpMethod.enum";
import useFetch from "@red/Hooks/useFetch.hook";
import { Quote } from "@red/Types/Quote/quote.type";

const App: React.FC = () => {
  const { data, loading, error } = useFetch<any, Quote>({ method: HttpMethod.GET, url: QUOTE_ENDPOINT });

  const getQuotes = async () => {
    // const httpClient = DI_CONTAINER.get<IHttpClient>(HTTP_TOKENS.HttpClient);
    // const quoteService = new QuoteService(httpClient);
    // setQuotes((await quoteService.getQuote()).quote);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>Welcome To Quote App</h1>
      <p>{data.quote}</p>
      <button onClick={getQuotes}>Get Quotes</button>
    </>
  );
};

export default App;
