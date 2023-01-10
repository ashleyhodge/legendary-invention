const Signup = () => {
  return (
    <section>
      <h1 className="text-center text-[36px] font-black font-bad-script text-[#3D5765]">
        Sign up
      </h1>
      <div className="border-[3px] border-[#415C6B] opacity-[37%] rounded p-[10px] mx-[20%] my-[20px]">
        <form>
          <div>
            <div>
              <label>
                First Name
              </label>
              <input 
                id="firstName"
                name="First Name"
                type="name"
                className="border-2"
              />
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}

export default Signup;