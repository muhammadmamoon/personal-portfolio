"use client";
import React, { useState, useEffect } from "react";
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
  const [scrolling, setScrolling] = useState(false);

  const handlenav = () => {
    setnav(!nav);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollEvent = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div className={`fixed top-0 w-full z-10 ${scrolling ? "bg-[rgba(255,255,255,0.5)] backdrop-blur-md" : "bg-white shadow-2xl"}`}>
      <div className="flex items-center justify-between px-4 py-2">
        {/* Hamburger Menu for Small Devices */}
        <div className={`md:hidden text-[24px] flex items-center py-2 ${scrolling ? "text-white" : ""}`}>
          <FiMenu onClick={handlenav} />
        </div>
        
        {/* Navbar Items for Large Devices */}
        <div className="hidden md:flex md:justify-center md:items-center md:space-x-5 flex-grow">
          {Nav_Items.map((item, idx) => (
            <Link
              key={idx}
              className="hover:bg-gray-800 hover:text-white px-4 py-2 rounded transition duration-200"
              onClick={() => handleScroll(item.id)}
              href={""}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cv.pdf"
            className="border border-[#ff4d41] px-4 py-1 text-[#ff4d41] rounded-[5px] flex items-center gap-2 hover:bg-[#ff4d41] hover:text-white transition duration-200"
            download={true}
          >
            Download CV
            <BsDownload />
          </Link>
        </div>
      </div>

      {/* Responsive Navbar */}
      <div className={`md:hidden ${nav ? "w-full h-screen fixed left-0 top-0 bg-black/70" : ""}`}>
        <div className={`${
            nav
              ? "w-[75%] sm:w-[60%] md:w-[45%] bg-white h-screen p-10 fixed left-0 top-0 ease-in duration-500"
              : "fixed left-[-100%] ease-in duration-500 top-0 p-10"
          }`}
        >
          <div className="w-full flex justify-end">
            <div
              onClick={handlenav}
              className="cursor-pointer rounded-full shadow-lg"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex flex-col space-y-6 mt-10">
            {Nav_Items.map((item, idx) => (
              <Link
                key={idx}
                className="hover:bg-gray-800 hover:text-white px-4 py-2 rounded transition duration-200"
                onClick={() => handleScroll(item.id)}
                href={""}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cv.pdf"
              className="flex w-[170px] border border-[#ff4d41] px-4 py-1 text-[#ff4d41] rounded-[5px] items-center gap-2 hover:bg-[#ff4d41] hover:text-white transition duration-200"
              download={true}
            >
              Download CV
              <BsDownload />
            </Link>
          </div>
          <div className="flex justify-between w-full mt-8 border rounded-full shadow-lg shadow-gray-400 p-3">
            <Link href="https://github.com/muhammadmamoon?tab=repositories">
              <BsGithub size={25} className="rounded-full cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-gray-400" />
            </Link>
            <Link href="https://www.instagram.com/muhammadmamoon771/?igshid=ZDdkNTZiNTM%3D">
              <BsInstagram size={25} className="rounded-lg cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-gray-400" />
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
