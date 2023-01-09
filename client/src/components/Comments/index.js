import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

const Comments = ({ comments }) => {
  return (
    <div>
      {comments && comments.map(comment => (
      <div className="border border-[4px] border-[#A3C0CD] mx-[70px] mt-[20px] p-[15px] font-bad-script">
        <div className="flex justify-between">
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
          <p className='font-black'>{comment.commentText}</p>
        </div>
        <div className='text-end'>
          <p>View Replies</p>
        </div>
      </div>
      ))}
      <p className='text-end text-[20px] mt-2 mx-[75px] font-bad-script'>See all</p>
    </div>
  )
}

export default Comments;