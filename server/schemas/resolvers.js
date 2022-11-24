const User = require('../models/User');
const Post = require('../models/Post');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    // find all posts / find all posts made by a user
    posts: async (parent, { username }) => {
      const params = username? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    // find a single post
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
    // find all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('posts')
    },
    // find a single user
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('post')
    }
  },
  Mutation: {
    // Create a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    // log in existing user with authentication
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPass = await user.isCorrectPassword(password);

      if(!correctPass) {
        throw new AuthenticationError('Incorrect credentials')
      }
      return user;
    }
  }
};

module.exports = resolvers;