import React from "react";
import TypeWritter from "./TypeWritter";

function Header() {
  return (
    <div id="Header" className="lg:mt-24 lg:ml-32">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 ml-5 mr-5">
        <div className="mt-20">
          <code className="text-[#f6e7de] lg:text-8xl text-6xl mt-5">Alejandro Quijada Leyton</code>
          <br/>
          <br/>
          <code className="text-[#55B0AA] text-4xl mt-12">Master in Computer Science</code>
        </div>
        <div className="hidden sm:block mr-6 justify-end ml-64">
          <TypeWritter/>
        </div>
      </div>

    </div>
  );
}

export default Header;
