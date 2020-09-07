import 'source-map-support/register';
import { ApolloServer, gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  playground: {
    endpoint: "/dev/graphql"
  }
});
 
export const graphqlHandler = server.createHandler({});

