"use strict";
const { ApolloServer, gql } = require('apollo-server');
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
        amount: 5,
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
        amount: 7,
    },
];
const resolvers = {
    Query: {
        books: () => books,
    }
};
const typeDefs = gql `
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    amount: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
const server = new ApolloServer({ typeDefs, resolvers });
server
    .listen()
    .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})
    .catch((error) => console.log("Server failed: ", error));
