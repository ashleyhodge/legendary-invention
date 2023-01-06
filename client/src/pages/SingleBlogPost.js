import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

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
          </div>

        </div>
      </div>
    </div>
  )
}
export default SingleBlogPost;