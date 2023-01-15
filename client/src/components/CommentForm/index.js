import  { useState } from 'react';

const CommentForm = () => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  
  const handleChange = event => {
    if (event.target.value.length <= 300) {
      setCommentText(event.target.value);
      setCharacterCount(event.target.value.length)
    }
  }

  const handleFormSubmit = async event => {
    event.preventDefault();
    setCommentText('');
    setCharacterCount(0);
  }

  return (
    <form onSubmit={handleFormSubmit} className="border border-[2px] border-[#A3C0CD] rounded mx-[20px] sm:mx-[70px] mt-[20px] p-[15px] ">
      {/* username and img, date */}
      <div className="flex">
        {/* <img /> */}
        <p>Username</p>
      </div>
      <p>date</p>
      {/* commentTextbox */}
      <div>
        <textarea 
        className='border w-full mt-2'
        rows='3'
        
        value={commentText}
        onChange={handleChange}
        ></textarea>
        <p className='flex justify-end opacity-[50%] text-[12px]'>{characterCount} / 1000</p>
      </div>
      {/* add comment button */}
      <div className="flex justify-end">
        <button className="border rounded-full px-2 py-1 text-[16px]">
          Add Comment
        </button>
      </div>
    </form>
  )
}

export default CommentForm;