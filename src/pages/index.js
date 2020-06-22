import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

//Elements
import CurrentProjects from "../components/current-projects";
import AboutSection from "../components/about-section";
import ContactSection from "../components/contact-section";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`noah johnson`, `portfolio`, `developer`, `web`]}
        title="Home"
      />
      <section
        className="h-screen w-full text-white bg-violet flex flex-col justify-between px-4 md:px-10 lg:pl-20"
        id="home"
      >
        <div></div>
        <div className="mt-6">
          <h1 className="text-6xl">Welcome!</h1>
          <p className="text-xl">
            I&apos;m Noah Johnson, a front-end web developer.<br></br> Check out
            my projects and contact me if I can help you with anything.
          </p>
        </div>

        <div className="text-white self-center pl-0 mb-3 block">
          <p className="text-lg">See More</p>
          <Link to="/#current-projects" className="hover:shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-4 hover:shadow"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </Link>
        </div>
      </section>
      <section id="current-projects">
        <CurrentProjects />
      </section>
      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
      {/* <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section> */}
      <section className="mt-10 bg-violet text-white py-8 text-center">
        <h1 className="text-gray-300 font-light">Have a great day!</h1>
      </section>
    </Layout>
  );
}

export default IndexPage;
