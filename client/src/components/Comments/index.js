import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

const Comments = ({ posts }) => {
  return (
    <div>
      <div className="border border-[4px] border-[#A3C0CD] mx-[70px] mt-[20px] p-[15px]">
        <div className="flex justify-between">
          <div>
            {/* profile image */}
            <h2>
              username
            </h2>
            <p>date</p>
          </div>
          <div className='flex items-center'>
            <AiOutlineLike />
            <AiOutlineDislike />
            <p>Reply</p>
          </div>
        </div>
        <div className='mt-[15px]'>
          <p>CommentText</p>
        </div>
        <div className='text-end'>
          <p>View Replies</p>
        </div>
      </div>
      <p className='text-end mx-[70px]'>See all</p>
    </div>
  )
}

export default Comments;