import React, { useState } from 'react'
import Input from '../../../../ui/Input'
import { Cancel01Icon, Search01Icon } from '../../../../assets/icons/Icons'

const EditSkills = ({ skillsDraft, setSkillsDraft}) => {
  const [newSkill, setNewSkill] = useState('');
  const removeSkill = (skillToRemove) => {
    setSkillsDraft((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const addSkill = () => {
    if (newSkill.trim() && !skillsDraft.includes(newSkill)) {
      setSkillsDraft((prevSkills) => [...prevSkills, newSkill]);
      setNewSkill('')
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='relative'>
        <div className='absolute top-2 left-2'><Search01Icon className='text-gray-700'/></div>
        <Input placeholder="Search Skills" className='pl-10' handleChange={(e) => setNewSkill(e.target.value)} onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addSkill()
          }
        }}/>
      
      </div>

      <ul className='flex flex-wrap gap-2'>
        {skillsDraft.map((skill, index) => (
          <li key={index} className='relative bg-gray-200 px-2 py-1 rounded-md text-gray-800 flex items-center gap-3'>
            {skill}
            <button onClick={() => removeSkill(skill)}  className='flex items-center justify-center text-lg text-gray-900'><Cancel01Icon /></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EditSkills