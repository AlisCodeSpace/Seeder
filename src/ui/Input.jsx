import React from 'react'


const Input = ({ ref, className, type, placeholder, value, id, name, handleChange, error, onKeyDown }) => {
    const classes = `${className || ''} bg-transparent rounded-md px-2 py-2 border text-gray-700 placeholder-gray-500 w-full outline-none ${error ? 'border-red-700 text-red-700 focus:border-red-700' : 'border-gray-400 focus:border-gray-700'}`

    const renderInput = () => (
        <input 
            className={classes} 
            type={type} 
            placeholder={placeholder}
            value={value} 
            id={id} 
            name={name}  
            onChange={handleChange}
            ref={ref}
            onKeyDown={onKeyDown} 
            required 
        />  
    )


    return renderInput()
}

export default Input