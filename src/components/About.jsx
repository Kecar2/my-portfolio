import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I consider myself someone who excels in teamwork, valuing collaboration and the ability to effectively work with others to achieve common goals. 
          My approach to cooperation is based on the belief that exchanging ideas and leveraging individual skills are fundamental to success in any project. 
          Additionally, I possess a strong sense of self-control, enabling me to maintain composure and mental clarity even in high-pressure situations.
        </p>

        <br />

        <p className="text-xl">
          My commitment to excellence is reflected in my determination to be an outstanding developer. 
          I strive to leverage my communication skills to foster clear and effective communication within work teams. 
          Similarly, my ability in planning and organization allows me to efficiently manage tasks and projects, maintaining a methodical and results-oriented approach.
        </p>
      </div>
    </div>
  );
};

export default About;