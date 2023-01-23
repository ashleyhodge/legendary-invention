import { useMutation } from "@apollo/client";
import { useState, useEffect, useCallback } from "react";
import { ADD_POST } from "../utils/mutations";
import SimpleMDEReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { GrRefresh } from 'react-icons/gr';
import { Image } from 'cloudinary-react';


const PostForm = () => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [postImages, setPostImages] = useState([])
  const [fileName, setFileName] = useState('')
  const [image, setImage] = useState([]);
  const [previewSource, setPreviewSource] = useState()
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, {error}] = useMutation(ADD_POST);



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
  const handlePostImage = event => {
    const file = event.target.files[0];
    displayFileName(file);
    previewFile(file);
  }
  const handleTitleImage = event => {
    setPostImages(event.target.value);
  }
  // ** End Handle Changes **

  const displayFileName = (file) => {
    setFileName(file.name);
  }

  const previewFile = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

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
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!previewSource) return;
    uploadImg(previewSource);
    setFileName('')
    setPreviewSource()
  }
  // ** End Handle Submit Forms **

  const uploadImg = async (base64EncodedImage) => {
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({data: base64EncodedImage}),
        headers: {'Content-type': 'application/json'}
      });
    } catch (error) {
      console.log(error)
    }
  }

  const loadImages = async () => {
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImage(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    loadImages()
  }, [])


    
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1>Upload images that will be used in this article:</h1>
        <form onSubmit={handleSubmitFile}>
          <div className="flex">
            <label htmlFor='file'>
              <div className="border-[#ACBA73] cursor-pointer rounded p-1 bg-[#ACBA73] hover:bg-[#A4B26A] text-white">
                Select Image
              </div>
              <input
              id="file"
              type='file'
              accepts='.png, .jpg, jpeg'
              name='postImage'
              onChange={handlePostImage}
              className='text-white hidden'
              />
            </label>
            {fileName && (
              <div>{fileName}</div>
            )}
            <button className="border rounded-full bg-blue-100 hover:bg-blue-200 px-3 py-1" type='submit'>Submit</button>
          </div>
            {previewSource && (
              <img alt="alt" className="w-20" src={previewSource}></img>
            )}
        </form>
          <div className="flex">
            {image && image.map((image, index) => (
              <div className='flex flex-row cursor-pointer hover:opacity-[70%] text-[12px]' onClick={() => {navigator.clipboard.writeText(image.url)}} key={index}>
                <Image
                  cloudName='decfxx7f2'
                  publicId={image.public_id}
                  width='100'
                  className='flex'
              />
              </div>
            ))}
          </div>
        <GrRefresh className="cursor-pointer" onClick={() => {loadImages()}} />
      </div>
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
        <div className="text-center">
          First Name
        </div>
        <div>
          <SimpleMDEReact 
            className="border"
            value={postText}
            onChange={handlePostText}
          />
        </div>
        <div className="flex justify-center">
          <button className="border rounded-full bg-blue-100 px-2 py-1 w-3/4">
            Post Article
          </button>
        </div>
      </form>
    </section>
  )
}

export default PostForm;