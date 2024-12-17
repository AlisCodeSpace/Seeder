import React from 'react'

import { motion } from 'motion/react'

const Button = ({ className, text, type }) => {
    const buttonClasses = `${className || ''} py-2 px-4 bg-primary rounded-sm text-white transition-all duration-200 ease-in-out`

    const renderButton = () => (
        <motion.button whileTap={{ scale: 0.8, transition: 1 }} type={type} className={buttonClasses}>{text}</motion.button>
    )
  return renderButton(); 
}

export default Button
