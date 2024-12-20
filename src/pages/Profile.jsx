import React from 'react'

import profile from '../assets/images/profile_img.png'
import { LinkBackwardIcon, PencilEdit02Icon } from '../assets/icons/Icons'

const Profile = () => {
  return (
    <div className='flex flex-col items-center px-4 my-8 w-full gap-5'>
      {/* <div className='flex justify-between items-center w-full'>
        <LinkBackwardIcon />
        <PencilEdit02Icon />
      </div> */}

      <div className='flex flex-col gap-2 items-center'>
        <img src={profile} width={92} alt="Profile Image" className='rounded-full'/>
        <div className='flex flex-col items-center gap-1'>
          <h1 className='text-2xl text-gray-900 font-medium'>Majid Onaisy</h1>
          <span className='text-gray-600 text-sm'>Backend Developer</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
