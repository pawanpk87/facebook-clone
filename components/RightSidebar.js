import React from "react";
import { CgMoreAlt } from "react-icons/cg";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import Contacts from "./Contacts";

function RightSidebar() {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <RiVideoAddFill />
          </div>

          <div className="rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <CgMoreAlt />
          </div>

          <div className="rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <BiSearch />
          </div>
        </div>
      </div>
      <Contacts
        src={
          "https://images.pexels.com/photos/15571361/pexels-photo-15571361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        name={"Pawan Kumar"}
        status="Online"
      />

      <Contacts
        src={
          "https://images.pexels.com/photos/13789573/pexels-photo-13789573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        name={"Piyush"}
        status="Offline"
      />

      <Contacts
        src={
          "https://images.pexels.com/photos/13756008/pexels-photo-13756008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        name={"Sandeep Kumar"}
        status="Online"
      />

      <Contacts
        src={
          "https://images.pexels.com/photos/4737509/pexels-photo-4737509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        name={"Prem"}
        status="Online"
      />
    </div>
  );
}

export default RightSidebar;
