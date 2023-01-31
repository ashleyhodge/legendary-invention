import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SingleBlogPost from './pages/SingleBlogPost';
import Signup from './pages/Signup'
import Login from './pages/Login';
import PostForm from './pages/PostForm';
import Contact from './pages/Contact';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
                <Route path=':id' element={<SingleBlogPost />} />
                <Route path='' element={<Blog />} />
              </Route>
              <Route 
                path='/signup'
                element={<Signup />}
              />
              <Route 
                path='/login'
                element={<Login />}
              />
              <Route 
                path='/postform'
                element={<PostForm />}
              />
              <Route 
                path='/contact'
                element={<Contact />}
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
