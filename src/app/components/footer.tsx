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
    <section className=" mx-auto flex flex-col items-center justify-center gap-y-4  bg-slate-400 h-28">
      {/* Name section */}
      <div className="">
        <h1 className=" flex text-yellow-500 md:text-2xl">
          Portfolio&copy; <h1 className=" text-slate-500">Powred By</h1>{" "}
          Muhammad Mamoon
        </h1>
      </div>
      {/* icons section */}

      <div className=" flex items-center justify-center gap-5">
      <Link href="https://github.com/muhammadmamoon?tab=repositories">
          <BsGithub size={25} className=" cursor-pointer md:h-6 md:w-6" />
        </Link>
        <Link href="https://www.instagram.com/muhammadmamoon771/?igshid=ZDdkNTZiNTM%3D">
          <BsInstagram size={25} className="  cursor-pointer md:h-6 md:w-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/muhammad-mamoon-a2460921a">
          <BsLinkedin size={25} className="cursor-pointer md:h-6 md:w-6" />
        </Link>
        <Link href="https://twitter.com/Muhamma11681671?t=slasZpM8Xs4NxyXzLOwL6A&s=09">
          <BsTwitter size={25} className="cursor-pointer md:h-6 md:w-6" />
        </Link>
        <Link href="https://api.whatsapp.com/send/?phone=9203152831169&text&type=phone_number&app_absent=0">
          <BsWhatsapp size={25} className="  cursor-pointer md:h-6 md:w-6" />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
