"use client"
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;
      const sectionIndex = Math.floor(scrollPosition / window.innerHeight);
      const isVibrateSection = (sectionIndex + 1) % 5 === 0;

      if (isVibrateSection && !isAnimating) {
        setIsAnimating(true);

        // Stop the animation after 2 seconds
        setTimeout(() => {
          setIsAnimating(false);
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAnimating]);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isAnimating ? 'animate-vibrate scale-110' : ''}`}>
      <Link href="https://api.whatsapp.com/send/?phone=9203152831169&text&type=phone_number&app_absent=0" passHref>
        <div className="flex items-center justify-center bg-green-500 text-white rounded-full p-3 shadow-lg transition-transform cursor-pointer">
          <BsWhatsapp className="h-6 w-6" />
        </div>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
