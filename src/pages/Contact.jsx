import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="Contact" className=" mt-36 pb-16 lg:ml-12  lg:w-full">

          <code className="text-[#f6e7de] text-3xl mt-5 whitespace-nowrap">
           Contact
          </code>
          <div className="border-b border-b-[#f6e7de] border-opacity-25 w-11/12 "></div>

      <div className="text-[#a2aabc] text-lg mt-5 lg:mx-60 flex flex-col items-center text-justify">
        <code>
          Feel free to
          contact me and I’ll get back to you ASAP!
        </code>


        <div className="flex mt-5">
          <MdOutlineEmail className="h-10 lg:w-2/3 w-1/3 shadow-lg fill-white"/>
          <code className="text-center lg:ml-5 text-xl mt-1 text-white">alejandroquijadaleyton@gmail.com</code>
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-1 justify-center ml-28 pt-10 lg:hidden">
          <div className="flex px-6 space-x-7">
            <a href="https://github.com/aleql">
              <AiFillGithub className="h-10 w-10 fill-white hover:cursor-pointer hover:h-12 hover:w-12"/>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-quijada-leyton-b364b5235/">
              <AiFillLinkedin className="h-10 w-10 fill-white hover:cursor-pointer hover:h-12 hover:w-12"/>
            </a>
          </div>
        </div>
      
    </div>
  );
};

export default Contact;
