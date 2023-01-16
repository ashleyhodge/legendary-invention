
// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    posts: [Post]
    isAdmin: Boolean
  }
  type Post {
    _id: ID
    title: String
    intro: String
    mainText: String
    subheading1: String
    subheading2: String
    conclusion: String
    createdAt: String
    username: String
    commentCount: Int
    postImage1: String
    postImage2: String
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, isAdmin: Boolean): Auth
    addPost(title: String!, mainText: String!, intro: String!, subheading1: String!, subheading2: String, conclusion: String, postImage1: String, postImage2: String): Post
    addComment(postId: ID!, commentText: String!): Post
  }
`

module.exports = typeDefs;