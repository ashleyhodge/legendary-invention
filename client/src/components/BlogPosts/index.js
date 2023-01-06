import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom'

// All blog posts
const BlogPosts = ({ posts }) => {
  // if no posts, show this
  if(!posts.length) {
    return (
      <h3>No posts yet!</h3>
    )
  }
  // map through post data and render post image
  posts = posts.map(function(post) {
    return (
      // Link images to /blog/postTitle/id
      <Link to={`/blog/${post.postTitle}/${post._id}`}>
        <div key={post._id} >
          <img alt='post' className='sm:rounded pt-[30px] sm:pt-0' src={require(`../../assets/images/${post.postImage}`)}/>
        </div>
      </Link>
    )
  })

  return (
    // render post images
    <div>
      {/* Image sizes: 500px x 500px, 500px x 400px, 500px x 300px */}
      {/* Desktop */}
      <Masonry breakpointCols={4}
      className="hidden sm:flex sm:my-masonry-grid sm:p-[60px]"
      columnClassName="my-masonry-grid_column">
        {posts}
      </Masonry>
      {/* Mobile */}
      <div className='flex flex-col items-center mt-5 pt-5 sm:hidden'>
        {posts}
      </div>
    </div>
  )
}

export default BlogPosts;