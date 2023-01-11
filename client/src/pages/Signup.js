import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Auth from "../utils/auth";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const Signup = () => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '',username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
    
  };
  const navigate = useNavigate();
  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log(data);
      
    } catch (e) {
      console.error(e);
    }

  };
  return (
    <section>
      <h1 className="text-center text-[36px] font-black font-bad-script text-[#3D5765]">
        Sign up
      </h1>
      <div className="border-[3px] border-[#BDCDD6] rounded p-[10px] mx-[20%] my-[20px]">
        <form onSubmit={handleFormSubmit} className="my-[20px]">
          <div className="flex justify-center">
            <div className="w-1/2">
              <div className="flex">
                <input 
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="border-2 w-full p-1 m-2 rounded"
                />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="border-2 w-full p-1 m-2 rounded"
                />
              </div>
              <div>
                <input 
                  id="username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                  placeholder="Username"
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
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border-2 p-1 m-2 rounded"
                />
              </div>
              <div>
                <input 
                  id="password"
                  name="password"
                  type="text"
                  value={formState.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border-2 p-1 m-2 rounded"
                />
              </div>
              {/* add repeat password for authentication */}
              <div>
                <input 
                  id="password"
                  name="password"
                  type="text"
                  value={formState.password}
                  onChange={handleChange}
                  placeholder="Repeat Password"
                  className="border-2 p-1 m-2 rounded"
                />
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-[20px]'>
            <button type='submit' className='bg-[#ACBA73] text-white py-2 px-[39%] rounded'>
              Submit
            </button>
          </div>
          <div className='flex justify-center mt-2'>
            <p className='pr-2 text-[#415C6B] font-bad-script font-black'>Already registered?</p> 
            <Link to='/login' className='text-red-700 font-bad-script font-black'>Login</Link>
          </div>
        </form>
        {error && <div>Sign up failed</div>}
      </div>
      
    </section>
  )
}

export default Signup;