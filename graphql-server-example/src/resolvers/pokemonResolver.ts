import { PokemonInterface } from "../typeDefs/types";
import Pokemon from '../models/Pokemon';

const pokemonResolver = {
  Query: {
    async pokemons() {
      const list = await Pokemon.find();
      return list;
    },
    async pokemon(_: string, { id }: { id: string }) {
      return await Pokemon.findById(id);
    },
    async iChooseYou(_: any, { id }: { id: string }, { statement } : { statement: string }) {
      const chosen = await Pokemon.findById(id);
      if (chosen) {
        return chosen.name + statement;
      } return "MissingNo";
    },
  },
  Mutation: {
    async createPokemon(_: string, { pokemon }: { pokemon: PokemonInterface }) {
      const newPokemon = new Pokemon(pokemon);
      return await newPokemon.save();
    },
    async updatePokemon(_: string, { id, pokemon }: { id: string, pokemon: PokemonInterface }) {
      return await Pokemon.findByIdAndUpdate(id, pokemon, {
        new: true,
      });
    },
    async deletePokemon(_: string, { id }: { id: string }) {
      return await Pokemon.findByIdAndRemove(id);
    },
  },
  Pokemon: {
    async cebesta(parent: PokemonInterface) {
      return parent.name
    },
  },
};

export default pokemonResolver;
