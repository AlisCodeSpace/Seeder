import React, { useState } from 'react'

import Profile_Img from '../../assets/images/profile_img.png'
import Plant from '../../assets/images/plant.png'
import Search from './header/Search'
import { ImageWithTextSkeleton } from '../../skeletons/ImageWithText'

const Header = () => {
  const [loaded, setLoaded] = useState(false) 
  return (
    <div className='relative bg-primary w-full h-[200px] pl-4 pt-4 flex flex-col gap-8'>
        <img src={Plant} width={156} alt="Plant" className='absolute right-0 bottom-5'/>
        {!loaded && <ImageWithTextSkeleton />}
        <div className={`gap-2 items-center ${loaded ? 'flex' : 'hidden'}`}>
            <div className='max-w-[64px] overflow-hidden rounded-full'>
                <img src={Profile_Img} alt="profile image" onLoad={() => setLoaded(true)}/>
            </div>
            <div>
                <span className='text-white font-light text-xs'>Welcome back!</span>
                <h2 className='text-white font-medium'>Ali Anani</h2>
            </div>
        </div>
        <div>
            <Search />
        </div>
    </div>
  )
}

export default Header