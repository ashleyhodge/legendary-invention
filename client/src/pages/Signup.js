import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div className="border-[3px] border-[#415C6B] opacity-[37%] rounded p-[10px] mx-[20%] my-[20px]">
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-center">
            <div className="w-1/2">
              <div className="flex">
                <input 
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                  className="border-2 w-full p-1 m-2 rounded"
                />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
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
                  className="border-2 p-1 m-2 rounded"
                />
              </div>
              {/* <div>
                <input 
                  id="password"
                  name="password"
                  type="text"
                  value={formState.password}
                  onChange={handleChange}
                  className="border-2 p-1 m-2 rounded"
                />
              </div> */}
            </div>
            
          </div>
          <div>
            <button type='submit'>
              Submit
            </button>
          </div>
        </form>
        {error && <div>Sign up failed</div>}
      </div>
    </section>
  )
}

export default Signup;