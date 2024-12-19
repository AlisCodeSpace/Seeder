import React, { useState } from 'react'

import { Search01Icon } from '../../assets/icons/Icons'

const SearchCompanies = () => {
  return (
    <div className='w-full p-2 rounded-md border border-primary'>
      <div className='flex gap-2 items-center px-2'>
        <Search01Icon className='text-primary'/>
        <input type="text" placeholder='Search Companies' className='outline-none bg-transparent text-primary placeholder:text-gray-500'/>
      </div>
    </div>
  )
}

export default SearchCompanies
