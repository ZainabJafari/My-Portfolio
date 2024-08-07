"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Projects from "@/app/projects/projects";
import Contact from "@/app/contact/contact";
import Skills from "@/app/experience/experience";
import Profile from "@/app/home/home";

const tabs = [
  { id: 1, title: "About" },
  { id: 2, title: "Experience" },
  { id: 3, title: "Projects" },
  { id: 4, title: "Contact" },
];

const Tabs: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const activeClasses = "bg-[#A94E3D] text-white";
  const inactiveClasses = "bg-gray text-black";

  const topVariant = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };

  const centerVariant = {
    closed: { opacity: 1 },
    opened: { opacity: 0, backgroundColor: "rgb(255,255,255)" },
  };

  const buttonVariant = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariant = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen">
      <div className="hidden md:flex flex-wrap gap-6 mb-7.5 rounded-lg py-8 px-10 items-center justify-between">
        <div className="flex flex-wrap gap-20">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`rounded-md py-3 px-4 text-sm font-medium hover:bg-[#A94E3D] hover:text-white md:text-base lg:px-6 cursor-pointer ${
                openTab === tab.id ? activeClasses : inactiveClasses
              }`}
              onClick={() => setOpenTab(tab.id)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-13 pt-5 pl-3 flex flex-col justify-between z-50 relative"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariant}
            animate={menuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-[#A94E3D] rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariant}
            animate={menuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-[#A94E3D] rounded"
          ></motion.div>
          <motion.div
            variants={buttonVariant}
            animate={menuOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-[#A94E3D] rounded origin-left"
          ></motion.div>
        </button>
        {menuOpen && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="fixed inset-0 w-screen h-screen bg-[#000] text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {tabs.map((tab) => (
              <motion.div
                variants={listItemVariants}
                key={tab.id}
                className=""
                onClick={() => {
                  setOpenTab(tab.id);
                  setMenuOpen(false);
                }}
              >
                {tab.title}
              </motion.div>
            ))}
          </motion.div>
        )}
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
          <Skills />
        </div>
        <div
          className={`leading-relaxed ${openTab === 3 ? "block" : "hidden"}`}
        >
          <Projects />
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

export default Tabs;
