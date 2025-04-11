import React from "react";
import { Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";

const PostedJobDesc = () => {
  return (
    <div className="">
      <div className="mt-16 ">
        <div className="text-2xl font-semibold flex items-center">
          Software Engineer
        </div>
        <div className="font=medium text-mine-shaft-300 mb-5">
          New York,UnitedStates
        </div>
        <div>
          <div className="">
            <Tabs radius="lg" defaultValue="overview" variant="outline">
              <Tabs.List className="[&_button]:text-xl font-semibold  [&_button[data-active='true']]:text-bright-sun-400   ">
                <Tabs.Tab value="overview" className="[&>div]:w-full">
                  Overview
                </Tabs.Tab>
                <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                <Tabs.Tab value="Invited">Invited</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="overview">
                <JobDesc />
              </Tabs.Panel>
              <Tabs.Panel value="Employees"></Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedJobDesc;
