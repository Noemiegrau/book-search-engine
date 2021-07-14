// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Auth {
    token: ID!
    user: User
  }
  
type Book {
    bookId: ID
    authors: []
    description: String
    title: String
    image: ??????????????
    link: [Reaction]
  }

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: [Author]!, description: String!, title: String!, bookId: ID!, image: img!, ): User
    removeBook(bookId: ID!): User
  }

`;

// export the typeDefs
module.exports = typeDefs;