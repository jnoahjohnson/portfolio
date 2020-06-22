import React from "react";
import ProjectCard from "./project-components/project-card";
import SectionLayout from "./section-layout";

import harryPotterImage from "../images/harry-potter.png";
import shotboxImage from "../images/shotbox.png";
import eightSenseImage from "../images/8Sense.png";
import calculatorImage from "../images/calculator.png";

const CurrentProjects = () => (
  <SectionLayout title="Projects">
    <h2 className="text-gray-700 text-lg mb-10">
      Here are some of the projects that I am working on or have completed in
      the past
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </div>
  </SectionLayout>
);

const projects = [
  {
    id: 2,
    title: "Competition Site",
    simpleDescription:
      "A Harry Potter themed website for a community competition.",
    description: "A local group wanted a webstie to track ",
    technologies: "JavaScript, HTML, CSS, PHP",
    image: harryPotterImage,
  },
  {
    id: 3,
    title: "SHOTBOX Website",
    simpleDescription: "E-commerce store for SHOTBOX built on Shopify.",
    description:
      "During a college class, I made an order of operations calculator using vanilla JavaScript",
    technologies: "HTML, Liquid, JavaScript, Shopify",
    image: shotboxImage,
  },
  {
    id: 4,
    title: "Meditation Timer",
    simpleDescription: "A timer built for 8Sense Meditation.",
    description: "",
    technologies: "Flutter, Firebase",
    image: eightSenseImage,
  },
  {
    id: 1,
    title: "JavaScript Calculator",
    simpleDescription:
      "An order of operations alculator using vanilla JavaScript",
    description:
      "During a college class, I made an order of operations calculator using vanilla JavaScript",
    technologies: "JavaScript, HTML, CSS",
    image: calculatorImage,
  },
];

export default CurrentProjects;
