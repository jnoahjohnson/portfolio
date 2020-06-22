import React from "react";
import PropTypes from "prop-types";

const SectionLayout = ({ children, title }) => {
  return (
    <div className="md:px-20 md:text-left text-center mt-20">
      <h1 className="text-5xl text-violet">{title}</h1>
      <div>{children}</div>
    </div>
  );
};

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default SectionLayout;
