import React from "react";

import { VSImg, MenuImg } from "../assets";

const EyeSearch = () => {
  return (
    <div
      id="EyeSearch"
      className="mx-12 mt-20 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <code className="table-cell text-[#f6e7de] text-3xl mt-5 whitespace-nowrap">
            Eye-Search
          </code>
          <div className="table-cell border-b border-b-[#f6e7de] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5 mr-5">
          <code>
          Eye-Search is a free open online Gamified Self-Guided Web-Based Therapeutic Intervention, with the goal of
          treating patients that suffer from hemianopia. This condition stems from the damage to a
          part of the field of view. Hemianopia often occurs as a consequence of a stroke, traumatic
          brain injuries, or tumours due to the way vision is processed in the brain. Furthermore, this
          condition can be accompanied by other disorders, such as Visual Neglect, where patients can
          see a decreased response to stimuli on the path of their visual field. 
          <br />
          <br />
          Eye-Search has the objective of improving a patient’s visual functions, in terms of speed
          and accuracy, in real world or daily visual search tasks. This treatment does not improve or
          recover lost visual field, but improves the patient’s available vision. This therapy strategy
          is known as Compensatory Strategy.
          <br />
          <br />

          As adherence to any kind of treatment is something that the patient must commit to, if they are expecting to succeed,
          providing an engaging user experience turns out to be a significant design concern to be addressed in the context of Web-Based Therapies.
          Therefore, to improve user experience, engagement and adherence to the therapy, we developed the Eye-Search application as a gamified therapeutic intervention.
          Due to the lack of empirical evidence and guidelines for the application of gamification to this specific context, 
          we proposed and implemented our own gamification framework to reach this gap on the literature. Our framework consisted of the following prevailing game mechanics 
          from the literature: (1) an intrinsic and extrinsic reward system based on daily tasks, with in-game items as awards for the improvement of adherence and 
          short-term engagement; (2) a (NPC) companion for the improvement of social relatedness in users; and (3) spaced practice for the enhancement of motor skill development.
          <br />
          <br />
          This project is part of a research collaboration between the Department of Computer
          Science at the University of Chile and the University College London.
          <br />
          <br />
          My role on this project was of: Full-Stack developer, Gameplay developer, UX designer, UX reseracher.
          <br />
          <br />
          </code>
          <code>Link to the Eye-Search application: <a rel="noreferrer noopener" target="_blank" href="https://eye-search.vercel.app/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Eye-Search</a></code>
          <br />
          <br />
          <code>Link to our study of the application of Gamification mechanisms to improve patient adherence in Web-Based
hemianopia therapy: <a target="_blank" rel="noreferrer noopener" href="https://repositorio.uchile.cl/bitstream/handle/2250/188024/Gamification-mechanisms-to-improve-patient-adherence-in-web-based-hemianopia-theraphy.pdf?sequence=1&isAllowed=y" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a></code>
          <br />
          <br />


          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 text-m mt-5 mr-5 text-[#768a88]">
            <div className="flex flex-row mb-3">
              <img
                src={MenuImg}
                className="h-50 w-50 ml-3 mr-4 text-yellow_vs"
                alt="Eye-Search main menu"
              />
            </div>

            <div className="flex flex-row mb-3">
              <img
                src={VSImg}
                className="h-50 w-50 ml-3 mr-4 text-yellow_vs"
                alt="Eye-Search Visual Search therapeutic activity"
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

export default EyeSearch;
