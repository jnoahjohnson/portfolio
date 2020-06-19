import { Link } from "gatsby";
import React, { useState } from "react";

//Image
import Logo from "../images/logo.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(true);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header
      className={`bg-almost-black transition-all duration-500 fixed top-0 left-0 h-screen ${
        isExpanded ? "w-56" : "w-0"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between flex-col max-w-4xl p-4 mx-auto  md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <img src={Logo} className="w-full" />
          </h1>
        </Link>

        <nav className="">
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
