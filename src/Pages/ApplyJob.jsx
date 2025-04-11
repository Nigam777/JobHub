import React from 'react'
import { IconArrowLeft } from '@tabler/icons-react'
import { Button } from '@mantine/core'
import { Divider } from '@mantine/core'
import ApplyJobComp from '../ApplyJobs/ApplyJobComp'
import { Link } from 'react-router-dom'

const ApplyJob = () => {
  return (
    <div>
      <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <Divider size="sm" mx="md" />
        <Link className="p-4 mr-6 inline-block" to={"/job"}>
          <Button
            leftSection={<IconArrowLeft />}
            variant="outline"
            color="brightSun.4"
          >
            {" "}
            Back
          </Button>
        </Link>
       
       
        <ApplyJobComp/>
      </div>
    </div>
  )
}

export default ApplyJob

