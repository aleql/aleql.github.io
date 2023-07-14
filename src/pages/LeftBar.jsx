import React, { useState } from "react";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { AiFillEye, AiFillGithub, AiFillLinkedin, AiOutlineFileSearch } from "react-icons/ai";
import { DiUnitySmall } from "react-icons/di";
import { FaChartPie } from "react-icons/fa"
import { HiChartPie } from "react-icons/hi"


const LeftBar = ({setShowPage}) => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);
  const [showArticleList, SetShowArticleList] = useState(false);

  const WebList = () => (
    <div>
      <a onClick={() => {
            setShowPage("eyesearch");
          }}>
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <AiFillEye className="w-7 mr-1 ml-5 fill-white"/>
          <p>Eye-Search</p>
        </div>
      </a>
      <a onClick={() => {
            setShowPage("visualisations");
          }}>
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <HiChartPie                       className="w-7 mr-1 ml-5 fill-white"/>
          <p>Visualisations</p>
        </div>
      </a>
      <a rel="noreferrer noopener" target="_blank" href="https://github.com/aleql/HexagonalGrid">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <DiUnitySmall className="w-7 mr-1 ml-5 fill-white" />
          <p>Hexagonal Navigation</p>
        </div>
      </a>
      <a onClick={() => {
            setShowPage("sinapp");
          }}>
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <DiUnitySmall className="w-7 mr-1 ml-5 fill-white" />
          <p>Sinapp2D</p>
        </div>
      </a>
      
    </div>
  );

  
  const ArticlesList = () => (
    <div>
      <a href="https://repositorio.uchile.cl/bitstream/handle/2250/188024/Gamification-mechanisms-to-improve-patient-adherence-in-web-based-hemianopia-theraphy.pdf?sequence=1&isAllowed=y">
        <div className="flex flex-row ml-16">
          <AiOutlineFileSearch className="w-5 h-5 mt-1 ml-2 fill-white"/>
          <div className="items-start hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-48">
            <p> Gamification in Web-Based therapy</p>
          </div>
        </div>
        
      </a>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <BsChevronDown className="w-7 mr-1" />
          ) : (
            <BsChevronRight className="w-7 mr-1" />
          )}
          <p>Portofolio</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <BsChevronDown className="w-7 mr-1  ml-5" />
              ) : (
                <BsChevronRight className="w-7 mr-1  ml-5" />
              )}

              <p>Projects</p>
            </div>
            {showWebList ? <WebList /> : null}
          </>
        ) : null}
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowArticleList(!showArticleList)}
            >
              {showArticleList ? (
                <BsChevronDown className="w-7 mr-1  ml-5" />
              ) : (
                <BsChevronRight className="w-7 mr-1  ml-5" />
              )}

              <p>Academic Studies</p>
            </div>
            {showArticleList ? <ArticlesList /> : null}
          </>
        ) : null}

        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a rel="noreferrer noopener" target="_blank" href="https://github.com/aleql">
              <AiFillGithub className="h-10 w-10 fill-white hover:cursor-pointer hover:h-12 hover:w-12"/>
            </a>
            <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/alejandro-quijada-leyton-b364b5235/">
              <AiFillLinkedin className="h-10 w-10 fill-white hover:cursor-pointer hover:h-12 hover:w-12"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
