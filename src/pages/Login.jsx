import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Seeder  from '../assets/images/Seeder.png'

import LoginForm from '../components/login/LoginForm';
import SocialLogin from '../components/login/SocialLogin';

import { ImagePlacehoderSkeleton } from '../skeletons/ImagePlaceholderSkeleton';


const Login = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className='flex flex-col items-center justify-center gap-10 w-full h-screen px-6'>
      {/* Logo */}
      <div>
        {!loaded && <ImagePlacehoderSkeleton />}
        <img src={Seeder} width={192} alt="Seeder Logo" onLoad={() => setLoaded(true)} className={`${
          loaded ? "block" : "hidden"
        }`}/>
      </div>

      {/* Login Form */}
      <LoginForm />

      {/* Login with social media */}
      {/* <SocialLogin /> */}

      {/* Sign up if no account */}
      <div className='flex flex-col items-center gap-2'>
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
  )
}

export default Login
