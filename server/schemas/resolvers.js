const { Book, User } = require('../models');

const resolvers = {
  Query: {
    getSingleUser: async (args) => {  
      return await User.findOne({args});
    },
    getAllUsers: async () => {
      return await User.find({});
    }
  },

  Mutation: {
    createUser: async (parent, { username, email, password, savedBooks }) => {
      return await User.create({ username, email, password, savedBooks });
    },

    saveBook: async (parent, { authors, description, bookId, image, link, title }) => {
      return await User.findOneAndUpdate({_id: userId}, { $addToSet: { savedBooks: {authors, description, bookId, image, link, title} } });
    },    
    
    deleteBook: async (parent, { ID }) => {
      return await User.findOneAndUpdate({_id: userId}, { $pull: { savedBooks: { ID } } });
    },
  },
};

module.exports = resolvers;
