import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import Comments from '../components/Comments';

const SingleBlogPost = () => {

  const { postTitle: title } = useParams();
  const { id: postId} = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId, postTitle: title }
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>
        <h1 className='text-center text-[36px] font-bad-script font-black text-[#415C6B] mt-[50px]'>
          {post.postTitle}
        </h1>
        <p className='text-center opacity-[80%] text-[#415C6B]'>
          Published on {post.createdAt} by {post.username}
        </p>
      </div>
      <div className='m-[50px] flex '>
        {/* Post introduction */}
        <div className='w-3/4'>
          <p>
            {post.postText}
          </p>
        </div>
        <div className='ml-[50px] w-1/2 '>
          <div className='border-[3px] border-[#A3C0CD]'>
            <h2 className='p-[30px] text-center font-bad-script font-black'>
              My Recommendations
            </h2>
            {/* recommendation links */}
          </div>
        </div>
        <div>
          {/* post image 1 */}
        </div>
        <div>
          {/* post main text 1 */}
        </div>
        <div>
          {/* post image 2 */}
        </div>
        <div>
          {/* post main text 2 */}
        </div>
      </div>
      {/* Comment Section */}
      <div>
        <div className='text-center font-black font-bad-script'>
          <h1 className='text-center font-black font-bad-script text-[30px] text-[#412117]'>
          Comments
          </h1>
          <p className='text-[#8E4A45] mx-[30%]'>
            Let me know what you think! Please keep all comments respectful!
          </p>
        </div>
        {/* Comment Form & list */}
        <Comments comments={post.comments} />
      </div>
    </div>
  )
}
export default SingleBlogPost;