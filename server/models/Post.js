const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');
const commentSchema = require('./Comment');

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 30
    },
    postText: {
      type: String,
      required: true,
      minlength: 10,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  }
);

// show the amount of comments on a post
postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
