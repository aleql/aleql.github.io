import React from "react";

import { VSChart, ParallelChart, CivilChart } from "../assets";

const Visualisations = () => {
  return (
    <div
      id="Visualisations"
      className="mx-12 mt-20 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>

      <div className="table">
          <code className="table-cell text-[#f6e7de] text-3xl mt-5 whitespace-nowrap">
            Visualisations
          </code>
          <div className="table-cell border-b border-b-[#f6e7de] border-opacity-25 w-full"></div>
        </div>

        <div className="table-cell border-b border-b-[#f6e7de] border-opacity-25 w-full"> 

        <div className="text-[#a2aabc] text-lg mt-5 mr-5">
          <code className="text-2xl">
          Linechart of patient's average visual reaction speed as they progress through the therapy.
          </code>

          <div className="flex-1 w-full pl-6 grid grid-cols-1 gap-20 mt-5">

            <div className="flex flex-row mb-3 rounded-xl pr-10 pt-2 pb-2" >
                <img
                  src={VSChart}
                  className="h-50 w-50 ml-3 mr-4 text-yellow_vs"
                  alt="Eye-Search study of users's average reaction time per therapy day"
                />
            </div>   
          </div>

          <code className="text-l">
          This visualisation was made with the objective of analysing the average performance of the patients of the <a rel="noreferrer noopener" target="_blank" href="https://eye-search.vercel.app/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Eye-Search application</a>, 
          during the duration of the therapy provided by it, which lasts 28 days. A linear regression was also added to the chart to analyse the tendency of the data.
          <br />
          This chart was made using matplotlib, pandas, scikit-learn

          </code>      
        </div>






        <div className="text-[#a2aabc] text-lg mt-48 mr-5">
          <code className="text-2xl">
          Parallel coordinates chart of the relation between the different climate variables of Chile's weather.
          </code>

          <div className="flex-1 w-full grid grid-cols-1 gap-20 mt-5">

            <div className="flex flex-row mb-3 rounded-xl pt-2 w-full" >
                <img
                  src={ParallelChart}
                  className="h-full w-full ml-3 mr-4 text-yellow_vs"
                  alt="Eye-Search main menu"
                />
            </div>   
          </div>

          <code className="text-l">
          This chart uses the variables: year, latitude, rain, median temperature, minimum temperature and maximum temperature to study correlation between these variables Chile's weather.
          <br />
          This chart was made using pandas and scikit-learn

          </code>      
        </div>








        <div className="text-[#a2aabc] text-lg mt-48 mr-5 mb-10">
          <code className="text-2xl">
          Floating bar chart for the sensitivity Analysis of Slope Stability for Tanks and Tailings Reservoirs Using the Limit Equilibrium Method.
          </code>

          <div className="flex-1 w-full grid grid-cols-1 gap-20 mt-5">

            <div className="flex flex-row mb-3 rounded-xl pt-2 w-full" >
                <img
                  src={CivilChart}
                  className="h-full w-full ml-3 mr-4 bg-white text-yellow_vs"
                  alt="Eye-Search main menu"
                />
            </div>   
          </div>

          <code className="text-l">
          This custom made visualisation done for a Civil Engineering project was created for the evaluation of a slope stability through the paremeters of: range of groundwater levels, average safety factors, seismic coefficients, geometry and type of fault. 
          <br />
          This chart was made using pandas and matplotlib

          </code>      
        </div>



          
        </div>



      </div>
    </div>
  );
};

export default Visualisations;
