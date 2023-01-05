import Masonry from 'react-masonry-css';

// All blog posts
const BlogPosts = ({ posts }) => {
  if(!posts.length) {
    return (
      <h3>No posts yet!</h3>
    )
  }
  
  posts = posts.map(function(post) {
    return <div key={post._id} >
      <img alt='post' className='sm:rounded pt-[30px] sm:pt-0' src={require(`../../assets/images/${post.postImage}`)}/>
    </div>
  })

  return (
    <div>
      {/* Image sizes: 500px x 500px, 500px x 400px, 500px x 300px */}
      <Masonry breakpointCols={4}
      className="hidden sm:flex sm:my-masonry-grid sm:p-[60px]"
      columnClassName="my-masonry-grid_column">
        {posts}
      </Masonry>
      <div className='flex flex-col items-center mt-5 pt-5 sm:hidden'>
        {posts}
      </div>
    </div>

  )
}

export default BlogPosts;