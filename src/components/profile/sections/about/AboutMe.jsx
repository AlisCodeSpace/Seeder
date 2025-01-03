import React, { useState } from 'react'

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque obcaecati, quis quisquam ad, autem, modi sunt molestias eveniet magnam voluptates natus nihil praesentium quia unde maiores. Voluptate, natus nisi.');
  return (
    <div>
        <p>{aboutMe}</p>
    </div>
  )
}

export default AboutMe