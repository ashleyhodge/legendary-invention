const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/legendary-invention', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
const connection = mongoose.connection;
connection.once("open", () =>
  console.log("connected to database")
);

module.exports = mongoose.connection;