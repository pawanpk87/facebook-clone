import Image from "next/image";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { MdGroup, MdOutlineOndemandVideo, MdOutlineMore } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import SidebarItem from "./SidebarItem";
import { useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-xl cursor-pointer">
        <Image
          src={session?.user.image}
          width={60}
          height={60}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">
          {session?.user.name}
        </p>
      </div>
      <SidebarItem Icon={ImUsers} value="Friends" />
      <SidebarItem Icon={MdGroup} value="Groups" />
      <SidebarItem Icon={AiOutlineShop} value="Marketplace" />
      <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch" />
      <SidebarItem Icon={BsStopwatch} value="Memories" />
      <SidebarItem Icon={MdOutlineMore} value="Pages" />
    </div>
  );
}

export default Sidebar;
