import React, { useState } from 'react'

import { motion } from "motion/react"

import { Bookmark02Icon } from '../../assets/icons/Icons'

const Company= ({name, logo, founded, employees, headquarters, rating}) => {
  const [savedCompany, setSavedCompany] = useState(false)

  const handleSaveCompany = () => {
    setSavedCompany(prevState => !prevState)
  }
  return (
    <div className='bg-white rounded-md p-4 shadow'>
        <div className='flex justify-between'>
            <div className='flex gap-3'>
                <img src={logo} width={38} className='max-h-[38px]' alt="Company Logo" />
                <div className='flex flex-col'>
                  <span className='text-gray-900 font-medium text-lg'>{name}</span>
                  <span className='text-gray-700 text-sm'>{headquarters}</span>
                  <span className='text-gray-700 text-sm'>{employees} Employees</span>
                </div>
            </div>
            <div>
              <motion.button whileTap={{scale: 1.2}} className='z-50' onClick={handleSaveCompany}>
                <Bookmark02Icon fill={`${savedCompany ? '#357960' : 'transparent'}`} className={`${savedCompany ? 'text-primary' : 'text-gray-600'}`}/>
              </motion.button>
            </div>
        </div>
        {/* <div>
          <span>Rating: {rating}</span>
        </div> */}
    </div>
  )
}

export default Company