

const PostForm = () => {
  return (
    <section>
      <form className="mx-[70px]">
        {/* Title */}
        <div className="flex justify-center my-3">
          <textarea
          className="w-3/4 border text-center rounded"
          placeholder="Title"
          ></textarea>
        </div>
        {/* First Name */}
        <div className="text-center">
          First Name
        </div>
        <div>
          {/* postImage1 */}
        </div>
        <div className="flex justify-center my-3">
        <textarea
          className="w-3/4 border rounded"
          placeholder="Introduction"
          rows={7}
        ></textarea>
        </div>
        {/* Subheading1 */}
        <div className="flex justify-center my-3">
          <textarea
            className="w-3/4 border text-center rounded"
            placeholder="Subheading1"
            rows={1}
          ></textarea>
        </div>
        {/* Main text */}
        <div className="flex justify-center my-3">
          <textarea
            className="w-3/4 border rounded"
            placeholder="Main Content"
            rows={10}
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
          ></textarea>
        </div>
        {/* Conclusion */}
        <div className="flex justify-center my-3">
          <textarea
            className="w-3/4 border rounded"
            placeholder="Conclusion"
            rows={10}
          ></textarea>
        </div>
      </form>
    </section>
  )
}

export default PostForm;