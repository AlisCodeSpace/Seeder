import React from 'react'


const Input = ({ className, type, placeholder, value, id, name, handleChange, error }) => {
    const classes = `${className || ''} bg-transparent rounded-sm px-2 py-2 border text-primary placeholder-gray-500 w-full outline-none ${error ? 'border-red-700 text-red-700 focus:border-red-700' : 'border-gray-400 focus:border-primary'}`

    const renderInput = () => (
        <input 
            className={classes} 
            type={type} 
            placeholder={placeholder}
            value={value} 
            id={id} 
            name={name}  
            onChange={handleChange} 
            required 
        />  
    )


    return renderInput()
}

export default Input