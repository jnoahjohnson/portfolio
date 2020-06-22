import React from "react";
import SectionLayout from "./section-layout";

import profileImage from "../images/profilePicture.png";

const AboutSection = () => {
  return (
    <SectionLayout title="About Me">
      <img
        src={profileImage}
        alt="A photo of me!"
        className="mx-auto w-32 h-32 mt-2 mb-2"
      />
      <h1 className="text-4xl text-gray-800 mb-1 text-center">Hello!</h1>
      <div className="h-px w-10 bg-violet mx-auto mb-3"></div>
      <div className="text-xl text-center max-w-screen-md mx-auto px-2">
        <p className="mb-4">
          My name is Noah Johnson and I have been passionate about web
          development for many years now. I currently am going to school at
          Brigham Young University with a plan to study information systems.
        </p>
        <p className="font-semibold">
          I have worked on personal projects as well as with companies to create
          websites, apps, and more. Reach out to me if there is anything I can
          do for you!
        </p>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
