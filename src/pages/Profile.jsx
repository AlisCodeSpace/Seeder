import React from 'react'

import useToggle from '../hooks/useToggle'

import ProfileInputs from '../components/profile/ProfileInputs'
import ProfileHeader from '../components/profile/ProfileHeader'

import editinfo from '../data/editinfo'

const Profile = () => {
  const renderProfileInputs = editinfo.map((item, index) => (
    <ProfileInputs key={index} icon={item.icon} title={item.title} />
  ))
  return (
    <div className='flex flex-col items-center px-4 my-8 w-full gap-5'>
      <ProfileHeader />
      {renderProfileInputs}
    </div>
  )
}

export default Profile
