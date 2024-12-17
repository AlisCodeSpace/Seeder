import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import GoogleLogo from '../../assets/images/google.png'
import GithubLogo from '../../assets/images/github.png'
import JobDescription from './jobdetails/JobDescription';
import CompanyInformation from './jobdetails/CompanyInformation';

import { LinkBackwardIcon } from '../../assets/icons/Icons';


const joblist = [
    {
      id: 1,
      path: 'job1',
      logo: GoogleLogo,
      companyName: 'Google',
      position: 'Junior Web Developer',
      jobType: 'Intern',
      city: 'Dearborn',
      country: 'USA',
      workStyle: 'Remote',
      skills: ['React', '.NET', 'SQL'],
      datePosted: '1d',
      salary: '$1200',
      about: 'We are seeking skilled and motivated individuals with minimum 3-5 years of experience for multiple positions as Software Engineers and Developers. This is your opportunity to secure an evolutive career path with a SMART salary scheme, tailored to your relevant experience and aligned with the wider market.',
      responsibilities: ['Strong knowledge of Java programming, with a deep understanding of Object Oriented design methodologies and design patterns, also using version control tools like Git', 'Proficiency in Spring Boot, Hibernate, RESTful APIs and Microservices', 'Exposure to Database Management Systems in one or more of the following DB systems: MySQL, MS SQL, Oracle DB, and MongoDB', 'Understanding of Linux and hands-on experience with Apache technologies like Tomcat and Maven'],
      skills: ['HTML', 'CSS', 'React', 'SQL', 'Laravel', 'Tailwind', 'Cloud']
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
      salary: '$2000',
      about: 'We are seeking skilled and motivated individuals with minimum 3-5 years of experience for multiple positions as Software Engineers and Developers. This is your opportunity to secure an evolutive career path with a SMART salary scheme, tailored to your relevant experience and aligned with the wider market.',
      responsibilities: ['Strong knowledge of Java programming, with a deep understanding of Object Oriented design methodologies and design patterns, also using version control tools like Git', 'Proficiency in Spring Boot, Hibernate, RESTful APIs and Microservices', 'Exposure to Database Management Systems in one or more of the following DB systems: MySQL, MS SQL, Oracle DB, and MongoDB', 'Understanding of Linux and hands-on experience with Apache technologies like Tomcat and Maven'],
      skills: ['HTML', 'CSS', 'React', 'SQL', 'Laravel', 'Tailwind', 'Cloud']
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
      salary: '$2000',
      about: 'We are seeking skilled and motivated individuals with minimum 3-5 years of experience for multiple positions as Software Engineers and Developers. This is your opportunity to secure an evolutive career path with a SMART salary scheme, tailored to your relevant experience and aligned with the wider market.',
      responsibilities: ['Strong knowledge of Java programming, with a deep understanding of Object Oriented design methodologies and design patterns, also using version control tools like Git', 'Proficiency in Spring Boot, Hibernate, RESTful APIs and Microservices', 'Exposure to Database Management Systems in one or more of the following DB systems: MySQL, MS SQL, Oracle DB, and MongoDB', 'Understanding of Linux and hands-on experience with Apache technologies like Tomcat and Maven'],
      skills: ['HTML', 'CSS', 'React', 'SQL', 'Laravel', 'Tailwind', 'Cloud']
    }
]

const JobDetails = () => {
    const { id } = useParams()
    const job = joblist.find((job) => job.path === id)

    if (!job) return <p>Job not found!</p>

    const [selectedTab, setSelectedTab] = useState("Description");

    const tabs = ["Description", "Company"];

    const renderTabs = tabs.map((tab) => (
        <li
            key={tab}
            className={`text-center cursor-pointer py-2 px-2 relative transition ease-in-out duration-300 ${
            selectedTab === tab ? "text-primary font-medium" : "text-gray-600"
            }`}
            onClick={() => setSelectedTab(tab)}
        >
        {tab}
        {selectedTab === tab && (
          <motion.div
            className="absolute bottom-0 h-[2px] bg-primary w-full"
            layoutId="underline" // layoutId enables smooth shared layout animations
            style={{
                left: `${tabs.indexOf(selectedTab)}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth spring animation
          />
        )}
      </li>
    ))   

    

    let tabInfo;

    if (selectedTab === 'Description') {
        tabInfo = <JobDescription jobDetails={job}/>
    } else if (selectedTab === 'Company') {
        tabInfo = <CompanyInformation />
    }

    return (
        <div className='flex flex-col justify-center items-center h-auto w-full mt-16'>
            <Link to='/jobs' className='absolute -top-10 left-6'><LinkBackwardIcon className='text-gray-800'/></Link>
            <div>
                <img src={job.logo} width={64} alt={`${job.companyName} Logo`} />
            </div>
            <div className='flex flex-col mt-4 gap-1'>
                <h1 className='text-2xl text-gray-800 font-medium'>{job.position}</h1>
                <p className='text-gray-600 text-center'>{job.city}, {job.country}</p>
            </div>
            <div className='relativeself-start mt-14 w-full'>
                <ul className='pl-4 flex'>
                    {renderTabs}
                </ul>
                <hr className='bg-gray-400 w-full'/>
            </div>
            <div className='self-start pl-4 mt-4 w-full'>
                {tabInfo}
            </div>
        </div>
    )
}

export default JobDetails