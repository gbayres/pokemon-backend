require("dotenv").config();
import { connect } from 'mongoose';
import { ApolloServer } from 'apollo-server';
import pokemonResolver from './resolvers/pokemonResolver';
import { typeDefs } from './typeDefs';
// Database
const db = {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   pass: process.env.DB_PASS,
   name: process.env.DB_NAME,
};
const dbUri = `mongodb+srv://${db.user}:${db.pass}@${db.host}/${db.name}?retryWrites=true&w=majority`;

connect(dbUri)
   .then(() => console.log("Database connected"))
   .catch((error: string) => console.log("Databased failed: ", error));
// GraphQL
const server = new ApolloServer({ typeDefs, resolvers: [pokemonResolver] });
server
   .listen()
   .then(({ url }: { url: string }) => console.log(`Server ready at ${url}`))
   .catch((error: string) => console.log("Server failed: ", error));
