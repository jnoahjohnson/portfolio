import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section
        className="h-screen w-full text-white bg-violet flex flex-col justify-center px-4 md:px-10 lg:pl-20"
        id="home"
      >
        <h1 className="text-5xl font-bold">Thank you for contacting me!</h1>
        <p className="text-xl mb-5">
          I will be sure to get back to you soon. If there is anything time
          sensitive email me at jnoahjohnson@gmail.com
        </p>
        <Link to="/">
          <p className="font-bold hover:text-gray-400">Go Back Home</p>
        </Link>
      </section>
    </Layout>
  );
}

export default ContactPage;
