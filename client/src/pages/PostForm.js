import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_POST } from "../utils/mutations";

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [intro, setIntro] = useState('');
  const [subheading1, setSubheading1] = useState('');
  const [mainText, setMainText] = useState('');
  const [subheading2, setSubheading2] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [postImage1, setPostImage1] = useState({postImage1: ''})
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, {error}] = useMutation(ADD_POST);

  const handleTitle = event => {
    if (event.target.value.length <= 100) {
      setTitle(event.target.value)
      setCharacterCount(event.target.value.length)
    }
    
  }

  // ** Handle Changes **
  const handleIntro = event => {
    setIntro(event.target.value);
  }
  const handleSubheading1 = event => {
    setSubheading1(event.target.value)
  }
  const handleMainText = event => {
    setMainText(event.target.value)
  }
  const handleSubheading2 = event => {
    setSubheading2(event.target.value)
  }
  const handleConclusion = event => {
    setConclusion(event.target.value)
  }
  const handlePostImage1 = event => {
    setPostImage1({postImage1: event.target.files[0]})
    console.log(postImage1)
  }
  // ** End Handle Changes **

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      await addPost({
        variables: {
          title,
          intro,
          mainText,
          subheading1,
          subheading2,
          conclusion,
        }
      })

      setCharacterCount(0);
      setTitle('');
      setIntro('');
      setMainText('');
      setSubheading1('');
      setSubheading2('');
      setConclusion('');

    } catch(e) {
      console.log(e);
    }

  }


  return (
    <section>
      <form onSubmit={handleFormSubmit} encType='multipart/form-data' className="mx-[70px]">
        {/* Title */}
        <div className="mt-12 mb-3">
          <div className="flex justify-center">
            <textarea
              className="w-3/4 border text-center rounded"
              placeholder="Title"
              rows={1}
              value={title}
              onChange={handleTitle}
            ></textarea>
          </div>
          <p className="flex justify-center items-center opacity-[50%] text-[12px]">{characterCount} / 100</p>
        </div>
        {/* First Name */}
        <div className="text-center">
          First Name
        </div>
        <div>
          <input
            type='file'
            accepts='.png, .jpg, jpeg'
            name='postImage1'
            onChange={handlePostImage1}
          />
        </div>
        <div className="flex justify-center my-3">
        <textarea
          className="w-3/4 border rounded"
          placeholder="Introduction"
          rows={7}
          value={intro}
          onChange={handleIntro}
        ></textarea>
        </div>
        {/* Subheading1 */}
        <div className="flex justify-center my-3">
          <textarea
            className="w-3/4 border text-center rounded"
            placeholder="Subheading1"
            rows={1}
            value={subheading1}
            onChange={handleSubheading1}
          ></textarea>
        </div>
        {/* Main text */}
        <div className="flex justify-center my-3">
          <textarea
            className="w-3/4 border rounded"
            placeholder="Main Content"
            rows={10}
            value={mainText}
            onChange={handleMainText}
          ></textarea>
        </div>
        <div>
          {/* postImage2 */}
        </div>
        {/* Subheading2 */}
        <div className="flex justify-center my-3">
          <textarea
            className="w-3/4 border text-center rounded"
            placeholder="Subheading2"
            rows={1}
            value={subheading2}
            onChange={handleSubheading2}
          ></textarea>
        </div>
        {/* Conclusion */}
        <div className="flex justify-center my-3">
          <textarea
            className="w-3/4 border rounded"
            placeholder="Conclusion"
            rows={10}
            value={conclusion}
            onChange={handleConclusion}
          ></textarea>
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