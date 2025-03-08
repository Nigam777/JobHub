import React from 'react';
import { fields } from '../Data/PostJob';
import SelectInput  from './SelectInput'; // Ensure
import { TagsInput } from '@mantine/core';
import { Button } from '@mantine/core';
import TextEditor from './TextEditor'; // Ensure

const PostJob = () => {
 const select=fields;
  return (
    <div className="w-4/5 mx-auto">
      <div className="text-3xl font-semibold mb-5 mt-6">Post a <span className='text-bright-sun-400'>Job</span></div>
      <div className="flex gap-10 [&>*]:w-1/2 ">
       <SelectInput {...select[0]} />
       <SelectInput {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2 ">
       <SelectInput {...select[2]} />
       <SelectInput {...select[3]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2 ">
       <SelectInput {...select[4]} />
       <SelectInput {...select[5]} />
      </div>
      <TagsInput withAsterisk label="Skills" placeholder="Enter Skills..."  splitChars={ [', ',' ','|'] } clearable acceptValueOnBlur/>
      <div className='[&_button[data-active="true"]]:!text-bright-sun-400 [&_button[data-active="true"]]:!bg-bright-sun-400/20'>
   <div  className='text-2xl font-semibold mb-5 mt-3'>Job Description <span className='text-red-700 ' >*</span></div>
   <TextEditor />
      </div>
      <div className='flex gap-5 mt-5'>
        <Button variant='light' color='brightSun.4'>Post Job</Button>
        <Button  variant='outline' color='brightSun.4'  >Save as Draft</Button>
      </div>
      
      
    </div>
  );
};

export default PostJob;
