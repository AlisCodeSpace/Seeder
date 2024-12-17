import React from 'react'
import { Briefcase06Icon, DollarCircleIcon } from '../../../assets/icons/Icons'


const JobDescription = ({ jobDetails }) => {
  const renderResponsibilities = jobDetails.responsibilities.map((resp, index) => (
    <li key={index} className='text-gray-700 list-disc mb-1'>
        {resp}
    </li>
  ))
  
  const renderSkills = jobDetails.skills.map((skill, index) => (
    <li key={index} className='text-gray-700 bg-gray-300 rounded-md py-1 px-2'>
        {skill}
    </li>
  ))

  return (
    <div className='w-full'>      
        <div className='flex flex-col gap-3'>
            <div className='flex gap-2 items-center'>
                <Briefcase06Icon className='text-gray-800'/>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center gap-2'>
                        <span className='bg-secondary text-gray-800 px-2 py-1 rounded-md'>{jobDetails.workStyle}</span>
                        <div className='bg-gray-800 rounded-full w-1 h-1'/>
                        <span className='bg-secondary text-gray-800 px-2 py-1 rounded-md'>{jobDetails.jobType}</span>
                    </div>
                    <div className='pr-2'>
                        <span className='text-sm text-gray-600'>Posted {jobDetails.datePosted} ago</span>
                    </div>
                </div>
            </div>

            <div className='flex gap-2 items-center'>
                <DollarCircleIcon className='text-gray-800'/>
                <div className='flex items-center gap-2'>
                    <span className='bg-secondary text-gray-800 px-2 py-1 rounded-md'>{jobDetails.salary} / month</span>

                </div>
            </div>
        </div>
        <div className='mt-6'>
            <h1 className='text-2xl text-gray-800'>About the job</h1>
            <p className='text-gray-700 mt-2 pr-4'>{jobDetails.about}</p>
        </div>

        <div className='mt-6'>
            <h1 className='text-2xl text-gray-800'>Job Responsibilities</h1>
            <ul className='mt-2 px-4'>
                {renderResponsibilities}
            </ul>
        </div>

        <div className='mt-6 w-full'>
            <h1 className='text-2xl text-gray-800'>Required Skills</h1>
            <ul className='mt-4 flex flex-wrap gap-3'>
                {renderSkills}
            </ul>
        </div>
    </div>
  )
}

export default JobDescription