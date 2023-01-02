

const BlogPosts = ({ posts, title }) => {
  if(!posts.length) {
    return (
      <h3>No posts yet!</h3>
    )
  }

  return (
    <div>
      {posts &&
        posts.map(post => (
          <div key={post._id}>
              <h1 className="bg-blue-100">
                {post.postTitle}
              </h1>
          </div>
        ))}
    </div>
  )
}

export default BlogPosts;