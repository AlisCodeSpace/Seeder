import React from 'react'

import ProfileInputs from '../components/profile/ProfileInputs'
import ProfileHeader from '../components/profile/ProfileHeader'

import editinfo from '../data/editinfo'
import { useGlobalContext } from '../contexts/GlobalContexts'
import useToggle from '../hooks/useToggle'


import Button from '../ui/Button'
import { EditModal } from '../ui/Modals'

import { UserCheck01Icon, UserEdit01Icon } from '../assets/icons/Icons'

const Profile = () => {
  const { editProfile, toggleEditProfile } = useGlobalContext()
  const [openModal, toggleModal] = useToggle() 

  const renderProfileInputs = editinfo.map((item, index) => (
    <ProfileInputs key={index} icon={item.icon} title={item.title} toggleModal={toggleModal}/>
  ))
  return (
    <div className='relative flex flex-col items-center px-4 mt-10 pb-12 w-full gap-5'>
      <ProfileHeader />

      {renderProfileInputs}

      <div className='w-full fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4'>
        <Button handleClick={toggleEditProfile} className={`w-full ${editProfile ? 'bg-primary text-white' : 'bg-brown text-white'} `}>
          {editProfile ? <UserCheck01Icon className='text-white' /> : <UserEdit01Icon className='text-white'/>}
          {editProfile ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </div>
      
      <EditModal openModal={openModal} toggleModal={toggleModal}/>
    </div>
  )
}

export default Profile
