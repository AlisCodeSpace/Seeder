import React from 'react'

import {Textarea} from "@nextui-org/react";

const EditAboutMe = ({ aboutMeDraft, setAboutMeDraft }) => {
  return (
    <div>
        <Textarea
          isClearable
          className='text-primary'
          defaultValue={aboutMeDraft}
          onChange={(e) => setAboutMeDraft(e.target.value)}
          placeholder="Tell us about yourself"
          variant="faded"
        />
    </div>
  )
}

export default EditAboutMe