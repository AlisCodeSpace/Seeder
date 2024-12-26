import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom';


import JobDescription from '../components/jobs/jobdetails/JobDescription';
import CompanyInformation from '../components/jobs/jobdetails/CompanyInformation';

import { motion } from 'framer-motion';
import { Bookmark02Icon } from '../assets/icons/Icons'

import { LinkBackwardIcon } from '../assets/icons/Icons';

import joblist from '../data/joblist'
import { AnimatedButton } from '../ui/AnimatedButton';
import { useGlobalContext } from '../contexts/GlobalContexts';


const JobDetails = () => {
    const { id } = useParams()
    const job = joblist.find((job) => job.path === id)
    if (!job) return <p>Job not found!</p>

    const { savedJob, toggleSaveJob } = useGlobalContext()

    const [selectedTab, setSelectedTab] = useState("Description");

    const tabs = ["Description", "Company"];

    const renderTabs = tabs.map((tab) => (
        <li
            key={tab}
            className={`text-center cursor-pointer py-2 px-1 relative transition ease-in-out duration-300 ${
            selectedTab === tab ? "text-primary font-medium" : "text-gray-600"
            }`}
            onClick={() => setSelectedTab(tab)}
        >
        {tab}
        {selectedTab === tab && (
          <motion.div
            className="absolute bottom-0 h-[2px] bg-primary w-full rounded-full"
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
        <div className='flex flex-col items-center h-auto w-full my-6'>
            <div className='flex justify-between items-center w-full px-6'>
                <Link to='/jobs'><LinkBackwardIcon className='text-gray-700'/></Link>
                <motion.button whileTap={{scale: 1.2}} className='z-50' onClick={toggleSaveJob}>
                    <Bookmark02Icon fill={`${savedJob ? '#357960' : 'transparent'}`} className={`${savedJob ? ' text-primary' : 'text-gray-700'}`}/>
                </motion.button>
            </div>

            <div className='flex flex-col items-center mt-6 gap-1'>
                <img src={job.logo} width={64} alt={`${job.companyName} Logo`} />
                <h1 className='text-2xl text-gray-800 font-medium'>{job.position}</h1>
                <p className='text-gray-600 text-center'>{job.companyName} - {job.city}, {job.country}</p>
                <div className='mt-2'>
                    <AnimatedButton />
                </div>
            </div>

            <div className='relative self-start mt-14 w-full'>
                <ul className='pl-4 flex gap-2'>
                    {renderTabs}
                </ul>
                <hr className='bg-gray-400 w-full'/>
            </div>

            <div className='self-start mt-4 w-full'>
                {tabInfo}
            </div>    
        </div>
    )
}

export default JobDetails