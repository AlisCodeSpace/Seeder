import React from 'react'
import Input from '../../../../ui/Input'
import { Textarea } from '@nextui-org/react'

const EditEducation = ({ educationDraft, setEducationDraft }) => {
  return (
    <div>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='degree' className='text-gray-700'>Level of Education</label>
                <Input 
                    id='degree'
                    placeholder='Degree'
                    value={educationDraft[0].degree}
                    handleChange={(e) => setEducationDraft(prev => [{...prev, degree:e.target.value}])}
                />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='institution' className='text-gray-700'>Institution</label>
                <Input 
                    id='institution'
                    placeholder='Institution'
                    value={educationDraft[0].institution}
                    handleChange={(e) => setEducationDraft(prev => [{...prev, institution:e.target.value}])}
                />
            </div>

            <div className='flex gap-2'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='startDate' className='text-gray-700'>Start Date</label>
                    <Input 
                        id='startDate'
                        placeholder='Start Date'
                        value={educationDraft[0].startDate}
                        handleChange={(e) => setEducationDraft(prev => [{...prev, startDate:e.target.value}])}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='endDate' className='text-gray-700'>End Date</label>
                    <Input 
                        id='endDate'
                        placeholder='End Date'
                        value={educationDraft[0].endDate}
                        handleChange={(e) => setEducationDraft(prev => [{...prev, endDate:e.target.value}])}
                    />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='description' className='text-gray-700'>Description</label>
                <Textarea
                    id='description'
                    isClearable
                    className='text-gray-700'
                    defaultValue={educationDraft[0].description}
                    onChange={(e) => setEducationDraft(prev => [{...prev, description:e.target.value}])}
                    placeholder="Tell us about your university experience"
                    variant="faded"
                />
            </div>
        </div>
    </div>
  )
}

export default EditEducation