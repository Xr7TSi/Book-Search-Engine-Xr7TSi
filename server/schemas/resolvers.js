const { Book, User } = require('../models');

const resolvers = {
  Query: {
  
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    getAllUsers: async () => {
      return await User.find({});
    }
  },

  Mutation: {
    createUser: async (parent, { username, email, password, savedBooks }) => {
      return await User.create({ username, email, password, savedBooks });
    },

    saveBook: async (parent, { _Id, authors, description, bookId, image, link, title }) => {
      return await User.findOneAndUpdate({_id: _Id}, { $addToSet: { savedBooks: {authors, description, bookId, image, link, title} } });
    },    
    
    deleteBook: async (parent, { ID }) => {
      return await User.findOneAndDelete({_id: ID});
    },
  },
};

module.exports = resolvers;
