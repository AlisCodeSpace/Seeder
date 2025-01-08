import React, { useState } from 'react'
import { Delete02Icon, FileDownloadIcon, FileUploadIcon } from '../../../../assets/icons/Icons'

import pdf from '../../../../assets/images/pdf.png'

const UploadResume = ({ resumeDraft, setResumeDraft}) => {
  const [error, setError] = useState('')

  const handleFileChange = (e) => {
    const uploadedCV = e.target.files[0]

    if (uploadedCV) {
      const maxSizeInMB = 5
      const fileSizeInMB = uploadedCV.size / (1024 * 1024)

      if (uploadedCV.type !== "application/pdf") {
        setError("Only PDF files are allowed!")
        return
      }

      if (fileSizeInMB > maxSizeInMB) {
        setError(`File size exceeds ${maxSizeInMB} MB!`)
        return
      }

      const formattedSize =
        fileSizeInMB >= 1
          ? `${fileSizeInMB.toFixed(2)} MB`
          : `${(uploadedCV.size / 1024).toFixed(0)} KB`;

      const formattedDate = new Date(uploadedCV.lastModified).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      const formattedTime = new Date(uploadedCV.lastModified).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      setResumeDraft({
        name: uploadedCV.name,
        size: formattedSize,
        lastModified: formattedDate,
        filePath: URL.createObjectURL(uploadedCV)
      });

      setError("");
    }
  }

  const handleRemoveFile = () => {
    setResumeDraft(null);
    setError("");
  };

  console.log('CV', resumeDraft)

  return (
    <div className='w-full'>

      <div>
        <label htmlFor="cv" className={`w-full py-6 border-dashed border-2 rounded-md border-gray-500  flex flex-col items-center justify-center gap-4 ${resumeDraft ? 'bg-gray-200': 'text-gray-700 '}`}>
          <div className='w-full flex gap-2 items-center px-6'>
            {resumeDraft ? <img src={pdf} width={48} alt='PDF'/> : <FileUploadIcon className="text-gray-700"/>}
            {resumeDraft ? 
              (<div className='flex flex-col gap-1'>
                <p className='text-sm font-medium text-gray-900'>{resumeDraft.name}</p>
                <p className='text-sm text-gray-500'>{resumeDraft.size} . {resumeDraft.lastModified} </p>
            </div>) : <span>Upload CV/Resume</span>}
          </div>
          {resumeDraft ? (
          <div className='flex justify-between items-center w-full px-6'>
            <a href={resumeDraft.filePath} download={resumeDraft.name} className='text-primary text-sm font-medium flex items-center gap-1'><FileDownloadIcon width={30} height={30} className='text-primary'/> Download CV</a>
            <button onClick={handleRemoveFile} className='text-red-700 text-sm'><Delete02Icon width={30} height={30}/></button>
          </div>) : null}
        </label>
        
        <input type="file" id='cv' disabled={resumeDraft} className='hidden' onChange={handleFileChange}/>  
      </div>

      {error && <p className='my-2 text-red-700'>{error}</p>}   
      
      <p className='text-gray-500 text-xs mt-4'>Upload files in PDF format up to 5 MB. Just upload it once and you can use it in your next application.</p>
    </div>
  )
}

export default UploadResume