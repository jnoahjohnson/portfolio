import React from "react";
import SectionLayout from "./section-layout";

const ContactSection = () => {
  return (
    <SectionLayout title="Contact Me">
      <h2 className="text-gray-700 text-lg mb-10">
        Feel free to send me a message if you have any questions or want to hire
        me for any project!
      </h2>
      <form
        name="new-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="bot-field" />
        <label
          className="block mb-2 text-xs font-bold uppercase"
          htmlFor="name"
        >
          Name
        </label>

        <input
          className="w-full mb-6 form-input"
          id="name"
          placeholder="John Johnson"
          name="name"
          type="text"
        />

        <label
          className="block mb-2 text-xs font-bold uppercase"
          htmlFor="email"
        >
          Email
        </label>

        <input
          className="w-full mb-6 form-input"
          id="email"
          name="email"
          placeholder="john@test.com"
          type="email"
        />

        <label
          className="block mb-2 text-xs font-bold uppercase"
          htmlFor="message"
        >
          Message
        </label>

        <textarea
          className="w-full mb-6 form-textarea"
          id="message"
          name="message"
          placeholder="Say something..."
          rows="8"
        />

        <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
          Submit
        </button>
      </form>
    </SectionLayout>
  );
};

export default ContactSection;
