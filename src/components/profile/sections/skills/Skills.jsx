import React from 'react'

const Skills = ({ skills }) => {
  return (
    <div>
        <ul className='flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
                <li key={index} className='bg-gray-200 px-2 py-1 rounded-md text-gray-800 text-sm'>
                    {skill}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Skills