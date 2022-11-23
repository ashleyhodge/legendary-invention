const User = require('../models/User');
const Post = require('../models/Post');

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
  }
};

module.exports = resolvers;