import React from 'react'

import profile from '../../assets/images/profile_img.png'
import { Logout03Icon } from '../../assets/icons/Icons'
import { useUserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const ProfileHeader = () => {
  const { logout } = useUserContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  
  return (
    <div className='flex flex-col gap-2 items-center'>
        <div className='absolute top-5 right-5'>
          <button onClick={handleLogout}><Logout03Icon /></button>
        </div>
        <img src={profile} width={92} alt="Profile Image" className='rounded-full'/>
        <div className='flex flex-col items-center gap-1'>
            <h1 className='text-2xl text-gray-900 font-medium'>Majid Onaisy</h1>
            <span className='text-gray-600 text-sm'>Backend Developer</span>
        </div>
    </div>
  )
}

export default ProfileHeader
