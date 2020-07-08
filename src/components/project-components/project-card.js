import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ data }) => {
  return (
    <div className="rounded-md shadow-md py-2 px-4 flex flex-row h-64">
      <div
        style={{ backgroundImage: `url(${data.image})` }}
        className="w-1/3 h-full bg-cover rounded-t bg-center mb-2 rounded-md"
      ></div>
      <div className="w-2/3 pr-2 pl-4 py-4 text-right select-none flex flex-col justify-between h-full">
        <div>
          <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{data.simpleDescription}</p>
          {data.link ? (
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="text-violet hover:text-gray-700"
            >
              Check it Out
            </a>
          ) : null}
        </div>
        <p>{data.technologies}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
