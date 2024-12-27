import React from 'react'
import companyinfo from '../../data/companies'

import { ArrowRight02Icon, Linkedin01Icon, LinkSquare01Icon, SquareArrowRightDoubleIcon } from "../../assets/icons/Icons";
import { Link } from 'react-router-dom';


const CompanyInformation = () => {
  const company = companyinfo.find((c) => c.name === 'Google')

  const appProcess = company.applicationProcess.map((step, index) => (
    <span key={index} className='flex items-center gap-1 pr-1'>{step} {index < 3 && <ArrowRight02Icon color="text-gray-700"/>}</span>
  ))

  const openPositions = company.jobCategories.map((category, index) => (
    <li key={index} className='list-disc w-1/2 text-lg'>
      <div className='flex items-center justify-between'>
        {category} 
        <Link><SquareArrowRightDoubleIcon color="#ffffff" fill="#357960"/></Link>
      </div>
    </li>
  ))
  return (
    <div className='w-full flex flex-col px-4 gap-6'>
      {/* Company Socials*/}      
      <div className='flex flex-col gap-1'>
        {/* Work style and job type */}
        <div className='flex gap-1 items-center'>
            <LinkSquare01Icon className='text-gray-800'/>
            <div className='flex items-center gap-1'>
                <Link to={company.website} className='text-primary  px-2 py-1 rounded-md'>Visit Website</Link>
            </div>
        </div>
          
        {/* Salary */}
        <div className='flex gap-1 items-center'>
            <Linkedin01Icon />
            <div className='flex items-center gap-1'>
              <Link to={company.socialLinks.linkedin} className='text-[#0077b5] px-2 py-1 rounded-md'>LinkedIn</Link>
            </div>
        </div>
      </div>
      {/* About the company */}
      <div>
        <h1 className='text-2xl text-gray-800'>About the company</h1>
        <p className='text-gray-700 mt-2'>{company.about}</p>
      </div>

      {/* About the company */}
      <div>
        <h1 className='text-2xl text-gray-800'>Our Mission</h1>
        <p className='text-gray-700 mt-2'>{company.mission}</p>
      </div>

      {/* Application process */}
      <div>
        <h1 className='text-2xl text-gray-800'>Application Process</h1>
        <div className='text-gray-700 mt-2 flex flex-wrap'>{appProcess}</div>
      </div>

      {/* Application process */}
      <div>
        <h1 className='text-2xl text-gray-800'>We're Hiring</h1>
        <ul className='text-gray-700 mt-2 flex flex-col ml-4'>{openPositions}</ul>
      </div>
    </div>
  )
}

export default CompanyInformation