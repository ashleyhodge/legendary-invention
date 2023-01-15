import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import CommentForm from '../CommentForm';
import auth from '../../utils/auth';

const Comments = ({ comments }) => {
  return (
    <div>

      
      {comments && comments.map(comment => (
      <div key={comment._id} className="border rounded-md border-[2px] border-[#A3C0CD] mx-[20px] sm:mx-[70px] mt-[20px] p-[15px] ">
        <div className="flex justify-between font-bad-script">
          <div>
            {/* profile image */}
            <h2 className='text-[20px]'>
              {comment.username}
            </h2>
            <p className='opacity-[70%]'>
              {comment.createdAt}
            </p>
          </div>
          <div className='flex items-center'>
            <AiOutlineLike />
            <AiOutlineDislike />
            <p>Reply</p>
          </div>
        </div>
        <div className='mt-[15px]'>
          <p>{comment.commentText}</p>
        </div>
        <div className='text-end'>
          <p>View Replies</p>
        </div>
      </div>
      ))}
      <p className='text-end text-[20px] mt-2 mx-[25px] sm:mx-[75px] font-bad-script'>See all</p>
      {auth.loggedIn() && (
        <CommentForm />
      )}
    </div>
  )
}

export default Comments;