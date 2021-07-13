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
    addUser: async (parent, { username, email, bookCount, savedBooks }) => {
      return await User.create({ username, email, bookCount, savedBooks });
    },

    saveBook: async (parent, { _Id, authors, description, bookId, image, link, title }) => {
      return await User.findOneAndUpdate({_id: _Id}, { $addToSet: { savedBooks: {authors, description, bookId, image, link, title} } });
    },    
    
    removeBook: async (parent, { ID }) => {
      return await User.findOneAndDelete({_id: ID});
    },
  },
};

module.exports = resolvers;
