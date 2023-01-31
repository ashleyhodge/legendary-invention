import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../../utils/queries';
import { ADD_COMMENT } from '../../utils/mutations';
import dateFormat from '../../utils/dateFormat';

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, {error}] = useMutation(ADD_COMMENT);

  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_USER: QUERY_ME, {
    variables: { username: userParam }
  });
  const user = data?.me || data?.user || {};

  const handleChange = event => {
    if (event.target.value.length <= 300) {
      setCommentText(event.target.value);
      setCharacterCount(event.target.value.length)
    }
  }
  // get the current date
  const current = new Date();
  const date = dateFormat(current)

  
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      // add comment to database
      await addComment({
        variables: { commentText, postId }
      });
      // clear form values
      setCommentText('');
      setCharacterCount(0);
    } catch(e) {
      console.log(e);
    }
  }


  return (
    <form onSubmit={handleFormSubmit} className="border border-[2px] border-[#A3C0CD] rounded mx-[20px] sm:mx-[70px] mt-[20px] p-[15px] ">
      {/* username and img, date */}
      <div className="flex font-bad-script text-[20px]">
        {/* <img /> */}
        <p>{user.username}</p>
      </div>
      <p className='opacity-[70%] font-bad-script font-thin'>{date}</p>
      {/* commentTextbox */}
      <div>
        <textarea 
        className='border w-full mt-2'
        rows='3'
        value={commentText}
        onChange={handleChange}
        ></textarea>
        <p className='flex justify-end opacity-[50%] text-[12px] font-bad-script'>{characterCount} / 1000</p>
        {error && <span>Something went wrong...</span>}
      </div>
      {/* add comment button */}
      <div className="flex justify-end">
        <button className="border rounded-full bg-[#ACBA73] text-white font-bad-script font-thin px-2 py-1 text-[16px]">
          Add Comment
        </button>
      </div>
    </form>
  )
}

export default CommentForm;