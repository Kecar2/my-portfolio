import React from "react";

import github from "../assets/github.png";
import sql from "../assets/sql.png";
import docker from "../assets/docker.png";
import python from "../assets/python.png";
import amazon from "../assets/amazon.png";
import powerBI from "../assets/powerBI.png";
import sap from "../assets/sap.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: sql,
      title: "SQL",
      style: "shadow-green-500",
    },
    {
      id: 2,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: docker,
      title: "Docker",
      style: "shadow-cyan-300",
    },
    {
      id: 4,
      src: amazon,
      title: "Amazon Redshift",
      style: "shadow-red-400",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: powerBI,
      title: "Power BI",
      style: "shadow-amber-300",
    },
    {
      id: 7,
      src: sap,
      title: "SAP",
      style: "shadow-slate-50",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;