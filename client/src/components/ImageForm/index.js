import { useState, useEffect } from "react"
import { Image } from 'cloudinary-react';
import { GrRefresh } from 'react-icons/gr';


const ImageForm = () => {
  const [fileName, setFileName] = useState('')
  const [previewSource, setPreviewSource] = useState()
  const [image, setImage] = useState([]);

  // display name of file from remote 
  const displayFileName = (file) => {
    setFileName(file.name);
  }
  // convert file to url and set as previewSource
  const previewFile = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }
  // onChange, display the file name and preview the selected file
  const handlePostImage = event => {
    const file = event.target.files[0];
    displayFileName(file);
    previewFile(file);
  }

  // make POST request 
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

  // onSubmit upload the currently selected file to cloudinary
  // reset file name to ' ' & reset previewSource to empty
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!previewSource) return;
    uploadImg(previewSource);
    setFileName('')
    setPreviewSource()
  }
  // make GET request and setImage to the data returned
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
  // on page load, call loadImages()
  useEffect(() => {
    loadImages()
  }, [])



  return(
    <section className="flex flex-col justify-center items-center">
      <h1>Upload images that will be used in this article:</h1>
        <form className="flex flex-col justify-center items-center mt-1" onSubmit={handleSubmitFile}>
          <div className="flex justify-center items-center">
            <label htmlFor='file'>
              <div className="border-[#ACBA73] cursor-pointer rounded p-1 bg-[#ACBA73] hover:bg-[#A4B26A] text-white m-1">
                Select Image
              </div>
              <input
              id="file"
              type='file'
              accepts='.png, .jpg, jpeg'
              name='postImage'
              onChange={handlePostImage}
              className='hidden'
              />
            </label>
            {fileName && (
              <div>{fileName}</div>
            )}
            <button className="border rounded-full bg-blue-100 hover:bg-blue-200 m-1 px-3 py-1" type='submit'>Upload</button>
          </div>
            {previewSource && (
              <img alt="alt" className="w-[20%] rounded"  src={previewSource}></img>
            )}
        </form>
        <div>
          <h1 className="text-center">Click on an image to copy the URL to clipboard</h1>
          <div className="flex">
            {image && image.map((image, index) => (
              <div className='cursor-pointer hover:opacity-[70%]' key={index}>
                <Image
                  cloudName='decfxx7f2'
                  publicId={image.public_id}
                  height='100'
                  crop='fit'
                  className='m-2 rounded active:ring-2 active:ring-blue-100'
                  onClick={() => {navigator.clipboard.writeText(image.url)}}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-2">
            <GrRefresh onClick={() => loadImages()} />
          </div>
          
        </div>
    </section>
  )
}

export default ImageForm;