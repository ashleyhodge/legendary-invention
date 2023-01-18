const User = require('../models/User');
const Post = require('../models/Post');
const { signToken } = require('../utils/auth');
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
    // find info about logged in user
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select('-__v -password')
        .populate('posts')

        return userData;
      }
      throw new AuthenticationError('Not logged in!')
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
      const token = signToken(user);

      // return auth object including the token and any user data
      return { token, user };
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

      // return auth object including the token and any user data
      const token = signToken(user)
      return { user, token };
    },
    // create a new post ... how do you make this only available to admin??
    addPost: async (parent, args, context) => {
      if(context.user) {
        const post = await Post.create({ ...args, username: context.user.username });
        
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        return post;
      }

      throw new AuthenticationError('You are not logged in');
    },
    // add comment to blog post
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          { $push: { comments: { commentText, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedPost;
      }

      throw new AuthenticationError('You are not logged in');
    }
  }
};

module.exports = resolvers;