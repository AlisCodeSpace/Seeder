import React, { useState } from 'react'

import { Search01Icon } from '../../../assets/icons/Icons'

const Search = () => {
  return (
    <div className='w-[14rem] bg-white p-2 rounded-lg'>
      <div className='flex gap-2 items-center px-2'>
        <Search01Icon className='text-gray-600'/>
        <input type="text" placeholder='Search jobs' className='outline-none bg-transparent text-gray-800'/>
      </div>
    </div>
  )
}

export default Search
