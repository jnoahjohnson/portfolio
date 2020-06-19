import PropTypes from "prop-types";
import React, { useState, useLayoutEffect } from "react";
import { Link } from "gatsby";

//Image
import Logo from "../images/logo.png";

//Other Componenets
import SocialIcons from "./social-icons";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
    easing: "easeInOutQuad",
    offset: 40,
  });
}

function Layout({ children }) {
  const [isExpanded, toggleExpansion] = useState(true);

  useLayoutEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      toggleExpansion(false);
    } else {
      toggleExpansion(true);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <header
        className={`bg-almost-black transition-all duration-500 fixed top-0 left-0 h-screen z-50 pt-5 ${
          isExpanded ? "w-64" : "w-0"
        }`}
      >
        <div
          className={`flex flex-wrap items-center relative justify-between h-full flex-col max-w-4xl p-4 mx-auto md:pt-8 md:px-4 pt-12  ${
            isExpanded ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="mt-3">
            <button
              className="flex items-center block px-3 py-2 text-white md:hidden absolute top-0 right-0 mr-5"
              onClick={() => toggleExpansion(!isExpanded)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <Link to="/">
              <h1 className="flex items-center text-white no-underline">
                <img src={Logo} className="w-full" />
              </h1>
            </Link>

            <nav className="mt-8">
              {[
                {
                  route: `/#home`,
                  title: `Home`,
                  icon: `
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-home"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  `,
                },
                {
                  route: `/#current-projects`,
                  title: `Projects`,
                  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
                },
                {
                  route: `/#about`,
                  title: `About Me`,
                  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
                },
                {
                  route: `/#contact`,
                  title: `Contact`,
                  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
                },
              ].map((link) => (
                <Link
                  className="block mt-4 no-underline text-xl mb-4 pl-8 font-header font-semibold text-white"
                  key={link.title}
                  to={link.route}
                >
                  <div className="rounded-sm transition duration-500 flex flex-column items-center hover:text-gray-500">
                    <div
                      dangerouslySetInnerHTML={{ __html: link.icon }}
                      className="mr-5"
                    />
                    <div className="text-xl">{link.title}</div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          <div className="mb-2">
            <SocialIcons />
          </div>
        </div>
      </header>

      <main
        className={`flex-1 relative w-100 transition-all duration-500 ${
          isExpanded ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="absolute top-0 left-0 ">
          <button
            className="bg-white p-1 rounded rounded focus:outline-none fixed text-almost-black ml-6 mt-6 transition duration-300 hover:bg-gray-400"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <div>{children}</div>
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
