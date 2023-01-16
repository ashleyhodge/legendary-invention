const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 100
    },
    intro: {
      type: String,
      required: true,
    },
    subheading1: {
      type: String,
      required: true,
    },
    mainText: {
      type: String,
      required: true,
    },
    subheading2: {
      type: String,
    },
    conclusion: {
      type: String,
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
    postImage1: {
      type: String
    },
    postImage2: {
      type: String
    },
    comments: [commentSchema]
  },
  {
    toJson: {
      getters: true,
      virtuals: true
    }
  }
);

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
