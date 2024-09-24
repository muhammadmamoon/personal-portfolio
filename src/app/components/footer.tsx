import Link from "next/link";
import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-4">
        {/* Name section */}
        <div className="text-center">
          <h1 className="text-yellow-500 text-xl md:text-2xl">
            Portfolio &copy;{" "}
            <span className="text-gray-400">Powered By</span>{" "}
            Muhammad Mamoon
          </h1>
        </div>
        {/* Icons section */}
        <div className="flex items-center justify-center gap-8">
          {[
            {
              href: "https://github.com/muhammadmamoon?tab=repositories",
              label: "GitHub",
              icon: <BsGithub className="h-8 w-8" />,
            },
            {
              href: "https://www.instagram.com/muhammadmamoon771/?igshid=ZDdkNTZiNTM%3D",
              label: "Instagram",
              icon: <BsInstagram className="h-8 w-8" />,
            },
            {
              href: "https://www.linkedin.com/in/muhammad-mamoon-a2460921a",
              label: "LinkedIn",
              icon: <BsLinkedin className="h-8 w-8" />,
            },
            {
              href: "https://twitter.com/Muhamma11681671?t=slasZpM8Xs4NxyXzLOwL6A&s=09",
              label: "Twitter",
              icon: <BsTwitter className="h-8 w-8" />,
            },
          ].map(({ href, label, icon }) => (
            <Link href={href} passHref key={label}>
              <div
                aria-label={label}
                className="transition-transform transform hover:scale-125 hover:text-yellow-500 cursor-pointer flex items-center justify-center"
              >
                {icon}
              </div>
            </Link>
          ))}
        </div>
        {/* Additional Information */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Muhammad Mamoon. All Rights Reserved.</p>
          <p>Follow me on social media!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
