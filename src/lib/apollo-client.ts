import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const httpLink = createHttpLink({
  uri: "/api/graphql",
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:3000/api/graphql",
  })
);

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        switch (err?.extensions?.code) {
          case "UNAUTHENTICATED":
            // Implement token refresh logic here
            return forward(operation);
        }
      }
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  from([errorLink, authLink, httpLink])
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
