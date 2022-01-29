const { ApolloServer } = require('apollo-server');
const typeDefs = [query, mutation, types]
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }: any) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((error: string) => console.log("Server failed: ", error));
