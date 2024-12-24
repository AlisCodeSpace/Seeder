import React, { useState } from 'react'

import { Search01Icon } from '../../../assets/icons/Icons'

const Search = () => {
  return (
    <div className='w-[14rem] bg-white p-2 rounded-md'>
      <div className='flex gap-2 items-center px-2'>
        <Search01Icon className='text-gray-600'/>
        <input type="text" placeholder='Search jobs' id='search' name='search' className='outline-none bg-transparent text-gray-800'/>
      </div>
    </div>
  )
}

export default Search
