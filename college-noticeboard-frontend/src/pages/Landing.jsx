import {useNavigate} from 'react-router-dom';
const Landing = () => {
    const navigate = useNavigate();
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>

      <h1 className='text-4xl font-bold md-4'>
        College Notice Board
      </h1>

      <p className='text-gray-600 md-6'>
        Official notices for students, staff and clubs
      </p>

      <button onClick={()=>navigate("/login")} className='bg-blue-600 text-white px-6 py-2 rounded'>
        Login
      </button>
      
    </div>
  )
}

export default Landing
