import React from "react";
import { IconBell, IconFishHook, IconSettings } from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLinks from "./Navlinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const location = useLocation();

  return (
    location.pathname !== "/signup" &&
    location.pathname !== "/login" && (
      <div className="w-full bg-mine-shaft-950 h-28 text-white flex justify-between items-center px-6">
        {/* Logo Section */}
        <Link to={`/*`}>
          <div className="flex items-center text-bright-sun-400 hover:scale-105 transition-transform duration-300">
            <IconFishHook
              className="w-12 h-12 -mr-3 drop-shadow-lg"
              stroke={3}
            />
            <div className="text-4xl font-extrabold tracking-tight drop-shadow-md">
              obHunt
            </div>
          </div>
        </Link>

        {/* Link Section */}
        <NavLinks />

        {/* Profiles Section */}
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2">
            <ProfileMenu />
          </div>
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <IconSettings stroke={1.5} />
          </div>
          <Indicator processing color="red" offset={7} size={9}>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
              <IconBell stroke={1.5} />
            </div>
          </Indicator>
        </div>
      </div>
    )
  );
};

export default Header;
