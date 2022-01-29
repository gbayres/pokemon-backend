const types = gql`
  type Pokemon {
    pokedex_number: Int!
    name: String
    is_legendary: Boolean
    type1: String
    type2: String
    abilities: String[]
    generation: Int
  }
`
module.exports = types;
