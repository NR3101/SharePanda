import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

function TopHeader({ setToggleBar }) {
  return (
    <div
      className="flex p-5 border-b dark:border-gray-700 
    items-center justify-between
    md:justify-end dark:bg-gray-800"
    >
      <AlignJustify
        className="md:hidden text-gray-500 dark:text-gray-300"
        onClick={() => setToggleBar(true)}
      />
      <Image
        src="/logo.svg"
        alt="logo"
        width={150}
        height={100}
        className="md:hidden cursor-pointer"
      />
      <UserButton
        className="text-gray-500 dark:text-gray-300"
        afterSignOutUrl={process.env.NEXT_PUBLIC_BASE_URL}
      />
    </div>
  );
}

export default TopHeader;
