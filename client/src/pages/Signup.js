const Signup = () => {
  return (
    <section>
      <h1 className="text-center text-[36px] font-black font-bad-script text-[#3D5765]">
        Sign up
      </h1>
      <div className="border-[3px] border-[#415C6B] opacity-[37%] rounded p-[10px] mx-[20%] my-[20px]">
        <form>
          <div className="flex justify-center">
            <div className="w-1/2">
              <div className="flex">
                <input 
                  id="firstName"
                  name="First Name"
                  type="text"
                  value="First Name"
                  className="border-2 w-full p-1 m-2 rounded"
                />
                <input
                  id="lastName"
                  name="Last Name"
                  type="text"
                  value="Last Name"
                  className="border-2 w-full p-1 m-2 rounded"
                />
              </div>
              <div>
                <input 
                  id="username"
                  name="username"
                  type="text"
                  value="Username"
                  className="border-2 w-full p-1 m-2 rounded"
                />
              </div>
            </div>
            <div className="ml-6">
                <div>
                <input 
                  id="email"
                  name="email"
                  type="text"
                  value="Email"
                  className="border-2 p-1 m-2 rounded"
                />
              </div>
              <div>
                <input 
                  id="password"
                  name="password"
                  type="text"
                  value="Password"
                  className="border-2 p-1 m-2 rounded"
                />
              </div>
              <div>
                <input 
                  id="password"
                  name="password"
                  type="text"
                  value="Repeat Password"
                  className="border-2 p-1 m-2 rounded"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Signup;