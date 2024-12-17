import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { motion } from "motion/react"

import { Bookmark02Icon } from '../../assets/icons/Icons'

const Job = ({ logo, path, companyName, position, jobType, city, country, workStyle, skills, datePosted, salary}) => {
  const [savedJob, setSavedJob] = useState(false)

  const handleSaveJob = () => {
    setSavedJob(prevState => !prevState)
  }

  const skillset = skills.map((skill, index) => (
    <span key={index} className='rounded-md bg-secondary text-gray-800 text-sm font-medium px-3'>{skill}</span>
  ))

  return (
    <div className='relative bg-white rounded-lg w-full z-49'>
      <div className='flex flex-col gap-3 p-4'>
        <div className='flex items-center justify-between'>
            <Link to={`/jobs/${path}`} className='flex gap-2 items-center '>
              <img src={logo} width={32} alt={logo} />
              <span className='text-xs text-gray-600 mr-2'>Posted {datePosted} ago</span>
            </Link>
            <motion.button whileTap={{scale: 1.2}} className='z-50' onClick={handleSaveJob}>
              <Bookmark02Icon fill={`${savedJob ? '#357960' : 'transparent'}`} className={`${savedJob ? ' text-primary' : 'text-gray-600'}`}/>
            </motion.button>
        </div>
        <Link to={`/jobs/${path}`} className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
              <h1 className='text-gray-800 font-semibold'>{position}</h1>
              <p className='text-gray-700'>{companyName}, {city} - {country}</p>
          </div>        
          <div className='flex justify-between items-center mt-2 w-full'>
            <div className='flex gap-3'>
              {skillset}
            </div>
          </div>
          <hr className='mt-2'/>
          <div className='flex items-center justify-between'>
            <p className='text-primary font-medium'>{workStyle} - {jobType}</p>
            <p className='text-primary font-medium text-sm'>{salary} <span className='text-gray-500'>/ month</span></p>
          </div>      
        </Link>
      </div>
    </div>
  )
}

export default Job
