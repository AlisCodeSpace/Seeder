import React, { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

import { EmailValidation } from '../utils/Validations'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState("");

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
        setEmailError('')
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields on submit
        const validatedEmail = EmailValidation(email);

        setEmailError(validatedEmail !== true ? validatedEmail : "");

        // If all validations pass, handle form submission
        if (
            validatedEmail === true 
        ) {
            console.log("Form Submitted:", {
            email: email,
            });
            setEmailError("");
        }
    };
  return (
    <div className='container flex items-center justify-center px-10 w-full h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <h1 className='text-primary text-3xl font-semibold text-center'>Forgot Your Password?</h1>
            <p className='text-center text-gray-600'>Don't worry! We'll get your account back for you. We'll send a verification code to your email if it exists.</p>

            <div className='w-full'>
                <Input type='email' placeholder='Email' value={email} handleChange={handleEmailInput} error={emailError}/>
                {emailError && <p className='text-red-700 text-xs mt-2 '>{emailError}</p>}
            </div>

            <div className='flex items-center justify-between w-full'>
                <Button text='Send Code'/>
                <Link to='/login' className='link text-gray-800'>Back to login</Link>
            </div>
        </form>
    </div>
  )
}

export default ForgotPassword
