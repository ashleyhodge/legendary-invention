const path = require('path');
const express = require('express');
const { authMiddleware } = require('./utils/auth')
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const { cloudinary } = require('./utils/cloudinary');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const app = express();

app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json({ limit: '50mb' }));

app.get('/api/images', async (req, res) => {
  try {
    const {resources} = await cloudinary.search
  .expression('folder:dev_setups/post_1')
  .sort_by('created_at', 'desc')
  .max_results(7)
  .execute();
  const imageInfo = resources.map((file) => file);
  res.send(imageInfo);
  } catch (error) {
    console.log(error)
  }
})

app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'r0zimzi6'
    });
    console.log(uploadedResponse);
    res.json({msg: 'YAYAYA'})
  } catch (error) {
    console.log(error)
    res.status(500).json({err: 'Something went wrong'})
  }
})

// create a new instanceof an Apollo server with Graphql schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  // Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
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

