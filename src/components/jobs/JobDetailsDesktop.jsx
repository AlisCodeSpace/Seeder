import React, { useState } from 'react'
import NoJobSelected from '../../assets/images/Illustrasi.png'
import { Link, useParams } from 'react-router-dom'
import joblist from '../../data/joblist'
import JobDescription from '../jobdetails/JobDescription'
import CompanyInformation from '../jobdetails/CompanyInformation'

import useToggle from '../../hooks/useToggle';

import { motion } from 'framer-motion';
import { Bookmark02Icon, LinkBackwardIcon } from '../../assets/icons/Icons'
import { AnimatedButton } from '../../ui/AnimatedButton'

const tabs = ["Description", "Company"];

const JobDetailsDesktop = () => {
    const { id } = useParams()
    const jobDetails = joblist.find((job) => job.path === id)

    const [savedJob, toggleSaveJob] = useToggle()
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

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
        tabInfo = <JobDescription jobDetails={jobDetails}/>
    } else if (selectedTab === 'Company') {
        tabInfo = <CompanyInformation />
    }


  return (
    <div className='scroll relative bg-white rounded-md shadow-md w-2/5 flex justify-center items-center'>
        {!jobDetails ? (
        <div className='flex flex-col items-center gap-5'>
            <img src={NoJobSelected} width={256} alt="No Job Image"/>
            <div className=''>
                <h2 className='h2 text-center mb-1'>No Job Selected</h2>
                <p className='text-gray-700 text-center'>Select a job to view its details here</p>
            </div>
        </div>
        ) :
        (
        <div className='flex flex-col items-center w-full my-6'>
            <div className='flex flex-col items-center mt-6 gap-1'>
                <img src={jobDetails.logo} width={64} alt={`${jobDetails.companyName} Logo`} />
                <h2 className='h2 font-medium'>{jobDetails.position}</h2>
                <p className='text-gray-600 text-center'>{jobDetails.companyName} - {jobDetails.city}, {jobDetails.country}</p>
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
        )}
    </div>
 
  )
}

export default JobDetailsDesktop