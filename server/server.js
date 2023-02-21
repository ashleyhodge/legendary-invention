const path = require('path');
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require("cors");
const { authMiddleware } = require('./utils/auth')
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const { cloudinary } = require('./utils/cloudinary');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: __dirname+'/.env'});
}

const db = require('./config/connection');
// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');


const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const app = express();
app.use(cors());

app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json({ limit: '50mb' }));


// **** third-party API calls ***
// app.get('/api/images', async (req, res) => {
//   try {
//     const {resources} = await cloudinary.search
//   .expression('folder:dev_setups/post_1')
//   .sort_by('created_at', 'desc')
//   .max_results(5)
//   .execute();
//   const imageInfo = resources.map((file) => file);
//   res.send(imageInfo);
//   } catch (error) {
//     console.log(error)
//   }
// })
// app.post('/api/upload', async (req, res) => {
//   try {
//     const fileStr = req.body.data;
//     const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
//       upload_preset: 'r0zimzi6'
//     });
//     console.log(uploadedResponse);
//     res.json({msg: 'YAYAYA'})
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({err: 'Something went wrong'})
//   }
// })
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.EMAIL,
//     pass: process.env.WORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   },
// });
// transporter.verify((err, success) => {
//   err
//     ? console.log(err)
//     : console.log(`=== Server is ready to take messages: ${success} ===`);
// });
// app.post("/send", function (req, res) {
//   let mailOptions = {
//     from: `${req.body.email}`,
//     to: process.env.EMAIL,
//     subject: `Message from: ${req.body.name}`,
//     text: `${req.body.message}`,
//   };
//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       res.json({
//         status: "fail",
//       });
//     } else {
//       console.log("== Message Sent ==");
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });
// *** End third-party API calls ***


// create a new instanceof an Apollo server with Graphql schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  // Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client', 'build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.js'));
});
  
  db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
  };


// call async function the start server
startApolloServer(typeDefs, resolvers);

