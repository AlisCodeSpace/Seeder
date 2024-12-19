import React, { useState } from 'react'

import { motion } from "motion/react"

import { Bookmark02Icon } from '../../assets/icons/Icons'

const Company= ({name, logo, founded, employees, headquarters, rating}) => {
  const [savedCompany, setSavedCompany] = useState(false)

  const handleSaveCompany = () => {
    setSavedCompany(prevState => !prevState)
  }
  return (
    <div className='bg-white rounded-md p-4'>
        <div className='flex justify-between'>
            <div className='flex gap-3'>
                <img src={logo} width={32} className='max-h-[32px]' alt="Company Logo" />
                <div className='flex flex-col'>
                  <span className='font-medium text-lg'>{name} - {founded}</span>
                  <span>{headquarters}</span>
                  <span>{employees} Employees</span>
                </div>
            </div>
            <div>
              <motion.button whileTap={{scale: 1.2}} className='z-50' onClick={handleSaveCompany}>
                <Bookmark02Icon fill={`${savedCompany ? '#357960' : 'transparent'}`} className={`${savedCompany ? ' text-primary' : 'text-gray-600'}`}/>
              </motion.button>
            </div>
        </div>
        <div>
          <span>Rating: {rating}</span>
        </div>
    </div>
  )
}

export default Company