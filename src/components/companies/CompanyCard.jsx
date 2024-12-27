import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { AnimatedButton } from '../../ui/AnimatedButton';

const CompanyCard= ({name, logo, path}) => {
  return (
    <div className='bg-white rounded-md p-4 shadow w-[180px]'>
        <div className=''>
            <div className='flex justify-center items-center flex-col gap-3'>
                <Link to={`/companies/${path}`} className='flex flex-col items-center gap-2'>
                  <img src={logo} width={38} className='max-h-[38px]' alt="Company Logo" />
                  <div className='flex flex-col items-center'>
                    <span className='text-gray-900 font-medium text-lg'>{name}</span>
                    <span className='text-gray-500 text-sm'>1M Followers</span>
                  </div>
                </Link>
                <div className='mt-1'>
                  <AnimatedButton />
                </div>
            </div>
        </div>

    </div>
  )
}

export default CompanyCard