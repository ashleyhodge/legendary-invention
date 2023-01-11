import { Link } from "react-router-dom";
import { useState } from 'react';

import Auth from "../utils/auth";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";


const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    
  };
// const navigate = useNavigate();
  
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token)

    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
    // navigate('/dashboard')
  };

  return (
    <section>
      <h1 className="text-center text-[36px] font-black font-bad-script text-[#3D5765]">
        Log in
      </h1>
      <div>
        <form onSubmit={handleFormSubmit} className="my-[20px] border-[3px] border-[#BDCDD6] rounded p-[10px] mx-[20%]">
          <div className='mt-6 mx-12'>
              <div className='flex flex-col justify-center'>
                <input 
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border-2 p-1 sm:m-2 mt-2 rounded"
                />
                <input 
                  id="password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border-2 p-1 sm:m-2 mt-2 rounded"
                />
              </div>
            </div>
          <div className='flex justify-center mt-[20px]'>
            <button type='submit' className='bg-[#ACBA73] font-black font-bad-script sm:text-[20px] text-white py-2 px-[36%] rounded'>
              Log in
            </button>
          </div>
          <div className='flex flex-col sm:flex-row justify-center text-center mt-2 sm:text-[20px]'>
            <p className='sm:pr-2 text-[#415C6B] font-bad-script font-black'>Not registered?</p> 
            <Link to='/signup' className='text-red-700 font-bad-script font-black'>Sign up</Link>
          </div>
        </form>
        {error && <div>Login failed</div>}
      </div>
      
    </section>
  )
}

export default Login;