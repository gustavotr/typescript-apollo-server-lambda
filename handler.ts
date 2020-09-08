import 'source-map-support/register';
import { ApolloServer } from 'apollo-server-lambda';
import schema from './src/schema';
import { createContext } from './src/context';

const server = new ApolloServer({ 
  schema,
  context: createContext(),
  playground: {
    endpoint: "/dev/graphql"
  }
});
 
export const graphqlHandler = server.createHandler({});

