import { Schema, model } from 'mongoose';
import { PokemonInterface } from '../typeDefs/types';

const PokemonSchema = new Schema<PokemonInterface>({
  pokedex_number: Number,
  name: String,
  type1: String,
  type2: String,
  is_legendary: Boolean,
  generation: Number,
  abilities: [String],
});

export default model("Pokemon", PokemonSchema);
