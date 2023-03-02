import Image from "next/image";
import React from "react";

function Contacts({ name, src, status }) {
  return (
    <div className="flex items-center space-x-3 py-2 pl-1 hover:bg-gray-200 rounded-xl cursor-pointer relative">
      <Image
        src={src}
        width={30}
        height={20}
        className="rounded-full cursor-pointer"
      />
      <p className="hidden sm:inline-flex text-sm">{name}</p>
      {status === "Online" ? (
        <div className="bg-green-500 h-3 w-3 rounded-full absolute left-5 bottom-2 border-2"></div>
      ) : (
        <div className="bg-gray-500 h-3 w-3 rounded-full absolute left-5 bottom-2 border-2"></div>
      )}
    </div>
  );
}

export default Contacts;
