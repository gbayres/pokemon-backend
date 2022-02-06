import { gql } from 'apollo-server';

export const mutation = gql`
   type Mutation {
      createPokemon(pokemon: PokemonInput): Pokemon
      updatePokemon(id: String, pokemon: PokemonInput): Pokemon
      deletePokemon(id: String): Pokemon
   }
   input PokemonInput {
    pokedex_number: String,
    name: String,
    type1: String,
    type2: String,
    is_legendary: Boolean,
    generation: String,
    abilities: [String],
   }
`;
