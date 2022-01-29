const Fruit = require('../models/Fruit');

const fruitResolver = {
  Query: {
    fruits() {
      return Fruit.find();
    },
    fruit(_: any, { id }: any) {
      return Fruit.findById(id);
    },
  },
  Mutation: {
    createFruit(_: any, { fruit }: any) {
      const newFruit = new Fruit(fruit);
      return newFruit.save();
    },
    updateFruit(_: any, { id, fruit }: any) {
      return Fruit.findByIdAndUpdate(id, fruit, {
        new: true,
        useFindAndModify: false,
      })
    },
    deleteFruit(_: any, { id }: any) {
      return Fruit.findByIdAndRemove(id, {
        useFindAndModify: false,
      })
    }
  }
}

module.exports = fruitResolver;
