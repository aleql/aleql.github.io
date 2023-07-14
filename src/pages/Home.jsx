import React, { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import LeftBar from "./LeftBar";
import Resume from "./Resume";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import NavBar from "./NavBar";
import EyeSeach from "./EyeSearch";
import Projects from "./Projects";
import Visualisations from "./Visualisations";
import Sinapp from "./Sinapp";

const Home = () => {
  const [showPage, setShowPage] = useState("home");

  return (
    <div id="home" className="App flex h-max w-full bg-[#1e1e1e]">
      <div className="bg-[#262526] fixed h-full hidden lg:block ">
        <LeftBar setShowPage={setShowPage}/>
      </div>
      <div className="bg-[#1e1e1e] pl-5 lg:pl-72 w-max h-full">
        <div className="lg:hidden">
          <MobileMenu 
            showPage={showPage}
            setShowPage={setShowPage}
          />
        </div>
        <div className="bg-[#424042] h-16 z-10 w-full fixed hidden lg:block ">
          <NavBar
            showPage={showPage}
            setShowPage={setShowPage}
          />
        </div>
        {showPage==="home" ? (
          <div className="space-y-32">
            <Header id="Header" />
            <About id="About" />
            <Resume id="Resume" />
            <Skills id="Skills" />
            <Projects id="Projects" />
            <Contact id="Contact" />{" "}
          </div>

        ) : showPage==="about" ? (
          <About id="About" className="!h-full mt-32"/>

        ) : showPage==="resume" ? (
          <Resume id="Resume" />

        ) : showPage==="skills" ? (
            <Skills id="Skills" />

        ) : showPage==="contact" ? (
          <Contact id="Contact" />

        ) : showPage==="visualisations" ? (
          <Visualisations id="Visualisations" />

        ) : showPage==="eyesearch" ? (
          <EyeSeach id="EyeSearch" />

        ) : showPage==="sinapp" ? (
          <Sinapp id="Sinapp" />  

        ) : null}
      </div>


    </div>
  );
};

export default Home;
