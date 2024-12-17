import React from 'react'

import github from '../../assets/images/github.png'
import google from '../../assets/images/google.png'
import linkedin from '../../assets/images/linkedin.png'

const SocialLogin = () => {
  return (
    <div className='flex gap-10'>
        <button className='button border border-gray-300 p-2 rounded-sm'>
            <img src={google} width={24} alt="Google Icon" />
        </button>
        <button className='button border border-gray-300 p-2 rounded-sm'>
            <img src={linkedin} width={24} alt="LinkedIn Icon" />
        </button>
        <button className='button border border-gray-300 p-2 rounded-sm'>
            <img src={github} width={24} alt="Github Icon" />
        </button>
    </div>
  )
}

export default SocialLogin
