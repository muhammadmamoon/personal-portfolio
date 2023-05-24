"use client";
import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import Link from "next/link";

interface navItem {
  label: string;
  page: string;
  id: string;
}

const Nav_Items: Array<navItem> = [
  {
    label: "Home",
    page: "home",
    id: "Home",
  },
  {
    label: "About",
    page: "about",
    id: "About",
  },
  {
    label: "Project",
    page: "project",
    id: "Project",
  },
  {
    label: "Skills",
    page: "skills",
    id: "Skills",
  },
  {
    label: "Services",
    page: "services",
    id: "Services",
  },
  {
    label: "Contact",
    page: "contact",
    id: "Contact",
  },
];

const Navebar = () => {
  const [nav, setnav] = useState(false);

  const handlenav = () => {
    setnav(!nav);
  };
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white flex w-full  fixed top-0 shadow-2xl justify-center text-[17px] px-4 z-10">
      <div className="w-full md:flex md:justify-center md:items-center">
        <div className="hidden md:flex space-x-5 md:py-5 mx-4 overflow-x-auto ">
          {Nav_Items.map((item, idx) => (
            <Link
              key={idx}
              className="hover:cursor-pointer hover:scale-105 hover:text-slate-600"
              onClick={() => handleScroll(item.id)} href={""}            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cv.pdf"
            className="hidden md:flex border border-[#ff4d41] px-4 py-1 text-[#ff4d41] rounded-[5px] items-center gap-2 hover:bg-[#ff4d41] hover:text-white transition duration-200"
            download={true}
          >
            Download CV
            <BsDownload />
          </Link>
        </div>

        <div className="md:hidden text-[24px] flex justify-end items-end py-2">
          <FiMenu onClick={handlenav} />
        </div>
      </div>
      {/* responsive navbar */}
      <div
        className={`${
          nav ? "md:hidden w-full h-screen fixed left-0 top-0 bg-black/70" : ""
        }`}
      >
        <div
          className={`${
            nav
              ? " w-[75%] sm:w-[60%] md:w-[45%] bg-white h-screen p-10 fixed left-0 top-0 ease-in duration-500"
              : "fixed left-[-100%] ease-in duration-500 top-0 p-10"
          }`}
        >
          <div className=" w-full flex justify-end ">
            <div
              onClick={handlenav}
              className=" right-0 rounded-full shadow-lg cursor-pointer"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          {/* nav buttons */}
          <div className=" md:hidden flex flex-col space-y-6 mt-[50px]  left-0">
            {Nav_Items.map((item, idx) => (
              <Link
                key={idx}
                className="hover:cursor-pointer hover:text-slate-600"
                onClick={() => handleScroll(item.id)} href={""}              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cv.pdf"
              className=" flex w-[170px] md:flex border border-[#ff4d41] px-4 py-1 text-[#ff4d41] rounded-[5px] items-center gap-2 hover:bg-[#ff4d41] hover:text-white transition duration-200"
              download={true}
            >
              Download CV
              <BsDownload />
            </Link>
          </div>
          {/* social media links */}
          <div className=" md:hidden justify-between w-full mt-8 border flex rounded-full shadow-lg shadow-gray-400 p-3 ">
          <Link href="https://github.com/muhammadmamoon?tab=repositories">
          <BsGithub size={25} className=" rounded-full cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-gray-400" />
        </Link>
        <Link href="https://www.instagram.com/muhammadmamoon771/?igshid=ZDdkNTZiNTM%3D">
          <BsInstagram size={25} className=" rounded-lg cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-gray-400" />
        </Link>
        <Link href="https://www.linkedin.com/in/muhammad-mamoon-a2460921a">
          <BsLinkedin size={25} className="rounded-full cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-gray-400" />
        </Link>
        <Link href="https://twitter.com/Muhamma11681671?t=slasZpM8Xs4NxyXzLOwL6A&s=09">
          <BsTwitter size={25} className="rounded-full cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-gray-400" />
        </Link>
        <Link href="https://api.whatsapp.com/send/?phone=9203152831169&text&type=phone_number&app_absent=0">
          <BsWhatsapp size={25} className="rounded-full cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-gray-400" />
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
