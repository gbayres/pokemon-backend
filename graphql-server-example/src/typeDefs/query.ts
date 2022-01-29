const query = gql`
  type Query {
    fruits: [Fruit]
    fuit(id: ID!): Fruit
  }
`;

module.exports = query;
