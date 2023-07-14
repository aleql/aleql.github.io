import React from "react";
import { useState, useEffect } from 'react';

import Card from "./Card";
import '../styles.css';

import { Tooltip } from "@material-tailwind/react";
import { FaPython, FaJava, FaRust, FaUnity, FaAws } from "react-icons/fa";
import { SiApache, SiApachekafka, SiApachespark, SiAssemblyscript, SiC, SiCplusplus, SiCsharp, SiDjango, SiFlask, SiGodotengine, SiJavascript, SiMongodb, SiNumpy, SiPandas, SiPytorch, SiRstudio, SiRubyonrails, SiScikitlearn, SiScipy, SiTailwindcss, SiTensorflow, SiUnrealengine } from "react-icons/si";
import { DiGit, DiGoogleCloudPlatform, DiRuby } from "react-icons/di";
import { GrHadoop, GrNode, GrReactjs } from "react-icons/gr";
import { HiDatabase } from "react-icons/hi";
import { RiVuejsFill } from "react-icons/ri";

import { VSImg, MenuImg, VSChart } from "../assets";



const images = [VSImg, MenuImg, VSChart];

function getRandomImageIndex() {
  return Math.floor(Math.random() * images.length);
}


const Projects = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsActive(false);
      setTimeout(() => {
        setCurrentImageIndex(getRandomImageIndex());
        setIsActive(true);
      }, 1000); // Wait for 1 second before changing the image
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="Projects"
      className="flex-1 mt-20 lg:mx-60 items-center justify-center w-10/12  lg:w-2/3 text-justify"
    >
      
      <div>
          <code className="text-[#f6e7de] text-3xl mt-5 whitespace-nowrap">
          Projects
          </code>
          <div className="border-b border-b-[#f6e7de] border-opacity-25 w-full"></div>

        <div className="text-[#a2aabc] text-lg mt-10">

          <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-20 pr-20 pl-20 pt-10 pb-20">

            <div className="outline outline-offset-2 outline-4 outline-[#FDE66F] rounded-2xl shadow-lg mt-10 mb-10 pl-5 pr-5">

              <code className="flex text-center justify-center mt-5 text-4xl font-semibold text-white">Eye-Search</code>
              <div className="mt-10 w-full h-2/3" >
                <img src={images[currentImageIndex]} className={`w-full h-full object-cover fade-in-out ${isActive ? 'active' : ''}`} />
              </div>

              
            </div>

            {/* <Card author={"AUTOR"} title={"TITLE"} journal={"JOURNAL"} date={"DATE"} page={"PAGE"} link={"LINK"}></Card> */}
            
            <div className="flex-1 outline outline-offset-2 outline-4 outline-[#768a88] rounded-2xl shadow-lg">
              <code className="flex text-center  mt-5 text-2xl text-white justify-center">Frameworks</code>

              <div className="grid grid-cols-3 gap-10 text-m ml-5 mt-8 text-[#768a88]">

                <Tooltip content="Unity" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex-1 flex-row mb-3">
                    <FaUnity className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="Node.js" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <GrNode className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="R Studio" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiRstudio className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="Unreal Engine" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiUnrealengine className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                  </div>
                </Tooltip>

              <Tooltip content="React" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <GrReactjs className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>

              <Tooltip content="Django" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <SiDjango className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>


              <Tooltip content="Ruby on Rails" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <SiRubyonrails className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>

              <Tooltip content="Godot" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <SiGodotengine className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>

              <Tooltip content="Flask" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <SiFlask className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>


              <Tooltip content="Tailwind" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <SiTailwindcss className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>
                
              <Tooltip content="Vue" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <RiVuejsFill className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>

              <Tooltip content="Apache" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <SiApache className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>

              <Tooltip content="Git" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <DiGit className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>

              <Tooltip content="Amazon Web Services" placement="top" className="bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <FaAws className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>

              <Tooltip content="Google Cloud Computing" placement="top" className=" bg-[#6B6A65] rounded shadow-lg">
                <div className="flex flex-row mb-3">
                  <DiGoogleCloudPlatform className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#768a88] fill-white"/>
                </div>
              </Tooltip>
              
              </div>
            </div>

            <div className="outline outline-offset-2 outline-4 outline-[#FFA17A] rounded-2xl shadow-lg">
              <code className="flex text-justify justify-center ml-1 mt-5 text-2xl text-white">Technologies</code>

              <div className="grid grid-cols-2 ml-12 mt-5 gap-10 text-m text-[#768a88]">
              
                <Tooltip content="Apache" placement="top" className="mr-10 bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiPytorch className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#FFA17A] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="Scipy" placement="top" className="mr-10 bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiScipy className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#FFA17A] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="Pandas" placement="top" className="mr-10 bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiPandas className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#FFA17A] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="Tensorflow" placement="top" className="mr-10 bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiTensorflow className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#FFA17A] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="Scikit-learn" placement="top" className="mr-10 bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiScikitlearn className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#FFA17A] fill-white"/>
                  </div>
                </Tooltip>
                
                <Tooltip content="Numpy" placement="top" className="mr-10 bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiNumpy className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#FFA17A] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="Hadoop" placement="top" className="mr-10 bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <GrHadoop className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#FFA17A] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="Apache Spark" placement="top" className="mr-10 bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiApachespark className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#FFA17A] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="Apache Kafka" placement="top" className="mr-10 bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiApachekafka className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#FFA17A] fill-white"/>
                  </div>
                </Tooltip>

                <Tooltip content="MongoDB" placement="top" className="mr-10 bg-[#6B6A65] rounded shadow-lg">
                  <div className="flex flex-row mb-3">
                    <SiMongodb className="h-10 w-10 ml-3 mr-4 bg-[#4f4c45] rounded-md shadow-lg hover:bg-[#FFA17A] fill-white"/>
                  </div>
                </Tooltip>
              </div>
            </div>

          </div>
          <br />
          <br />

        </div>
      </div>


    </div>
  );
};

export default Projects;
