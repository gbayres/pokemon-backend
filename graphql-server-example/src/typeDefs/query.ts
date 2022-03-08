import { gql } from 'apollo-server';

export const query = gql`

   input iChooseYouInput {
     id: ID!
   }

   type Query {
      pokemons: [Pokemon]
      pokemon(id: ID!): Pokemon
      iChooseYou(id: ID!): String
   }

   type Pokemon {
    pokedex_number: String,
    name: String,
    type1: String,
    type2: String,
    is_legendary: Boolean,
    generation: String,
    abilities: [String],
    cebesta: String,
   }
`;
