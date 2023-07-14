import React, { useState } from "react";

import { Disclosure, Transition } from "@headlessui/react";
import { AiFillEye, AiFillHome, AiFillLinkedin, AiOutlineFileSearch } from "react-icons/ai";
import { DiUnitySmall } from "react-icons/di";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

const MobileMenu = ({ showPage, setShowPage }) => {
  const projects = [
    {
      name: "Eye-Search",
      buttonSection: "eyesearch",
      icon: <AiFillEye className="w-7 mt-1 mr-1 ml-5 fill-white"/>,
      current: true,
    },
    {
      name: "Hexagonal Navigation",
      href: "https://github.com/aleql/HexagonalGrid",
      icon: <DiUnitySmall className="w-7 mt-1 mr-1 ml-5 fill-white"/>,
      current: false,
    },
    {
      name: "Sinapp 2D",
      buttonSection: "sinapp",
      icon: <DiUnitySmall className="w-7 mt-1 mr-1 ml-5 fill-white"/>,
      current: true,
    },
    {
      name: "Gamification on therapy",
      href: "https://repositorio.uchile.cl/bitstream/handle/2250/188024/Gamification-mechanisms-to-improve-patient-adherence-in-web-based-hemianopia-theraphy.pdf?sequence=1&isAllowed=y",
      icon: <DiUnitySmall className="w-7 mt-1 mr-1 ml-5 fill-white"/>,
      current: false,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [showProjectsList, SetShowProjectsList] = useState(true);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            {open ? (
              <VscChromeClose className="block w-16" aria-hidden="true" />
            ) : (
              <GiHamburgerMenu className="block w-16" aria-hidden="true" />
            )}{" "}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="">
            <code className="px-2 pt-2 pb-3 space-y-1 text-white">
                <div className="flex flex-row  ml-5 mr-8">
                  <a className="flex" onClick={() => {setShowPage("home");}}>
                    <AiFillHome className="w-8 h-8"/>
                    <code className="font-bold text-xl mt-1 ml-3">Home</code>
                  </a>
                </div>

                <div
                  className="mb-2 ml-4 pt-4 font-bold flex text-xl"
                  onClick={() => SetShowProjectsList(!showProjectsList)}
                >

                  {showProjectsList ? (
                    <BsChevronDown className="w-7 mr-4" />
                  ) : (
                    <BsChevronRight className=" w-7 mr-4 " />
                  )}
                  Projects :
                </div>
                {showProjectsList
                  ? projects.map((item) => (
                      <Disclosure.Button
                        
                        key={item.name}
                        as="a"
                        href={item.href}
                        target="_blank"
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                      {item.buttonSection ? 
                      <a className="flex ml-6" onClick={() => {setShowPage(item.buttonSection);}}>
                          {item.icon}
                          {item.name}
                        </a>
                        :
                        <a className="flex ml-6">
                          {item.icon}
                          {item.name}
                        </a>
                      }

                      </Disclosure.Button>
                    ))
                  : null}
              </code>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default MobileMenu;
