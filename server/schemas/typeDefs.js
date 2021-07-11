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

  type Query {
    book: [Book]!
    user: [User]!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [String]
  }

  type Mutation {
    addBook(title: String!): Book
    removeBook(bookId: ID!): Book
    addUser(username: String!): User
  }
`;

module.exports = typeDefs;
