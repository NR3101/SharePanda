"use client";

import { Files, Shield, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuList = [
  {
    id: 1,
    name: "Upload",
    icon: Upload,
    path: "/upload",
  },
  {
    id: 2,
    name: "Files",
    icon: Files,
    path: "/files",
  },
  {
    id: 3,
    name: "Upgrade",
    icon: Shield,
    path: "/upgrade",
  },
];

function SideNav({ closeSideBar }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow-sm border-r dark:border-gray-700 h-full dark:bg-gray-800">
      <div className="p-5 border-b dark:border-gray-700">
        <Link href={process.env.NEXT_PUBLIC_BASE_URL}>
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={150}
            height={100}
            style={{ height: "auto" }}
          />
        </Link>
      </div>

      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <Link key={index} href={item.path}>
            <button
              onClick={() => {
                setActiveIndex(index);
                closeSideBar();
              }}
              key={item.id}
              className={`flex gap-2 py-4 px-6 my-2 hover:bg-gray-100 w-full dark:hover:bg-gray-700 text-gray-500 dark:text-gray-300 rounded-md ${
                activeIndex === index
                  ? "bg-blue-50 dark:bg-blue-900 text-primary dark:text-blue-300"
                  : ""
              }`}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
