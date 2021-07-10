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
    
  }

  type Mutation {
    addBook(title: String!): bookSchema
    removeBook(bookId: ID!): bookSchema
  }
`;

module.exports = typeDefs;
