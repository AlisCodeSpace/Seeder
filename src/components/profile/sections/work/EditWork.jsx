import React from 'react'

import Input from '../../../../ui/Input'
import { Textarea } from '@nextui-org/react'

const EditWork = ({ workExpDraft, setWorkExpDraft}) => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
            <label className='text-gray-700'>Company</label>
            <Input 
                placeholder='Company'
                value={workExpDraft[0].company}
                onChange={(e) => setWorkExpDraft(prev => [{...prev, company:e.target.value}])}
            />
        </div>

        <div className='flex flex-col gap-2'>
            <label className='text-gray-700'>Job Title</label>
            <Input 
                placeholder='Job Title'
                value={workExpDraft[0].position}
                onChange={(e) => setWorkExpDraft(prev => [{...prev, position:e.target.value}])}
            />
        </div>

        <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>
                <label className='text-gray-700'>Start Date</label>
                <Input 
                    placeholder='Start Date'
                    value={workExpDraft[0].startDate}
                    onChange={(e) => setWorkExpDraft(prev => [{...prev, position:e.target.value}])}
                />
            </div>

            <div className='flex flex-col gap-2'>
                <label className='text-gray-700'>End Date</label>
                <Input 
                    placeholder='End Date'
                    value={workExpDraft[0].endDate}
                    onChange={(e) => setWorkExpDraft(prev => [{...prev, position:e.target.value}])}
                />
            </div>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-gray-700'>Job Description</label>
            <Textarea
                isClearable
                className='text-primary'
                defaultValue={workExpDraft[0].description}
                onChange={(e) => setWorkExpDraft(prev => [{...prev, description:e.target.value}])}
                placeholder="Tell us about your job"
                variant="faded"
            />
        </div>
    </div>
  )
}

export default EditWork