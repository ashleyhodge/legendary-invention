import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentForm';
import ReactMarkdown from 'react-markdown';
import auth from '../utils/auth';

const SingleBlogPost = () => {

  const { title } = useParams();
  const { id: postId} = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId, title: title }
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>
        <h1 className='text-center text-[36px] font-bad-script font-black text-[#415C6B] mt-[50px]'>
          {post.title}
        </h1>
        <p className='text-center opacity-[80%] text-[#415C6B]'>
          Published on {post.createdAt} by {post.username}
        </p>
      </div>
      <div className='mx-[50px] mt-[50px] sm:flex '>
        {/* Post introduction */}
        <ReactMarkdown className='sm:w-3/4 text-center sm:text-start'>
          {post.postText}
        </ReactMarkdown>
        <div className='sm:ml-[50px] sm:w-1/2'>
          <div className='border-[3px] border-[#A3C0CD]'>
            <h2 className='p-[30px] text-center font-bad-script font-black'>
              My Recommendations
            </h2>
            {/* recommendation links */}
          </div>
        </div>
        </div>
      {/* Comment Section */}
      <div>
        <div className='text-center font-black font-bad-script'>
          <h1 className='text-[30px] text-[#412117]'>
          Comments
          </h1>
          <p className='text-[#8E4A45] mx-[20%]'>
            Let me know what you think! Please keep all comments respectful!
          </p>
        </div>
        {/* Comment Form & list */}
        <Comments comments={post.comments} />
        {auth.loggedIn() && (
        <CommentForm postId={post._id} />
        )}
      </div>
    </div>
  )
}
export default SingleBlogPost;