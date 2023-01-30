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
      <Link key={post._id}  to={`/blog/${post._id}`}>
        <div>
          <img alt='post' className='mt-[30px] rounded-md drop-shadow hover:opacity-[70%]' src={post.postImages}/>
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