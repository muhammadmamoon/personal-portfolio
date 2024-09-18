import React from "react";
import Heading from "./heading";

const Contact = () => {
  return (
    <section id="Contact" className="mx-auto py-12 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
      <Heading title="Contact Me" />

      <form
        action="https://formspree.io/f/xrgvvzon"
        method="POST"
        className="flex flex-col w-full max-w-md sm:max-w-lg bg-white shadow-lg rounded-lg p-6"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff4D41] transition duration-200"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff4D41] transition duration-200"
            required
            autoComplete="off"
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone"
            className="border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff4D41] transition duration-200"
            required
            autoComplete="off"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows={6}
            className="border-gray-300 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff4D41] transition duration-200"
            required
            autoComplete="off"
          ></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <input
            type="submit"
            value="Submit"
            className="bg-[#ff4D41] text-white py-2 px-6 rounded-lg font-medium border border-[#ff4D41] hover:bg-transparent hover:text-[#ff4D41] transition duration-200"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
