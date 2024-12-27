import React from 'react'

import profile from '../assets/images/profile_img.png'
import { PencilEdit02Icon } from '../assets/icons/Icons'
import useToggle from '../hooks/useToggle'

const Profile = () => {
  const [editMode, toggleEditMode] = useToggle()
  return (
    <div className='flex flex-col items-center px-4 my-8 w-full gap-5'>

      <div className='flex flex-col gap-2 items-center'>
        <img src={profile} width={92} alt="Profile Image" className='rounded-full'/>
        <div className='flex flex-col items-center gap-1'>
          <h1 className='text-2xl text-gray-900 font-medium'>Majid Onaisy</h1>
          <span className='text-gray-600 text-sm'>Backend Developer</span>
        </div>
        <button onClick={toggleEditMode} className={`flex items-center px-4 py-2 rounded-md gap-2 mt-4 ${editMode ? 'bg-lightbrown text-brown' : 'bg-brown text-white'} `}>Edit Profile <PencilEdit02Icon className={`${editMode ? 'text-brown' : 'text-white'}`} width={22} height={22}/></button>
      </div>

    </div>
  )
}

export default Profile
