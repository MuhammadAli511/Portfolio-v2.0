import { motion } from "framer-motion";
import React from 'react';
import { projects } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I've worked on so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Projects.
        </h2>

        <div className="flex flex-wrap justify-center mt-8">
          {projects.map((project, index) => (
            <div
              className="m-4 max-w-sm rounded overflow-hidden shadow-lg"
              key={index}
              style={{ backgroundColor: "#1d1836" }} // Set the background color here
            >
              <img className="w-full" src={project.image} alt={project.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-200 text-base">{project.description}</p>
              </div>
              <div className="px-6 py-4 flex items-center">
                {project.links.map((link, linkIndex) => (
                  <a
                    href={link.url}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    key={linkIndex}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Works;
