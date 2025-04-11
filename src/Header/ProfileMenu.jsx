import React from "react";

import { Menu, Button, Text } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconFileText,
  IconOutlet,
  IconLogout2,
} from "@tabler/icons-react";
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";

function ProfileMenu() {
  return (
    <Menu shadow="md" width={260} >
      <Menu.Target>
        <div className="flex cursor-pointer  items-center gap-2">
          <Avatar
            src={
              "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          />

          <div>Nigam</div>
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
         <Link to="/profile_page">
         <Menu.Item leftSection={<IconUserCircle size={14} />}>Profile</Menu.Item>
         </Link>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>Resume</Menu.Item>
       

        <Menu.Divider />


        <Menu.Item color="red" leftSection={<IconLogout2 size={14} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default ProfileMenu;
