import React from "react";

import { ControllerIcon, PCIcon, PersonIcon, GamepadCrossIcon, ChartIcon, PieChartIcon, ArchiveResearchIcon, ElephantIcon, BookPileIcon } from "../assets"



const About = () => {
  return (
    <div
      id="About"
      className="mt-24 pr-5 lg:mx-60 items-center justify-center w-full lg:w-2/3 text-justify"
    >
      <div>
        <div className="table">
          <code className="table-cell text-[#f6e7de] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#f6e7de] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#f6e7de] text-lg mt-5 mr-5 ml-5">
          <code className="">
          I am a full-stack developer with over 6 years of experience in software development. My interest are in the field of game design and gamification of serious games to enhance user experience.  Within this field, I have contributed to the design and gamification phases of various projects throughout development. 

          I am also a Human-Computer Interaction researcher, with over 3 years of academic studies done in the field.

          Additionally, I have great interest in data analysis and its application in different areas, I have experience in the use of machine learning and big data tools and frameworks. 

          I am a efficient when it comes to gaining new programming skills and learning new languages, my strengths include problem solving, responsive design principles, user experience optimization, academic research and creating scalable and maintainable code.          </code>

          <br />
          <br />

          <code>My main work areas</code>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 text-m mt-5 text-[#768a88]">
            <div className="flex flex-row mb-3">
              <img
                src={ControllerIcon}
                alt="Controller Icon"
                className="h-10 w-10 ml-3 mr-4 text-yellow_vs"
              />
              <code className="mt-1 text-left text-[#FFA17A]">Game Design & Development</code>
            </div>

            <div className="flex flex-row mb-3">
              <img
                src={PCIcon}
                alt="PC Icon"
                className="h-10 w-10 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-left mt-1 text-[#FFA17A]">Full-Stack Development</code>
            </div>

            <div className="flex flex-row mb-3">
              <img
                src={PersonIcon}
                alt="Person Icon"
                className="h-10 w-10 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-left mt-1 text-[#FFA17A]">Human-Computer Interaction</code>
            </div>

            <div className="flex flex-row mb-3">
              <img
                src={GamepadCrossIcon}
                alt="Gamepad Cross Icon"
                className="h-10 w-10 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-left mt-1 text-[#FFA17A]">Gamification</code>
            </div>

            <div className="flex flex-row  mb-3">
              <img
                src={ChartIcon}
                alt="Chart Icon"
                className="h-10 w-10 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-left mt-1 text-[#FFA17A]">Data Science</code>
            </div>


            <div className="flex flex-row mb-3">
              <img
                src={PieChartIcon}
                alt="Pie Chart Icon"
                className="h-10 w-10 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-left mt-1 text-[#FFA17A]">Data Visualisation</code>
            </div>

            <div className="flex flex-row  mb-3">
              <img
                src={ArchiveResearchIcon}
                alt="Archive Research Icon"
                className="h-10 w-10 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-left mt-1 text-[#FFA17A]">UX Research</code>
            </div>


            <div className="flex flex-row mb-3">
              <img
                src={ElephantIcon}
                alt="Elephant Icon"
                className="h-10 w-10 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-left mt-1 text-[#FFA17A]">Big Data</code>
            </div>


            <div className="flex flex-row mb-3">
              <img
                src={BookPileIcon}
                alt="Book Pile Icono"
                className="h-10 w-10 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-left mt-1 text-[#FFA17A]">Academic Research</code>
            </div>
            
          </div>

          <br />
          <br />

        </div>
      </div>
    </div>
  );
};

export default About;
