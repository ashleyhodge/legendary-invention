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
      {post.postTitle}
      {post.createdAt}
      {post.postText}
    </div>
  )
}
export default SingleBlogPost;