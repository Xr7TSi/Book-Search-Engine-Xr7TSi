const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }


  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [String]
  }

  type Query {
    getSingleUser(id: ID!): User
    getAllUsers: [User]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!, savedBooks: [String]): User
    saveBook(bookId: String!, userId: ID!): Book
    deleteBook(userId: ID!, book: ID): Book
    
  }
`;

module.exports = typeDefs;
