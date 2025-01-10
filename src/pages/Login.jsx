import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Seeder  from '../assets/images/Seeder.png'
import LoginImage  from '../assets/images/LoginImage.png'

import LoginForm from '../components/login/LoginForm';
// import SocialLogin from '../components/login/SocialLogin';

import { ImagePlacehoderSkeleton } from '../skeletons/ImagePlaceholderSkeleton';


const Login = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className='flex items-center gap-20 w-full px-6 lg:w-2/3 lg:bg-white lg:border lg:h-[90vh] lg:rounded-md lg:shadow-md'>
      {/* Logo */}
      <div className='hidden w-1/2 lg:block'>
        <img src={LoginImage} width={600} alt="Login Image" />
      </div>
      <div className='flex flex-col items-center justify-center gap-10 w-full lg:w-2/5 lg:gap-5'>
        <div>
          {!loaded && <ImagePlacehoderSkeleton />}
          <img src={Seeder} width={168} alt="Seeder Logo" onLoad={() => setLoaded(true)} className={`lg:w-[128px] ${
            loaded ? "block" : "hidden"
          }`}/>
        </div>

        {/* Login Form */}
        <LoginForm />

        {/* Login with social media */}
        {/* <SocialLogin /> */}

        {/* Sign up if no account */}
        <div className='flex flex-col items-center gap-2 lg:text-sm'>
          <p className='text-gray-800'>Don't have an account? <Link to='/register' className='intext-link'>Sign Up</Link></p>

          {/* Divider */}
          <div className="flex items-center justify-center w-full">
            <hr className="bg-gray-500 w-16"></hr>
            <span className="px-2 text-gray-600">or</span>
            <hr className="bg-gray-500 w-16"></hr>
          </div>

          <p className='text-gray-800'>Stay as <Link to='/' className='intext-link'>Guest</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
