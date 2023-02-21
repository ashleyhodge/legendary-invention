import { useMutation, useQuery } from "@apollo/client";
import { useState, useCallback } from "react";
import { ADD_POST } from "../utils/mutations";
import { useParams } from 'react-router-dom';
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import SimpleMDEReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import ImageForm from "../components/ImageForm";
import dateFormat from '../utils/dateFormat';



const PostForm = () => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [postImages, setPostImages] = useState([])
  const [characterCount, setCharacterCount] = useState(0);
  const [addPost] = useMutation(ADD_POST);

  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_USER: QUERY_ME, {
    variables: { username: userParam }
  });
  const user = data?.me || data?.user || {};

    // get the current date
    const current = new Date();
    const date = dateFormat(current)

  // ** Handle Changes **
  const handleTitle = event => {
    if (event.target.value.length <= 300) {
      setTitle(event.target.value)
      setCharacterCount(event.target.value.length)
    }
  }
  const handlePostText = useCallback((postText) => {
    setPostText(postText);
  }, []);
  const handleTitleImage = event => {
    setPostImages(event.target.value);
  }
  // ** End Handle Changes **

  // ** Handle Form Submits **
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      await addPost({
        variables: {
          title,
          postText,
          postImages
        }
      })
      setCharacterCount(0);
      setTitle('');
      setPostText('')
    } catch(e) {
      console.log(e);
    }
  }
  // ** End Handle Submit Forms **


  return (
    <section>
      {/* Upload images to cloudinary and then display them here so they can be used */}
      {/* <div className="flex flex-col justify-center items-center">
        <ImageForm />
      </div> */}
      <form onSubmit={handleFormSubmit} className="mx-[70px]">
        {/* Title */}
        <div className="mt-12 mb-3">
          <div className="flex justify-center">
            <input
              className="w-3/4 border text-center rounded"
              type='text'
              placeholder="Title"
              rows={1}
              value={title}
              onChange={handleTitle}
            ></input>
          </div>
          <p className="flex justify-center items-center opacity-[50%] text-[12px]">{characterCount} / 300</p>
        </div>
        <div className="flex justify-center">
          <input 
            className="w-3/4 border text-center rounded"
            type='text'
            value={postImages}
            rows={1}
            placeholder='Title Image URL'
            onChange={handleTitleImage}
          />
        </div>
        {/* First Name */}
        <div className="text-center m-5">
          created on {date} by {user.username}
        </div>
        <div className="m-5">
          <SimpleMDEReact 
            className="border"
            value={postText}
            onChange={handlePostText}
          />
        </div>
        <div className="flex justify-center m-5">
          <button className="border rounded-full bg-blue-100 px-2 py-1 w-full hover:bg-blue-200">
            Post Article
          </button>
        </div>
      </form>
    </section>
  )
}

export default PostForm;