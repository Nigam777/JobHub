import React from "react";
import { jobList } from "../Data/JobsData";
import JobCards from "../FindJobs/JobCards";

const RecommendedJobs = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-semibold p-4 ">
        Recommended <span className="text-bright-sun-400">Jobs</span>
      </div>
      <div className="mx-5  flex flex-col gap-y-4">
        {jobList.slice(0, 3).map((item, index) => (
          <JobCards key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedJobs;
