import React from 'react'
import { Tabs } from '@mantine/core'
import  {activeJobs} from '../Data/PostedJob'
import  PostedJobCard from './PostedJobCard'
import PostedJobDesc from './PostedJobDesc'
const PostedJob = () => {
  return (
    <div className='w-1/6 mt-6 '>
      <div className='text-2xl font-semibold mb-5'>Jobs</div>
      <div className=''>
      <Tabs autoContrast variant='pills' defaultValue="active"  >
     
      <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium mx-5 ">
       
        <Tabs.Tab value="active">Active[4]</Tabs.Tab>
        <Tabs.Tab value="draft">Drafts[1]</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="active">
        <div className='flex flex-col gap-2 p-2'>
          {
            activeJobs.map((item,index) =>(
              <PostedJobCard key={index} {...item}/>
            ))
          }
        </div>
      </Tabs.Panel>
    </Tabs>
      </div>
      
    </div>
  )
}

export default PostedJob
