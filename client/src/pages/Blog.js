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
      <div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ):(
            <BlogPosts posts={posts} />
          )}
        </div>
      </div>
    </main>
  )
}

export default Blog;