"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Navlink from "./Navlink";

const links = [
  { url: "/", title: "Home" },
  { url: "/experience", title: "Experience" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex gap-14 w-1/3 text-[#A94E3D] font-bold text-xl">
        {links.map((link) => (
          <Navlink link={link} key={link.title} />
        ))}
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#A94E3D] rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#A94E3D] rounded"
          ></motion.div>
          <motion.div
            variants={buttonVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-[#A94E3D] rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-[#000] text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
