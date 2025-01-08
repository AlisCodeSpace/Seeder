import React from 'react'

import pdf from '../../../../assets/images/pdf.png'

const Resume = ({ resume }) => {
  return resume ? (
    <a href={resume.filePath} download={resume.name} className='flex items-center gap-1'>
        <div>
            <img src={pdf} width={48} alt='PDF'/>
        </div>

        <div className='flex flex-col gap-1'>
            <p className='text-sm font-medium text-gray-900'>{resume.name}</p>
            <p className='text-sm text-gray-500'>{resume.size} . {resume.lastModified}</p>
        </div>
    </a>
  ) : (<div>No Resume Uploaded</div>)
}

export default Resume