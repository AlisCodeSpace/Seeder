import React, { useEffect, useState } from 'react'

import { AddCircleIcon, MinusSignCircleIcon, UserEdit01Icon } from '../../assets/icons/Icons'
import { motion } from 'framer-motion';

import { useGlobalContext } from '../../contexts/GlobalContexts';
import useToggle from '../../hooks/useToggle'
import { use } from 'react';


const ProfileInputs = ({ icon, title }) => {
    const { editProfile } = useGlobalContext()
    const [collapsed, toggleCollapse] = useToggle()
    const [aboutMe, setAboutMe] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque obcaecati, quis quisquam ad, autem, modi sunt molestias eveniet magnam voluptates natus nihil praesentium quia unde maiores. Voluptate, natus nisi.');

    useEffect(() => {
      if (editProfile) {
        toggleCollapse(true)
      } else {
        toggleCollapse(false)
      }
    }, [editProfile])
    
  return (
    <div className='w-full bg-white rounded-md px-6 py-3 overflow-hidden'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
            <span>{React.createElement(icon)}</span>
            <span className='text-primary'>{title}</span>
        </div>
        <div>
        <button onClick={toggleCollapse} className="relative">
            <motion.div
                key={collapsed} // Re-renders animation when collapsed changes
                initial={{ rotate: -90 }}
                animate={{ rotate: !collapsed ? 0 : 180 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-block"
            >
                {!collapsed ? (
                <AddCircleIcon className="text-brown" />
                ) : (
                <MinusSignCircleIcon className="text-brown" />
                )}
            </motion.div>
         </button>
        </div>
      </div>
      <motion.div 
        className='overflow-hidden'
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: collapsed ? "auto" : 0, opacity: collapsed ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mt-4'>
            <hr className='mb-3'/>
            <textarea
              className='w-full text-gray-800 resize-none focus:outline-none bg-transparent'
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              disabled={!editProfile}
              rows={6}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            />
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileInputs
