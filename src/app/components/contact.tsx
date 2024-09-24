import React from "react";
import Heading from "./heading";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="mx-auto py-12 px-4 sm:px-8 lg:px-16 flex flex-col items-center"
    >
      <Heading title="Contact Me" />

      <form
        action="https://formspree.io/f/xrgvvzon"
        method="POST"
        className="flex flex-col w-full max-w-md sm:max-w-lg bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff4D41] transition duration-200 hover:shadow-md"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff4D41] transition duration-200 hover:shadow-md"
            required
            autoComplete="off"
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff4D41] transition duration-200 hover:shadow-md"
            required
            autoComplete="off"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows={6}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff4D41] transition duration-200 hover:shadow-md"
            required
            autoComplete="off"
          ></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <input
            type="submit"
            value="Submit"
            className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
