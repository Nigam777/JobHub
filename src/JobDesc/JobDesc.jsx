import React from "react";
import { IconAdjustments, IconArrowDown, IconBookmark } from "@tabler/icons-react";
import { ActionIcon, Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { card, skills, desc } from "../Data/JobDescData";

import DOMPurify from "dompurify";
const JobDesc = () => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className="w-2/2  mt-5 px-8 ">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-xl">
            <img src="../Icons/Google.png" alt="" className="h-9   w-9" />
          </div>
          <div>
            <div className="font-semibold text-2xl">Job Title</div>

            <div className="text-lg text-mine-shaft-300">
              Google &bull;3 Days Ago &bull; 48 Applications
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="Apply-Job">
            <Button size="sm" variant="light" color="brightSun.4">
              Apply Now
            </Button>
          </Link>

          <IconBookmark className="w-6 h-6 text-bright-sun-400 cursor-pointer" />
        </div>
      </div>
      <Divider my="xl" />

      <div className="flex justify-between ">
        {card.map((item, index) => (
          <div className="flex flex-col items-center gap-1">
            <ActionIcon
              className="!h-12 !w-12"
              color="brightSun.4"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-mine-shaft-300 text-sm">{item.name}</div>
            <div className="text-mine-shaft-300 font-semibold">
              {item.value}
            </div>
          </div>
        ))}
      </div>
      <Divider my="md" />
      <div>
        <div className="text-2xl font-semibold ">Required Skills</div>
        <div className="flex flex-wrap gap-2 mt-5">
          {skills.map((item, index) => (
            <ActionIcon
              className="!h-fit !w-fit"
              color="brightSun.4"
              p="xs"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div
        className="[&_h4]:text-xl [&_h4]:my-4 [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_h4]:font-semibold [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400  [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="md" />
      <div>
        <div className="text-2xl font-semibold mb-3">About Company</div>
        <div className="flex justify-between">
          <div className="flex gap-2  items-center ">
            <div className="p-2 bg-mine-shaft-800 rounded-xl">
              <img src="../Icons/Google.png" alt="" className="h-9   w-9" />
            </div>
            <div>
              <div className="font-semibold text-2xl">Google</div>
              <div className="font-semibold text-mine-shaft-300 text-sm">
                10k Employee
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Link to="Apply-Job">
              <Button size="sm" variant="light" color="brightSun.4">
                Company Page 
              </Button>
            </Link>

           
          </div>
        </div>
        <div className="text text-justify mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure consequuntur nostrum sunt incidunt quas, facilis ducimus facere repellendus, ratione maiores distinctio eum nemo perspiciatis at harum dolores dolorum earum?
          Eaque dolore temporibus reprehenderit veritatis cupiditate pariatur beatae eligendi exercitationem voluptas veniam sint a accusantium voluptatibus expedita eum iste nemo, ullam odio dignissimos animi omnis nam voluptatem. Delectus, alias hic?
          Repellat nostrum sapiente adipisci tempore enim saepe molestiae, quos, fugit quasi ea vel recusandae, ducimus maiores mollitia nulla consequatur animi aliquam voluptas repellendus dolor esse pariatur fuga. Vel, voluptatum ullam.
          Quisquam distinctio recusandae ea non officia natus provident sequi laudantium architecto adipisci dolore, dignissimos temporibus eveniet voluptatibus vero. Earum hic maiores nisi assumenda fugiat quas, tempora natus dolorum ad! Blanditiis!
          Accusamus libero inventore voluptates rerum! Nobis repellat numquam similique deleniti quis quas, quibusdam laudantium, sequi quod quaerat beatae sunt, voluptas veritatis culpa repellendus reiciendis dolorum rerum dolorem mollitia iste ratione?
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
