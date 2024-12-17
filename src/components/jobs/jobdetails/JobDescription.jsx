import React from 'react'
import { Briefcase06Icon, DollarCircleIcon } from '../../../assets/icons/Icons'
import { motion } from 'framer-motion';


const JobDescription = ({ jobDetails }) => {
  const renderResponsibilities = jobDetails.responsibilities.map((resp, index) => (
    <li key={index} className='text-gray-700 list-disc mb-1'>
        {resp}
    </li>
  ))
  
  const renderSkills = jobDetails.skills.map((skill, index) => (
    <li key={index} className='text-gray-800 bg-gray-200 rounded-md py-1 px-2'>
        {skill}
    </li>
  ))

  return (
    <div className='w-full flex flex-col gap-6 px-4'>
        {/* Job Info */}      
        <div className='flex flex-col gap-3'>
            {/* Work style and job type */}
            <div className='flex gap-2 items-center'>
                <Briefcase06Icon className='text-gray-800'/>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center gap-2'>
                        <span className='bg-secondary text-gray-800 px-2 py-1 rounded-md'>{jobDetails.workStyle}</span>
                        <div className='bg-gray-800 rounded-full w-1 h-1'/>
                        <span className='bg-secondary text-gray-800 px-2 py-1 rounded-md'>{jobDetails.jobType}</span>
                    </div>
                    <div className='pr-4'>
                        <span className='text-sm text-gray-600'>Posted {jobDetails.datePosted} ago</span>
                    </div>
                </div>
            </div>
            
            {/* Salary */}
            <div className='flex gap-2 items-center'>
                <DollarCircleIcon className='text-gray-800'/>
                <div className='flex items-center gap-2'>
                    <span className='bg-secondary text-gray-800 px-2 py-1 rounded-md'>{jobDetails.salary} / month</span>

                </div>
            </div>
        </div>

        {/* About the job */}
        <div>
            <h1 className='text-2xl text-gray-800'>About the job</h1>
            <p className='text-gray-700 mt-2'>{jobDetails.about}</p>
        </div>
        
        {/* Applicant Responsibilities */}
        <div>
            <h1 className='text-2xl text-gray-800'>Job Responsibilities</h1>
            <ul className='mt-2 pl-4'>
                {renderResponsibilities}
            </ul>
        </div>

        {/* Required Skills */}
        <div className='w-full'>
            <h1 className='text-2xl text-gray-800'>Required Skills</h1>
            <ul className='mt-4 flex flex-wrap gap-3'>
                {renderSkills}
            </ul>
        </div>

        <div className='self-start w-full'>
            <motion.button whileTap={{ scale: 0.9 }} className='bg-primary px-6 rounded-md py-2 text-white font-medium w-full'>Apply</motion.button>
        </div>
    </div>
  )
}

export default JobDescription