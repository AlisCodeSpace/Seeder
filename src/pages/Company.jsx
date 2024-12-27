import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import companies from '../data/companies'

import { LinkBackwardIcon } from '../assets/icons/Icons'
import { AnimatedButton } from '../ui/AnimatedButton'
import { motion } from 'framer-motion';

const tabs = ["About", "Jobs"];

const Company = () => {
    const { id } = useParams()
    const companyDetails = companies.find((comp) => comp.path === id)
    
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
        tabInfo = <JobDescription jobDetails={job}/>
    } else if (selectedTab === 'Company') {
        tabInfo = <CompanyInformation />
    }

    return (
        <div className='flex flex-col items-center h-auto w-full my-6'>
            <div className='flex justify-between items-center w-full px-6'>
                <Link to='/companies'><LinkBackwardIcon className='text-gray-700'/></Link>
            </div>

            <div className='flex flex-col items-center mt-6 gap-1'>
                <img src={companyDetails.logo} width={64} alt={`${companyDetails.companyName} Logo`} />
                <div className='mt-2'>
                    <h1 className='text-gray-900 font-medium text-xl text-center'>{companyDetails.name}</h1>
                    <span className='text-gray-600'>{companyDetails.headquarters}</span>
                </div>
                <div className='flex gap-2 mt-2'>
                    <AnimatedButton />
                </div>
            </div>

            <div className='relative self-start mt-14 w-full'>
                <ul className='pl-4 flex gap-2'>
                    {renderTabs}
                </ul>
                <hr className='bg-gray-400 w-full'/>
            </div>
   
        </div>
    )
}

export default Company