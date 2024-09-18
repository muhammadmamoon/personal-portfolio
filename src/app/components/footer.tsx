import Link from "next/link";
import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-4">
        {/* Name section */}
        <div className="text-center">
          <h1 className="text-yellow-500 text-xl md:text-2xl">
            Portfolio &copy; <span className="text-gray-400">Powered By</span>{" "}
            Muhammad Mamoon
          </h1>
        </div>
        {/* Icons section */}
        <div className="flex items-center justify-center gap-6">
          <Link href="https://github.com/muhammadmamoon?tab=repositories" passHref>
            <div
              aria-label="GitHub"
              className="transition-transform transform hover:scale-110 cursor-pointer"
            >
              <BsGithub className="h-6 w-6" />
            </div>
          </Link>
          <Link href="https://www.instagram.com/muhammadmamoon771/?igshid=ZDdkNTZiNTM%3D" passHref>
            <div
              aria-label="Instagram"
              className="transition-transform transform hover:scale-110 cursor-pointer"
            >
              <BsInstagram className="h-6 w-6" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-mamoon-a2460921a" passHref>
            <div
              aria-label="LinkedIn"
              className="transition-transform transform hover:scale-110 cursor-pointer"
            >
              <BsLinkedin className="h-6 w-6" />
            </div>
          </Link>
          <Link href="https://twitter.com/Muhamma11681671?t=slasZpM8Xs4NxyXzLOwL6A&s=09" passHref>
            <div
              aria-label="Twitter"
              className="transition-transform transform hover:scale-110 cursor-pointer"
            >
              <BsTwitter className="h-6 w-6" />
            </div>
          </Link>
          <Link href="https://api.whatsapp.com/send/?phone=9203152831169&text&type=phone_number&app_absent=0" passHref>
            <div
              aria-label="WhatsApp"
              className="transition-transform transform hover:scale-110 cursor-pointer"
            >
              <BsWhatsapp className="h-6 w-6" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
