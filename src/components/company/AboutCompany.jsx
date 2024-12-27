import React from 'react'
import { Link } from 'react-router-dom'

const AboutCompany = ({ companyDetails }) => {
  return (
    <div className='px-4 flex flex-col gap-4'>
        <div>
            <h2 className='h2'>About</h2>
            <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore repellat voluptatem amet culpa quibusdam eligendi porro, libero, nobis, vero a quidem. Quisquam voluptates ex nostrum omnis ipsa, illo eum.</p>
        </div>

        <div>
            <h2 className='h2 mb-1'>Company Website</h2>
            <Link to={companyDetails.website} className='text-primary'>{companyDetails.website}</Link>
        </div>

        <div>
            <h2 className='h2'>Industry</h2>
            <p className='text-gray-700 mt-1'>{companyDetails.industry}</p>
        </div>

        <div>
            <h2 className='h2'>Number of Employee</h2>
            <p className='text-gray-700 mt-1'>{companyDetails.employees}</p>
        </div>

        <div>
            <h2 className='h2'>Since</h2>
            <p className='text-gray-700 mt-1'>{companyDetails.founded}</p>
        </div>
    </div>
  )
}

export default AboutCompany