import React from 'react'
import SpecificationsImage from './SpecificationsImage'
import SpecificationsText from './SpecificationsText'

function Specifications() {
  return (
    <div className='flex items-center gap-8 m-2 mt-5'>
      <SpecificationsImage/>
      <SpecificationsText/>
    </div>
  )
}

export default Specifications
