import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
import { MdModeEdit } from 'react-icons/md'

const Profile = () => {

  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_USER: QUERY_ME, {
    variables: { username: userParam }
  });
  const user = data?.me || data?.user || {};

  

  const logout = event => {
    event.preventDefault();
    Auth.logout()
  }

  return(
    <div className='font-bad-script mx-[50px] text-[#415C6B] opacity-[60%]'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='text-[30px]'>Hello, {user.firstName}</h1>
          <div>
            <Link to="/login" onClick={logout}>log out</Link>
          </div>
        </div>
        <div className='border-2'></div>
      </div>
      <div className='grid grid-cols-2 '>
        <div className='row-span-2 border-2 text-center text-[26px] m-6'>
          <h2 className='text-[#8E4545] mt-[22px]'>Recent Articles</h2>
          <div className='border-2 mx-4'></div>
          <div>
            <PostList posts={user.posts} />
          </div>
        </div>
          {user.isAdmin === true ? (
            <div className='border-2 text-center text-[26px] m-6'>
              <h2 className='text-[#8E4545]'>Actions</h2>
              <div className='border-2 mx-4'></div>
              <Link to='/postform'>Create article</Link>
              <p>See all users</p>
              <li>Create new administrator</li>
            </div>
            ): (
              <p></p>
            )}
        
        <div className='border-2 text-center text-[26px] m-6'>
          <div className='flex justify-end'>
            <MdModeEdit  />
          </div>
          <h2 className='text-[#8E4545]'>Your Information</h2>
          <div className='border-2 mx-4'></div>
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;