import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentForm';
import ReactMarkdown from 'react-markdown';
import { 
  FacebookShareButton, FacebookIcon, 
  PinterestShareButton, PinterestIcon,
  EmailShareButton, EmailIcon, 
  TwitterShareButton, TwitterIcon,
  TumblrShareButton, TumblrIcon,
  RedditShareButton, RedditIcon
} from 'react-share';
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
      <div className='flex flex-col'>
        <h1 className='text-center text-[36px] font-bad-script font-black text-[#415C6B] mt-[50px]'>
          {post.title}
        </h1>
        <p className='text-center opacity-[80%] text-[#415C6B] font-bad-script font-light'>
          Published on {post.createdAt} by {post.username}
        </p>
        <div className='flex justify-center mt-3'>
          {/* Share article buttons */}
          {/* Update urls once hosted */}
          <FacebookShareButton
            url={'https://www.example.com'}
            quote={'Dummy text!'}
            hashtag="#muo"
          ><FacebookIcon className='mr-1' size={22} round /></FacebookShareButton>
          <PinterestShareButton
            url={'https://www.example.com'}
            media={`${post.postImages}`}
          ><PinterestIcon className='mr-1' size={22} round /></PinterestShareButton>
          <TwitterShareButton
            url={'https://www.example.com'}
            title={`${post.title}`}
          ><TwitterIcon className='mr-1' size={22} round /></TwitterShareButton>
          <TumblrShareButton
            url={'https://www.example.com'}
            title={`${post.title}`}
          ><TumblrIcon className='mr-1' size={22} round /></TumblrShareButton>
          <RedditShareButton
            url={'https://www.example.com'}
            title={`${post.title}`}
          ><RedditIcon className='mr-1' size={22} round /></RedditShareButton>
          <EmailShareButton
            url={'https://www.example.com'}
            subject={'Read this article!'}
            body={'Dummy text!'}
            separator=''
          ><EmailIcon size={22} round /></EmailShareButton>
        </div>
      </div>
      <div className='mx-[50px] mt-[50px] sm:flex '>
        {/* Post introduction */}
        <ReactMarkdown className='sm:w-3/4 text-center sm:text-start font-roboto'>
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
        <div className='text-center font-bad-script'>
          <h1 className='text-[30px] text-[#412117]'>
          Comments
          </h1>
          <p className='text-[#8E4A45] mx-[20%] font-light'>
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