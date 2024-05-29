"use client";
import React, { useState } from "react";
import Cards from "../../MyProjects/cards";
import Experience from "../../Experience/skills";
import Profile from "../../Home/profile";
import Navbar from "./navbar";
import Contact from "../../ContactMe/contactMe";

const TabOne: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "bg-primary dark:bg-[#F58A51] text-white";
  const inactiveClasses = "bg-gray dark:bg-meta-4 text-black dark:text-white";

  return (
    <div className="pl-14 dark:border-strokedark dark:bg-boxdark min-h-screen">
      <div className="mb-7.5 flex flex-wrap gap-6 rounded-lg py-8 px-10 dark:border-strokedark items-center justify-between">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-wrap gap-15 pr-20">
          <div
            className={`rounded-md py-3 px-4 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-[#F58A51] md:text-base lg:px-6 cursor-pointer	 ${
              openTab === 1 ? activeClasses : inactiveClasses
            }`}
            onClick={() => setOpenTab(1)}
          >
            About
          </div>
          <div
            className={`rounded-md py-3 px-4 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-[#F58A51] md:text-base lg:px-6 cursor-pointer	 ${
              openTab === 2 ? activeClasses : inactiveClasses
            }`}
            onClick={() => setOpenTab(2)}
          >
            Experience
          </div>
          <div
            className={`rounded-md py-3 px-4 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-[#F58A51] md:text-base lg:px-6 cursor-pointer	 ${
              openTab === 3 ? activeClasses : inactiveClasses
            }`}
            onClick={() => setOpenTab(3)}
          >
            Projects
          </div>
          <div
            className={`rounded-md py-3 px-4 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-[#F58A51] md:text-base lg:px-6 cursor-pointer	 ${
              openTab === 4 ? activeClasses : inactiveClasses
            }`}
            onClick={() => setOpenTab(4)}
          >
            Contact
          </div>
        </div>
      </div>

      <div>
        <div
          className={`leading-relaxed ${openTab === 1 ? "block" : "hidden"}`}
        >
          <Profile />
        </div>
        <div
          className={`leading-relaxed ${openTab === 2 ? "block" : "hidden"}`}
        >
          <Experience />
        </div>
        <div
          className={`leading-relaxed ${openTab === 3 ? "block" : "hidden"}`}
        >
          <Cards />
        </div>
        <div
          className={`leading-relaxed ${openTab === 4 ? "block" : "hidden"}`}
        >
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default TabOne;
