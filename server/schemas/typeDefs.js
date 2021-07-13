const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
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
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getAllUsers: [User]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, savedBooks: [String]): User
    saveBook(_id: ID!, authors: String, description: String, bookId: String, image: String, link: String, title: String): Book
    removeBook(bookId: String): User
    
  }
`;

module.exports = typeDefs;
  