
import Masonry from 'react-masonry-css';

const BlogPosts = ({ posts }) => {
  if(!posts.length) {
    return (
      <h3>No posts yet!</h3>
    )
  }
  
  posts = posts.map(function(post) {
    return <div key={post._id} >
      <img alt='post' className='rounded-lg' src={require(`../../assets/images/${post.postImage}`)}/>
    </div>
  })

  return (
    // Image sizes: 500px x 500px, 500px x 400px, 500px x 300px
    <Masonry breakpointCols={4}
    className="my-masonry-grid p-[60px]"
    columnClassName="my-masonry-grid_column">
      {posts}
    </Masonry>
  )
}

export default BlogPosts;