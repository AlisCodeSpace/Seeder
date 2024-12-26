import React, { useState } from 'react'

import { motion } from 'framer-motion';
import { Bookmark02Icon } from '../../assets/icons/Icons'

import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/GlobalContexts';

const Job = React.memo(({ logo, path, companyName, position, jobType, city, country, workStyle, skills, datePosted}) => {
  const { savedJob, toggleSaveJob } = useGlobalContext()

  console.log(savedJob)

  // const skillset = skills.map((skill, index) => (
  //   <span key={index} className='rounded-sm bg-secondary text-gray-800 text-sm font-medium px-3'>{skill}</span>
  // ))

  return (
    <div className='relative bg-white rounded-md w-full z-49 shadow'>
      <div className='flex flex-col gap-3 p-4'>
        <div className='flex justify-between'>
          <Link to={`/jobs/${path}`} className='flex gap-2 items-center '>
            <img src={logo} width={42} alt={logo} />
            <div className='flex flex-col'>
              <h1 className='text-gray-800 font-semibold text-lg'>{position}</h1>
              <p className='text-gray-600'>{companyName} - {city}, {country}</p>
            </div> 
          </Link>

          <div>
            <motion.button whileTap={{scale: 1.2}} className='z-50' onClick={toggleSaveJob}>
                <Bookmark02Icon fill={`${savedJob ? '#357960' : 'transparent'}`} className={`${savedJob ? ' text-primary' : 'text-gray-700'}`}/>
            </motion.button>
          </div>
        </div>
        <Link to={`/jobs/${path}`} className='flex flex-col gap-2'>
          {/* <div className='flex justify-between items-center mt-2 w-full'>
            <div className='flex gap-3'>
              {skillset}
            </div>
          </div> */}

          <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center gap-2'>
              <span className='text-gray-800 bg-gray-100 rounded-md px-2'>{workStyle}</span>
              <span className='text-gray-800 bg-gray-100 rounded-md px-2'>{jobType}</span>
            </div>

            <span className='text-xs text-gray-600 mr-2'>{datePosted} ago</span>

            {/* <p className='text-primary font-medium text-sm'>{salary} <span className='text-gray-500'>/ month</span></p> */}
          </div>      
        </Link>
      </div>
    </div>
  )
})

export default Job
