import Masonry from 'react-masonry-css';

const BlogPosts = ({ posts }) => {
  if(!posts.length) {
    return (
      <h3>No posts yet!</h3>
    )
  }
  
  posts = posts.map(function(post) {
    return <div key={post._id} >
      <img alt='post' src={`../src/assets/images/${post.postImage}.png`}/>
      {post.postTitle}
    </div>
  })

  return (
    <Masonry breakpointCols={4}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column">
      {posts}
    </Masonry>
  )
}

export default BlogPosts;