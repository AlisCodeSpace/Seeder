import React, { useEffect } from 'react'
import SeederLogo from '../assets/images/Seeder.png'

const LoadingScreen = () => {
  useEffect(() => {
    console.log('Preloading...')
    const preloadImage = new Image();
    preloadImage.src = SeederLogo;
  }, []);
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <img src={SeederLogo} width={168} alt="Logo" />
            <h1 className='text-primary text-xl'>Seeding<span className='dot-animate'></span></h1>
        </div>
    </div>
  )
}

export default React.memo(LoadingScreen)