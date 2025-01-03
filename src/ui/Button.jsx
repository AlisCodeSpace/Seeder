import React from 'react'

import { motion } from 'motion/react'

const Button = ({ className, type, children, handleClick }) => {
  const buttonClasses = `${className || ''} flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-all duration-200 ease-in-out`

  const renderButton = () => (
    <motion.button whileTap={{ scale: 0.8, transition: 1 }} onClick={handleClick} type={type} className={buttonClasses}>{children}</motion.button>
  )
  
  return renderButton(); 
}

export default Button
