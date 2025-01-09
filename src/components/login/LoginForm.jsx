import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '../../ui/Button'
import Input from '../../ui/Input'

import { ViewIcon, ViewOffSlashIcon } from '../../assets/icons/Icons'
import { HandleLogin } from '../../utils/LoginHandler'
import { useDispatch } from 'react-redux'
import { useApiRequestMutation } from '../../reducers/auth/authApiSlice'
import useToggle from '../../hooks/useToggle'


const LoginForm = () => {
  const [showPassword, toggleShowPassword] = useToggle(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [apiRequest] = useApiRequestMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    HandleLogin({ email, password, setError, apiRequest, dispatch, navigate })
    setEmail('')
    setPassword('')
    setError('')
  }

  return (
    /* Login Form */
    <div className='flex flex-col items-center gap-10 w-full lg:gap-8'>
        <h1 className='text-3xl font-medium text-gray-800 lg:text-2xl'>Login to your <span className='text-primary '> Seeder </span>account</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5 w-full'>
          {/* Username input */}
          <Input 
            type='email' 
            placeholder='Email' 
            id='email' 
            name='email' 
            error={error} 
            handleChange={(e) => setEmail(e.target.value)}
          />
         

          {/* Password */}
          <div className='relative w-full'>
              <Input 
                type={`${showPassword ? 'text' : 'password'}`} placeholder='Password' 
                id='password' 
                name='password' 
                error={error} 
                handleChange={(e) => setPassword(e.target.value)}
              />
              <button type='button' onClick={toggleShowPassword} className='absolute top-3 right-5 text-primary'>{showPassword ? <ViewIcon />  : <ViewOffSlashIcon />}</button>
          </div>

          {/* Forgot Password */}
          <div className='flex items-center justify-end w-full'>
              <Link to='/forgotpass' className='link text-gray-800 text-lg'>Forgot Password?</Link>
          </div>

          {/* Submit Button */}
          <Button type='submit' className='w-full bg-primary text-white'>Login</Button>

          <p className='text-gray-600 text-center text-xs'>By continuing, you agree to the Seeder <Link className='intext-link'>User Agreement</Link>, <Link className='intext-link'>Privacy Policy</Link>, and <Link className='intext-link'>Cookie Policy</Link>.</p>
          
        </form>  
    </div>
  )
}

export default LoginForm
