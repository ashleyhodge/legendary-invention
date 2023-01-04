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
      <h1 className="text-center font-bad-script font-black text-[36px] text-[#415C6B]">Articles</h1>
      {loading ? (
        <div>Loading...</div>
      ):(
        <div >
          <BlogPosts posts={posts} />
        </div>
      )}
      <div className="text-center font-bad-script mt-[50px]">
        <h2 className="text-[26px] mb-[30px] text-[#412117]">What else would you like to hear about?</h2>
        <p className="text-[20px] mx-auto px-12 text-[#415C6B]">While I love talking about my favorite topics, I’d love to write about things that interest my audience (you) as well. Leave a comment below any post or contact me directly!</p>
      </div>
      
    </main>
  )
}

export default Blog;