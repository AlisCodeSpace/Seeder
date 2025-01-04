import React, { useEffect, useState } from 'react'

import { AddCircleIcon, Edit01Icon, MinusSignCircleIcon } from '../../assets/icons/Icons'
import { motion } from 'framer-motion';

import { useGlobalContext } from '../../contexts/GlobalContexts';
import useToggle from '../../hooks/useToggle'


const ProfileSections = ({ icon, title, onOpen, children, setComponentTitle }) => {
    const { editProfile } = useGlobalContext()

    const [collapsed, toggleCollapse] = useToggle()

    useEffect(() => {
      toggleCollapse(!editProfile);
  }, [editProfile, toggleCollapse]);

  const handleEditClick = () => {
    onOpen();
    setComponentTitle(title);
  }
    
  return (
    <div className='w-full bg-white rounded-md px-4 py-3 overflow-hidden'>
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
                {collapsed ? (
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
        animate={{ height: collapsed ? 0 : "auto", opacity: collapsed ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mt-4'>
            <hr className='mb-3'/>
            <div className='w-full flex gap-3 justify-between items-start'>
              {children}
              {editProfile && <button onClick={handleEditClick}><Edit01Icon /></button>}
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileSections
