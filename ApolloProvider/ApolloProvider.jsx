"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { usePathname } from "next/navigation";
import InvoiceState from "../Context/Invoice/InvoiceState.js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme.js";
//https://cmr-montero-server-dev-mnfn.4.us-1.fl0.io/
//http://localhost:8080
//https://api.lahabanerashop.com
const httpLink = createHttpLink({
  uri: "https://cmr-montero-server-dev-mnfn.4.us-1.fl0.io/",
});
/*const stripePromise = loadStripe(
  "pk_test_51OWKRvGAdIRsEnMls9WNLCUaEIonKjEOHRhDuRxHNRwWipmgdbTMDH1FMroFbQyCV4QiDT2fJiUg22r2iD5HAoSb00n2vUM0hc"
);*/
export function ApolloClientProvider({ children }) {
  const loggingLink = new ApolloLink((operation, forward) => {
    //console.log("Peticion que va a ser enviada al servidor:", operation);
    return forward(operation);
  });
  const authLink = setContext((_, { headers }) => {
    // Leer el LocalStorage almacenado
    const token = localStorage.getItem("token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const apolloClient = new ApolloClient({
    connectToDevTools: true,
    link: ApolloLink.from([loggingLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ChakraProvider theme={theme}>
      <InvoiceState>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </InvoiceState>
    </ChakraProvider>
  );
}
