import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SingleBlogPost from './pages/SingleBlogPost';
import Signup from './pages/Signup'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <main>
            <Navbar />
            <Routes>
              <Route 
                path='/'
                element={<Home />}
              />
              <Route path='/blog'> 
                <Route path=':postTitle/:id' element={<SingleBlogPost />} />
                <Route path='' element={<Blog />} />
              </Route>
              <Route 
                path='/signup'
                element={<Signup />}
              />
            </Routes>
            <Footer />
          </main>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
