import React from "react";
import { IconBookmark, IconClock } from "@tabler/icons-react";
import { Divider } from "@mantine/core";
import { Link } from "react-router-dom";

const JobCards = ({ jobTitle, company, applicants, experience, jobType, location, salary, postedDaysAgo, description }) => {
  return (
    <Link  to="/job" className="border  border-slate-700 mt-4 p-4 w-80 flex flex-col gap-2 rounded-xl  m-4     bg-mine-shaft-900">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img src={`../Icons/${company}.png`} alt="" className="h-7   w-7" />
          </div>
          <div>
            <div className="font-semibold">{jobTitle}</div>

            <div className="text-xs text-mine-shaft-300">
             {company} &#x2022; {applicants} Applications{" "}</div>
          </div>
        </div>
        <IconBookmark className="w-6 h-6 text-bright-sun-400 cursor-pointer"  />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-md [&>div]:text-bright-sun-400 [&>div]:text-xs">
        <div>{jobType}</div>
        <div>{location}</div>
        <div>{experience}</div>
      </div>
      <div lineClamp={3} className="text-sx text-mine-shaft-300 text-center" >
      {description}
      </div>
      <Divider size="sm" mx="md"  />
      <div className="flex justify-between">
        <div>{salary|| "Salary is Not Disclosed"}</div>
        
        
        <div className="flex  items-center gap-1 text-xs" >
          <IconClock className="h-5 w-5" stroke={1.2}/>
          {postedDaysAgo} Days Ago
        </div>
      </div>
    </Link>
  );
};

export default JobCards;
