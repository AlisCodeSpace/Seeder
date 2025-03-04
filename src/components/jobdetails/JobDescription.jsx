import React from 'react'
import { Briefcase06Icon, DollarCircleIcon, TimeHalfPassIcon } from '../../assets/icons/Icons'
import { motion } from 'framer-motion';
import Button from '../../ui/Button';


const JobDescription = ({ jobDetails }) => {
  const renderResponsibilities = jobDetails.responsibilities.map((resp, index) => (
    <li key={index} className='text-gray-700 list-disc mb-1'>
        {resp}
    </li>
  ))
  
  const renderSkills = jobDetails.skills.map((skill, index) => (
    <li key={index} className='text-gray-700 rounded-md list-disc'>
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
                        <span className='bg-secondary text-gray-800 px-2 rounded-md'>{jobDetails.workStyle}</span>
                        <div className='bg-gray-800 rounded-full w-1 h-1'/>
                        <span className='bg-secondary text-gray-800 px-2 rounded-md'>{jobDetails.jobType}</span>
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
                    <span className='bg-secondary text-gray-800 px-2 rounded-md'>{jobDetails.salary} / month</span>
                </div>
            </div>

            {/* Deadline */}
            <div className='flex gap-2 items-center'>
                <TimeHalfPassIcon className='text-gray-800'/>
                <div className='flex items-center gap-2'>
                    <span className='bg-secondary text-gray-800 px-2 rounded-md'>{jobDetails.deadline}</span>
                </div>
            </div>
        </div>

        {/* About the job */}
        <div>
            <h3 className='h2'>About the job</h3>
            <p className='text-gray-700 mt-2'>{jobDetails.about}</p>
        </div>
        
        {/* Applicant Responsibilities */}
        <div>
            <h2 className='h2'>Job Responsibilities</h2>
            <ul className='mt-2 pl-4'>
                {renderResponsibilities}
            </ul>
        </div>

        {/* Required Skills */}
        <div className='mb-12 lg:mb-6'>
            <h2 className='h2'>Required Skills</h2>
            <ul className='mt-2 pl-4'>
                {renderSkills}
            </ul>
        </div>

        <div className='w-full fixed bottom-4 max-sm:left-1/2 max-sm:transform max=sm:-translate-x-1/2 px-4 lg:sticky'>
            <Button type='button' className='bg-primary text-white w-full'>Apply</Button>
        </div>
    </div>
  )
}

export default JobDescription