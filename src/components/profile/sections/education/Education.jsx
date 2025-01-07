import React from 'react'

const Education = ({ education }) => {
  return (
    <div>
      <ul className='flex flex-col gap-3 list-disc'>
        {education.map((edu, index) => (
          <li key={index} className='flex flex-col gap-1'>
            <div className='flex flex-col gap-1'>
              <span className='font-medium text-gray-900'>{edu.institution}</span>
              <span className='text-sm text-gray-800'>{edu.degree}</span>
            </div>
            <span className='text-sm text-gray-700'>{edu.startDate} - {edu.endDate}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education