import { Link, useParams } from "react-router-dom";
import { BiComment } from 'react-icons/bi'
import { MdModeEdit } from 'react-icons/md';
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER } from "../../utils/queries";


const PostList = ({ posts }) => {

  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_USER: QUERY_ME, {
    variables: { username: userParam }
  });
  const user = data?.me || data?.user || {};

  return (
    <section>
      {posts && posts.map((post) => (
        <div key={post._id} className='flex justify-between mr-6'>
          <Link to={`/blog/${post._id}`}>
            <div className='mx-6 text-[22px]'>
              <p>{post.title}</p>
            </div>
          </Link>
          <div className="flex items-center">
          {user.isAdmin === true ? (
            <MdModeEdit size={20} />
            ): (
              <p></p>
            )}
            
            <Link>
              <div className="flex items-center ">
                <BiComment size={20} className='ml-1' /> 
                <p className="text-[22px] mb-1 ml-1">{post.commentCount}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default PostList;