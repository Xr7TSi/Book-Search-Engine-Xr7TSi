const {  } = require('../models');

const resolvers = {
  Query: {
    book: async () => {
      return Book.find({});
    },

  },

  Mutation: {
    addBook: async (parent, { title }) => {
      return Book.create({ title });
    },
   
    removeBook: async (parent, { ID }) => {
      return Book.findOneAndDelete({ _id: ID });
    },
   
  },
};

module.exports = resolvers;
