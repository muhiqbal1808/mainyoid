"use client";

import Image from "next/image";
import Link from "next/link";
import MenuItems from "./MenuItems";
import LoginButton from "./LoginButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="bg-black flex text-white justify-between p-4 items-center sticky top-0 z-50">
      <div className="">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo-Only.png" width={30} height={30} alt="..."></Image>
          <h1 className="hidden sm:block">MainYo Indonesia</h1>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <MenuItems />
        </div>
        <div>
          <LoginButton />
        </div>
        <div className="sm:hidden">
          <div className="">
            <button
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <GiHamburgerMenu className="text-3xl" />
            </button>
          </div>
          <div
            className={`absolute bg-black top-0 min-h-screen w-full transition-all ${
              !isNavExpanded ? "-right-full" : "right-0"
            } `}
          >
            <div className="">
              <button
                className="absolute top-7 w-full hover:scale-105 transition-all"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <IoMdClose className="text-3xl absolute w-full" />
              </button>
              <div
                onClick={() => {
                  setIsNavExpanded(false);
                }}
                className=""
              >
                <MenuItems className="" />
              </div>
              <div className=" absolute bottom-3 left-6">
                <p className="text-xs">@MainYo Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
