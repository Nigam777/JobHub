import React from 'react'
import { Divider } from '@mantine/core'
import PostedJob from '../PostedJob/PostedJob'
import PostedJobDesc from "../PostedJob/PostedJobDesc";
const PostedJobPages = () => {
  return (
    <div>
            <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
              <Divider size="sm" mx="md" />
    
               <div className='flex gap-5 w-full'>
                   <PostedJob />
                   <div className='w-3/4'>
                    <PostedJobDesc/>
                   </div>
               </div> 
            </div>
          
          </div>
  )
}

export default PostedJobPages;
