import { gql } from 'apollo-server';

export const types = gql`
  type Pokemon {
    pokedex_number: String,
    name: String,
    type1: String,
    type2: String,
    is_legendary: Boolean,
    generation: String,
    abilities: [String],
  }
`;

export interface PokemonInterface {
  pokedex_number: String,
    name: String,
    type1: String,
    type2: String,
    is_legendary: Boolean,
    generation: String,
    abilities: [String],
}
