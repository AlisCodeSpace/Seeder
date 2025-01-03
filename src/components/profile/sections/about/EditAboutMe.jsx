import React from 'react'

import {Textarea} from "@nextui-org/react";

const EditAboutMe = () => {
  return (
    <div>
        <Textarea
            isClearable
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            placeholder="Tell us about yourself"
            variant="faded"
        />
    </div>
  )
}

export default EditAboutMe