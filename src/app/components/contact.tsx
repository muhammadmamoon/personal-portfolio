import React from "react";
import Heading from "./heading";
import Button from "../button";
import { send } from "process";

const Contact = () => {
  return (
    <section id="Contact" className="mx-auto flex flex-col items-center py-10 px-4">
      <Heading title="Contact Me" />

      <form action="https://formspree.io/f/xrgvvzon" method="POST" className=" flex flex-col w-[300px] sm:w-[500px] ml-8 mr-8">
        <div className=" flex flex-col gap-4">
            <input type="text" name="name"  placeholder="Full Name" className=" border-gray-400 border rounded-[5px] px-3 py-2 " required autoComplete="off"/>
            <input type="Email" name="email"  placeholder="Email" className=" outline-[#ff4D41] border-gray-400 border rounded-[5px] px-3 py-2 " required autoComplete="off" />
            <input type="text" name="number"  placeholder="Phone" className=" border-gray-400 border rounded-[5px] px-3 py-2 " required autoComplete="off"/>
        <textarea placeholder="Message" name="message" rows={6} className="outline-[#ff4D41] border-gray-400 border rounded-[5px] px-3 py-2" required autoComplete="off"></textarea>
        </div>
        
        <div className=" flex justify-center">
          
        <input type="submit" value="Submit" className="text-[#ff4d41] py-2 px-4 hover:bg-[#ff4d41] rounded inline-block mt-10 font-medium border border-[#ff4d41] hover:text-white hover: bg-transparent   transition duration-200" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
 