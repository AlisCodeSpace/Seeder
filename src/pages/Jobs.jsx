import React from 'react'
import Job from '../components/jobs/Job'

import GoogleLogo from '../assets/images/google.png'
import GithubLogo from '../assets/images/github.png'
// import Filters from '../components/jobs/filters'
import Header from '../components/jobs/Header'


const Jobs = () => {
  const joblist = [
    {
      id: 1,
      path: 'job1',
      logo: GoogleLogo,
      companyName: 'Google',
      position: 'Junior Web Developer',
      jobType: 'Intern',
      city: 'Dearborn',
      country: 'US',
      workStyle: 'Remote',
      skills: ['React', '.NET', 'SQL'],
      datePosted: '1d',
      salary: '$1200',
    },
    {
      id: 2,
      path: 'job2',
      logo: GithubLogo,
      companyName: 'Github',
      position: 'Senior Backend Engineer',
      jobType: 'Fulltime',
      city: 'Beirut',
      country: 'Lebanon',
      workStyle: 'Hybrid',
      skills: ['Angular', 'Laravel', 'SQL'],
      datePosted: '5m',
      salary: '$2000'
    },
    {
      id: 3,
      path: 'job3',
      logo: GithubLogo,
      companyName: 'Github',
      position: 'Senior Backend Engineer',
      jobType: 'Fulltime',
      city: 'Beirut',
      country: 'Lebanon',
      workStyle: 'Hybrid',
      skills: ['Angular', 'Laravel', 'SQL'],
      datePosted: '5m',
      salary: '$2000'
    }
  ]

  const jobs = joblist.map((job) => (
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
        {jobs}
      </div>
    </div>
  )
}

export default Jobs
