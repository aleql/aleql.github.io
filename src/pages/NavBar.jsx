import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { TbBinary } from "react-icons/tb";

const Container = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
  z-50
`;

const ActiveContainer = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
  z-50
`;

const NavBar = ({ showPage, setShowPage }) => {
  const [hidePage, setHidePage] = useState([]);

  return (
    <div className="flex flex-row h-full z-50">
      {showPage === "home" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("home");
          }}
        >
          <AiFillHome className="mr-2"/>
          Home
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("home");
          }}
        >
          <AiFillHome className="mr-2"/>
          Home
        </Container>
      )}


      {hidePage.includes("about") ? null : showPage === "about" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("about");
          }}
        >
         <BsPersonSquare className="mr-2"/>
          About
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("about");
          }}
        >
          <BsPersonSquare className="mr-2"/>
          About
        </Container>
      )}


      {hidePage.includes("resume") ? null : showPage === "resume" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("resume");
          }}
        >
          <CgFileDocument className="mr-2"/>
          Resume
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("resume");
          }}
        >
          <CgFileDocument className="mr-2"/>
          Resume
        </Container>
      )}

    {hidePage.includes("skills") ? null : showPage === "skills" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("skills");
          }}
        >
          <TbBinary className="mr-2"/>
          Skills
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("skills");
          }}
        >
          <TbBinary className="mr-2"/>
          Skills
        </Container>
      )}

      {hidePage.includes("contact") ? null : showPage === "contact" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("contact");
          }}
        >
          <AiFillMail className="mr-2"/>
          Contact
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("contact");
          }}
        >
          <AiFillMail className="mr-2"/>
          Contact
        </Container>
      )}
    </div>
  );
};
export default NavBar;
