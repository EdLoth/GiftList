import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4011/graphql/v1', // Substitua pela URL da sua API
  cache: new InMemoryCache(),
});

export default client;