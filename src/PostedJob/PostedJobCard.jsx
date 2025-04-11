import React from 'react'

const PostedJobCard = ({...props}) => {
  return (
    <div className='bg-mine-shaft-900  rounded-xl p-2 border-l-4 border-bright-sun-400 mt-3'>
      <div  className='font-semibold text-sm'>{props.jobTitle}</div>
      <div className='text-sm text-mine-shaft-300 font-medium'>{props.location}</div>
      <div className='text-sx text-mine-shaft-300 '>{props.posted}</div>
    </div>
  )
}

export default PostedJobCard
