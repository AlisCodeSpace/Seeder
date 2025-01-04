import React from 'react'

const WorkExperience = ({ workExp }) => {
    const renderWorkExperiences = workExp.map((work, index) => (
        <li key={index} className='flex flex-col gap-1'>
            <div className='flex items-center gap-2 text-gray-900'>
                <span className='text-sm '>{work.company}</span>
                <div className='bg-gray-800 rounded-full w-[2px] h-[2px]'/>
                <span className='text-sm'>{work.position}</span>
            </div>
            <span className='text-sm text-gray-700'>{work.startDate} - {work.endDate}</span>
        </li>
    ))
  return (
    <div>
        <ul className='flex flex-col gap-3 list-disc'>
            {renderWorkExperiences}
        </ul>
    </div>
  )
}

export default WorkExperience