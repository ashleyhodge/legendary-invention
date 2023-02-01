import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from "../utils/auth";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const Signup = () => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '',username: '', email: '', password: '', rpassword: '' });
  // const [isAdmin, setIsAdmin] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);
  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,

    });
  };

  // const handleIsAdmin = () => {
  //   setIsAdmin(true);
  // }
  // navigate to previous page or home
  // const navigate = useNavigate()
  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    if(formState.password !== formState.rpassword) {
      alert("Passwords don't match!")
    } else {
      try {
        const { data } = await addUser({
          variables: { 
            ...formState,
            // isAdmin
          }
        });

        Auth.login(data.addUser.token);
        
      } catch (e) {

        console.error(e);
      }
    }
  };

  return (
    <section>
      <h1 className="text-center text-[36px] font-black font-bad-script text-[#3D5765]">
        Sign up
      </h1>
      <div>
        <form onSubmit={handleFormSubmit} className="my-[20px] border-[3px] border-[#BDCDD6] rounded p-[10px] mx-[20%]">
          <div className='m-6'>
              <div className="flex flex-col sm:flex-row justify-center">
                <input 
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="border-2 p-1 sm:m-2 sm:w-full rounded"
                />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="border-2 p-1 sm:m-2 mt-2 sm:w-full rounded"
                />
              </div>
              <div className='flex flex-col justify-center'>
                <input 
                  id="username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="border-2 p-1 sm:m-2 mt-2 rounded"
                />
                <input 
                  id="email"
                  name="email"
                  type="email"
                  autoComplete='email'
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border-2 p-1 sm:m-2 mt-2 rounded"
                />
                <input 
                  id="password"
                  name="password"
                  type="password"
                  autoComplete='new-password'
                  value={formState.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border-2 p-1 sm:m-2 mt-2 rounded"
                />
                <input 
                  id="rpassword"
                  name="rpassword"
                  type="password"
                  autoComplete='repeat-password'
                  value={formState.rpassword}
                  onChange={handleChange}
                  placeholder="Repeat Password"
                  className="border-2 p-1 sm:m-2 mt-2 rounded"
                />
                {/* Add update isAdmin to profile page */}

                {/* <div>
                  <label>Administrator? </label>
                  <input
                  id='isAdmin'
                  type='checkbox'
                  value={isAdmin}
                  onChange={handleIsAdmin}
                  className=""
                ></input>
                </div> */}
                
              </div>
            </div>
          <div className='flex justify-center mt-[20px]'>
            <button type='submit' className='bg-[#ACBA73] font-black font-bad-script sm:text-[20px] text-white py-2 px-[36%] rounded'>
              Sign up!
            </button>
          </div>
          <div className='flex flex-col sm:flex-row justify-center text-center mt-2 sm:text-[20px]'>
            <p className='sm:pr-2 text-[#415C6B] font-bad-script font-black'>Already registered?</p> 
            <Link to='/login' className='text-red-700 font-bad-script font-black'>Login</Link>
          </div>
        </form>
        {error && <div>Sign up failed</div>}
      </div>
      
    </section>
  )
}

export default Signup;