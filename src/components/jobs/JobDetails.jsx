import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import JobDescription from './jobdetails/JobDescription';
import CompanyInformation from './jobdetails/CompanyInformation';

import { LinkBackwardIcon } from '../../assets/icons/Icons';

import joblist from '../../data/joblist'

const JobDetails = () => {
    const { id } = useParams()
    const job = joblist.find((job) => job.path === id)

    if (!job) return <p>Job not found!</p>

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
        <div className='flex flex-col justify-center items-center h-auto w-full mt-16 my-8'>
            <Link to='/jobs' className='absolute top-6 left-6'><LinkBackwardIcon className='text-gray-800'/></Link>
            
            <div>
                <img src={job.logo} width={64} alt={`${job.companyName} Logo`} />
            </div>
            <div className='flex flex-col mt-4 gap-1'>
                <h1 className='text-2xl text-gray-800 font-medium'>{job.position}</h1>
                <p className='text-gray-600 text-center'>{job.companyName} - {job.city}, {job.country}</p>
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