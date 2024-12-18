import React from 'react'
import Job from '../components/jobs/Job'


// import Filters from '../components/jobs/filters'
import Header from '../components/jobs/Header'
import jobs from '../data/jobs'


const Jobs = () => {
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
      <Header /> 
      <div className='flex flex-col items-center w-full gap-3 px-2 mt-4'>
        {renderJobs}
      </div>
    </div>
  )
}

export default Jobs
