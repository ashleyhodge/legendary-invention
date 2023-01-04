import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import BlogPosts from "../components/BlogPosts";


const Blog = () => {
  // useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);

  const posts = data?.posts || [];
  console.log(posts);

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ):(
        <div >
          <BlogPosts posts={posts} />
        </div>
      )}
    </main>
  )
}

export default Blog;