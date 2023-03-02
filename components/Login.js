import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="flex flex-col items-center mx-auto">
      <Image
        src="/facebook-logo.png"
        width={100}
        height={100}
        className="rounded-full cursor-pointer"
      />
      <a
        onClick={signIn}
        className="px-14 py-2 z-10 text-2xl cursor-pointer  bg-blue-600 rounded-md text-white"
      >
        Login
      </a>
    </div>
  );
}

export default Login;
