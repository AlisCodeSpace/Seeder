import React, { useState } from 'react'

import ProfileSections from '../components/profile/ProfileSections'
import ProfileHeader from '../components/profile/ProfileHeader'

import editinfo from '../data/editinfo'
import profiledata from '../data/profiledata'

import { useGlobalContext } from '../contexts/GlobalContexts'


import Button from '../ui/Button'
import { EditModal } from '../ui/Modals'

import { UserCheck01Icon, UserEdit01Icon } from '../assets/icons/Icons'
import { useDisclosure } from '@nextui-org/react'
import AboutMe from '../components/profile/sections/about/AboutMe'
import WorkExperience from '../components/profile/sections/work/WorkExperience'
import Education from '../components/profile/sections/education/Education'
import EditAboutMe from '../components/profile/sections/about/EditAboutMe'
import EditWork from '../components/profile/sections/work/EditWork'
import EditEducation from '../components/profile/sections/education/EditEducation'
import Skills from '../components/profile/sections/skills/Skills'
import EditSkills from '../components/profile/sections/skills/EditSkills'
import UploadResume from '../components/profile/sections/resume/UploadResume'
import Resume from '../components/profile/sections/resume/Resume'
import useProfileState from '../hooks/useProfileState'


const Profile = () => {
  const { editProfile, toggleEditProfile } = useGlobalContext()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [componentTitle, setComponentTitle] = useState('')

  const {
    aboutMe,
    aboutMeDraft,
    setAboutMeDraft,
    workExp,
    workExpDraft,
    setWorkExpDraft,
    education,
    educationDraft,
    setEducationDraft,
    skills,
    skillsDraft,
    setSkillsDraft,
    resume,
    resumeDraft,
    setResumeDraft,
    updateState,
  } = useProfileState();
  
  
  const getChildProfileComponent = (title) => {
    switch (title) {
      case "About Me":
        return <AboutMe aboutMe={aboutMe}/>;
      case "Work Experience":
        return <WorkExperience workExp={workExp}/>;
      case "Education":
        return <Education education={education}/>;
      case "Skills":
        return <Skills skills={skills} />;
      case "Resume":
        return <Resume resume={resume} />
      default:
        return null; // Fallback if no match
    }
  };

  const getChildModalComponent = () => {
    switch (componentTitle) {
      case "About Me":
        return <EditAboutMe aboutMeDraft={aboutMeDraft} setAboutMeDraft={setAboutMeDraft}/>;
      case "Work Experience":
        return <EditWork workExpDraft={workExpDraft} setWorkExpDraft={setWorkExpDraft} />
      case "Education":
        return <EditEducation educationDraft={educationDraft} setEducationDraft={setEducationDraft}/>;
      case "Skills":
        return <EditSkills skillsDraft={skillsDraft} setSkillsDraft={setSkillsDraft}/>;
      case "Resume":
        return <UploadResume resumeDraft={resumeDraft} setResumeDraft={setResumeDraft}/>
      default:
        return null; // Fallback if no match
    }
  };

  const handleSave = () => {
    updateState(componentTitle)
  }

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
      
      <EditModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} title={componentTitle} onSave={handleSave}>
        {getChildModalComponent()}
      </EditModal>
    </div>
  )
}

export default Profile
