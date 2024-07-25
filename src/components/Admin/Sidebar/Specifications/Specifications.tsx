import React from 'react'
import SpecificationsImage from './SpecificationsImage'
import SpecificationsText from './SpecificationsText'
import Logout from './Logout'

function Specifications() {
  return (
    <div className='flex items-center gap-8 m-2 mt-5'>
      <SpecificationsImage/>
      <SpecificationsText/>
      <Logout/>

    </div>
  )
}

export default Specifications
