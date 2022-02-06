const mongoose = require("mongoose");

const PokemonSchema = mongoose.Schema({
  pokedex_number: Number,
  name: String,
  type1: String,
  type2: String,
  is_legendary: Boolean,
  generation: Number,
  abilities: [String],
});

export default mongoose.model("Pokemon", PokemonSchema);
