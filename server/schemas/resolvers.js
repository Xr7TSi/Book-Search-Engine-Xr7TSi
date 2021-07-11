const { Book, User } = require('../models');

const resolvers = {
  Query: {
    book: async () => {
      return await Book.find({});
    },
    user: async () => {
      return await User.find({});
    },
    userById: async (parent, args) => {
      return await User.findById(args.id);
    }
  },

  Mutation: {
    addBook: async (parent, { title }) => {
      return await Book.create({ title });
    },
   
    removeBook: async (parent, { ID }) => {
      return await Book.findOneAndDelete({ _id: ID });
    },

    addUser: async (parent, { username, email, password, savedBooks }) => {
      return await User.create({ username, email, password, savedBooks });
    },
   
  },
};

module.exports = resolvers;
