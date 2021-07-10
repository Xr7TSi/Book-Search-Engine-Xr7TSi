const { Book, User } = require('../models');

const resolvers = {
  Query: {
    book: async () => {
      return Book.find({});
    },
    user: async () => {
      return User.find({});
    }

  },

  Mutation: {
    addBook: async (parent, { title }) => {
      return Book.create({ title });
    },
   
    removeBook: async (parent, { ID }) => {
      return Book.findOneAndDelete({ _id: ID });
    },

    addUser: async (parent, { username, email, password, savedBooks }) => {
      return User.create({ username, email, password, savedBooks });
    },
   
  },
};

module.exports = resolvers;
