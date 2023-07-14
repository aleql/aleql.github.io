import React from "react";

import { SinappImg } from "../assets";

const Sinapp = () => {
  return (
    <div
      id="Sinapp"
      className="mx-12 mt-20 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <code className="table-cell text-[#f6e7de] text-3xl mt-5 whitespace-nowrap">
            Sinapp
          </code>
          <div className="table-cell border-b border-b-[#f6e7de] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5 mr-5">
          <code>
          Sinapp2D is a mobile game developed for GERO Chile to promote and teach kids and general audience about key healthy 
          factors to combat Alzheimer desease. In the game the player must keep the neuronal network of the brain expanded as possible along the character's ages. 
          To do so it must combine 4 key activities: Excersice, Reading, Sports and Healthy diet, all of them with different gameplay effects.
          <br />
          <br />
          My role on this project was of: gameplay programmer.
          </code>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 text-m mt-5 mr-5 text-[#768a88]">
            <div className="flex flex-row mb-3">
              <img
                src={SinappImg}
                className="h-50 w-50 ml-3 mr-4 text-yellow_vs"
              />
            </div>

         
          </div>

          <br />
          <br />

        </div>
      </div>
    </div>
  );
};

export default Sinapp;
