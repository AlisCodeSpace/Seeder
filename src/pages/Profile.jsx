import React, { useState } from 'react'

import ProfileSections from '../components/profile/ProfileSections'
import ProfileHeader from '../components/profile/ProfileHeader'

import editinfo from '../data/editinfo'
import { useGlobalContext } from '../contexts/GlobalContexts'
import useToggle from '../hooks/useToggle'


import Button from '../ui/Button'
import { EditModal } from '../ui/Modals'

import { UserCheck01Icon, UserEdit01Icon } from '../assets/icons/Icons'
import { useDisclosure } from '@nextui-org/react'
import AboutMe from '../components/profile/sections/about/AboutMe'
import WorkExperience from '../components/profile/sections/WorkExperience'
import Education from '../components/profile/sections/Education'
import EditAboutMe from '../components/profile/sections/about/EditAboutMe'

const Profile = () => {
  const { editProfile, toggleEditProfile } = useGlobalContext()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [componentTitle, setComponentTitle] = useState('')
  
  const getChildProfileComponent = (title) => {
    switch (title) {
        case "About Me":
            return <AboutMe />;
        case "Work Experience":
            return <WorkExperience />;
        case "Education":
            return <Education />;
        default:
            return null; // Fallback if no match
    }
  };

  const getChildModalComponent = () => {
    switch (componentTitle) {
        case "About Me":
            return <EditAboutMe />;
        default:
            return null; // Fallback if no match
    }
  };

  const renderProfileInputs = editinfo.map((item, index) => (
    <ProfileSections key={index} icon={item.icon} title={item.title} onOpen={onOpen} setComponentTitle={setComponentTitle}>
      {getChildProfileComponent(item.title)}
    </ProfileSections>
  ))

  return (
    <div className='relative flex flex-col items-center px-4 pt-10 pb-12 w-full gap-5'>
      <ProfileHeader />

      {renderProfileInputs}

      <div className='w-full fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4'>
        <Button handleClick={toggleEditProfile} className={`w-full ${editProfile ? 'bg-primary text-white' : 'bg-brown text-white'} `}>
          {editProfile ? <UserCheck01Icon className='text-white' /> : <UserEdit01Icon className='text-white'/>}
          {editProfile ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </div>
      
      <EditModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} title={componentTitle}>
        {getChildModalComponent()}
      </EditModal>
    </div>
  )
}

export default Profile
