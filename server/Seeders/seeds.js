const data = require('../utils/data');
const db = require('../config/connection');
const { User, Post } = require('../models');

db.once('open', async () => {
  try {
    await User.deleteMany();
    await User.insertMany(data.users);
    await Post.deleteMany();
    await Post.insertMany(data.posts);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});