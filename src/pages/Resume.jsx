import React from "react";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-2/3 w-full pr-5 mt-20 mb-4 mx-2 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <code className="table-cell text-[#f6e7de] text-3xl mt-5 whitespace-nowrap">
          Resume
          </code>
          <div className="table-cell border-b border-b-[#f6e7de] border-opacity-25 w-full"></div>
        </div>
      </div>


    <div className="w-full grid-cols-1 lg:grid-cols-2 gap-20">
    <br />

      <div>
        <code className="text-[#FFA17A] text-lg text-justify ">Work experience</code>
      </div>
      <div>
      <br />

            <code className="text-[#55B0AA]">Eye-Search - UCL Institute of Cognitive Neuroscience</code>
            <br />
            <code className="italic text-m text-[#768a88]">
            Full-stack developer and HCI researcher, January 2020 to Current
            </code>
            <br />
            <code className="text-sm ml-5 text-[#f6e7de]">
              • Eye-Search is a free open online Self-Guided Web-Based
                Therapeutic Intervention for the compensatory treatment of
                hemianopia.
            </code>
            <br />
            <code className="text-sm ml-5 text-[#f6e7de]">
            • HCI research and redesign of the application to study user
              adherence and improve UX.
            </code>
            <br />
            <code className="text-sm ml-5 text-[#f6e7de]">
            • Application developed with Unity WebGL, Node.js, MySQL
              and AWS.
            </code>
            
            <br />
            <br />

            <code className="text-[#55B0AA]">ReadRight - UCL Institute of Cognitive Neuroscience</code>
            <br />
            <code className="italic text-m text-[#768a88]">
            Backend developer, June 2021 to Current
            </code>
            <br />
            <code className="text-sm ml-5 text-[#f6e7de]">
              • Read-Right is a practice-based therapy that aims to improve
              reading speeds in people with Hemianopic Alexia.
            </code>
            <br />
            <code className="text-sm ml-5 text-[#f6e7de]">
            • Backend developed on Unity, React and Node.Js.
            </code>

            <br />
            <br />

            <code className="text-[#55B0AA]">Incremental SPA</code>
            <br />
            <code className="italic text-m text-[#768a88]">
            Full-stack developer, January 2019 to January 2019
            </code>
            <br />
            <code className="text-sm ml-5 text-[#f6e7de]">
              • Platform for big data analysis and synchronization of
              education data for school management.
            </code>
            <br />
            <code className="text-sm ml-5 text-[#f6e7de]">
            • Full-Stack development with Vue, Ruby on Rails, Python,
              Node.js, MongoDB and GCP.
            </code>

            <br />
            <br />
            
            <code className="text-[#55B0AA]">Project ALeRCE NLHPC</code>
            <br />
            <code className="italic text-m text-[#768a88]">
            Backend developer, June 2018 to December 2018
            </code>
            <br />
            <code className="text-sm ml-5 text-[#f6e7de]">
              • ALeRCE (Automatic Learning for the Rapid Classification of
              Events) is an Chilean-led broker for the processing of
              astronomical alert signals from the Zwicky Transient Facility
              (ZTF).
            </code>
            <br />
            <code className="text-sm ml-5 text-[#f6e7de]">
            • Backend development with Python, Node.js and MongoDB.
            </code>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div className="w-full grid-cols-1 lg:grid-cols-2 gap-20">             
      <div>
        <code className="text-[#FFA17A] text-lg text-justify ">Education</code>
      </div>
      <br />
      <div >
        <code className="text-[#55B0AA] text-right">Master in Sciences, mention in Computer Science - University of Chile</code>
          <br />
          <code className="italic text-m text-[#768a88]">
            University of Chile - Santiago, Chile{" "}
          </code>
          <br />
          <code className="text-s text-[#f6e7de]">Graduated in 2022 with maximum distinction</code>

          <br />
          <br />

          <code className="text-[#55B0AA]">Bachelor of Civil Computer Science Engineering - University of Chile</code>
          <br />
          <code className="italic text-m text-[#768a88]">
            University of Chile - Santiago, Chile{" "}
          </code>
          <br />
          <code className="text-s text-[#f6e7de]">Graduated in 2019 with maximum distinction</code>
        </div>
    </div>

    <br />
    <br />
    <br />

    <div className="w-full grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <code className="text-[#FFA17A] text-lg text-justify ">Academic career</code>
      </div>
      <br />
      <div>

            <code className="text-[#55B0AA]">Honorary researcher - UCL Institute of Cognitive Neuroscience</code>
            <br />
            <code className="italic text-m text-[#f6e7de]">
             University College London - London, United Kingdom{" "}
            </code>
            <br />
            <code className="italic text-sm text-[#768a88]">
             July 2020 to Current{" "}
            </code>

            <br />
            <br />

            <code className="text-[#55B0AA]"> Human-Computer Interaction Researcher - Department of Computer Sciences University of Chile </code>
            <br />
            <code className="italic text-m text-[#f6e7de]">
            University of Chile - Santiago, Chile{" "}
            </code>
            <br />
            <code className="italic text-sm text-[#768a88]">
             March 2020 to Current{" "}
            </code>

      </div>
    </div>


  </div>
  );
};

export default Resume;
