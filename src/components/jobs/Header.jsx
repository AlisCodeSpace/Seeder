import React, { useState } from 'react'

import Profile_Img from '../../assets/images/profile_img.png'
import Search from './header/Search'
import { ImageWithTextSkeleton } from '../../skeletons/ImageWithText'
import Background from '../../assets/images/Background.png'

const Header = () => {
  const [loaded, setLoaded] = useState(false) 
  return (
    <div  style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className='relative rounded-b-3xl px-4 w-full pt-4 flex flex-col gap-8 h-[240px]'>
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