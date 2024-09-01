import React from 'react'
import { ImSpinner9 } from 'react-icons/im'

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <ImSpinner9 className="animate-spin" />
    </div>
  )
}

export default Loading