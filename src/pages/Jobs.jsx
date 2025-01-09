import React from 'react'

import Job from '../components/jobs/Job'
import Header from '../components/jobs/Header'
// import Filters from '../components/jobs/filters'

import jobs from '../data/jobs'
import { useGlobalContext } from '../contexts/GlobalContexts'


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
          <div className='bg-white rounded-md shadow-md w-2/5 h-[80vh]'>
          
          </div>)}

          {!isMobile && (
          <div className='flex flex-col gap-5 w-1/5'>
            <div className='bg-white rounded-md shadow-md w-full h-[300px]'>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default Jobs
