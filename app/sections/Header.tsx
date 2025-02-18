import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <header className="sticky top-0 p-4 text-center shadow-sm flex items-center justify-between bg-white px-8">
      <div className=" text-3xl font-semibold cursor-pointer">Dashboard</div>
      <div className="flex items-center gap-2 cursor-pointer">
        <Image
          src="/profile/profile01.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="h-full flex items-center gap-2 text-2xl font-semibold">
          <span>Anna Watson</span>
          <span>
            <IoIosArrowDown />
          </span>
        </div>
      </div>
    </header>
  );
}
