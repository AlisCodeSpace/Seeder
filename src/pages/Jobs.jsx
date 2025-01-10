import React from 'react'

import Job from '../components/jobs/Job'
import Header from '../components/jobs/Header'
// import Filters from '../components/jobs/filters'

import ProfileImg from '../assets/images/profile_img.png'


import jobs from '../data/jobs'
import { useGlobalContext } from '../contexts/GlobalContexts'
import JobDetailsDesktop from '../components/jobs/JobDetailsDesktop'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'


const Jobs = () => {
  const { isMobile } = useGlobalContext()
  const renderJobs = jobs.map((job) => (
    <Job 
      key={job.id}
      path={job.path} 
      logo={job.logo}
      companyName={job.companyName} 
      position={job.position}
      jobType={job.jobType}
      city={job.city}
      country={job.country}
      workStyle={job.workStyle}
      skills={job.skills}
      datePosted={job.datePosted}
      salary={job.salary}
    />
  ))

  return (
    <div className='flex flex-col items-center w-full gap-3'>
      {/* <Filters /> */}
      {isMobile && <Header />} 

      <div className='lg:flex justify-center w-full lg:gap-5 my-8'>
        <div className='flex flex-col items-center w-full gap-3 px-2 lg:w-1/4'>
          {renderJobs}
        </div>

        {!isMobile && (
          <JobDetailsDesktop />
          )}

          {!isMobile && (
          <div className='relative flex flex-col gap-5 w-1/5'>
            <div className='sticky top-4 bg-white rounded-md shadow-md w-full h-[300px] flex flex-col items-center justify-center'>
                <img src={ProfileImg} width={92} alt="Profile Image" className='rounded-full'/>
                <h2 className='h2 mt-2'>Majid Onaisy</h2>
                <span className='text-sm text-gray-700 mt-1'>Backend Developer</span>
                <Link to='/profile'>
                  <Button className='bg-brown text-white w-full mt-3'>View Profile</Button>
                </Link>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default Jobs
