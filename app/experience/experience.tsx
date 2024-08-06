"use client";

import { BRAND } from "../../types/brands";
import Image from "next/image";
import Experience from "./myExperience";

const brandData: BRAND[] = [
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    name: "React",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
    name: "Next.js",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "Javascript",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "Typescript",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    name: "HTML",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    name: "CSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-plain.svg",
    name: "Material UI",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg",
    name: "MySQL",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    name: "Express.js",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    name: "MongoDB",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg",
    name: "Socket.io",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    name: "Postman",
  },
  {
    logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    name: "Figma",
  },
];
const Skills: React.FC = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-10 xl:px-48 lg:pt-30 gap-10">
      <div className="lg:w-1/2 flex flex-col">
        <div className="relative text-center lg:text-left">
          <span className="text-[#dad5d4] text-sm">My Skills</span>
          <div className="border-t border-[#A94E3D] my-2 mx-auto lg:mx-0 w-full max-w-[500px]"></div>
          <h1 className="text-white text-md lg:text-lg xl:text-xl max-w-[500px] mx-auto lg:mx-0">
            A snapshot of what I’m good at and the skills I’ve developed. Check
            out what I can do and how I can help.
          </h1>
        </div>
        <div className="mt-4 md:mt-6 flex justify-center lg:justify-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 border border-[#A94E3D] w-full max-w-xl">
            {brandData.map((brand, key) => (
              <div key={key} className="flex flex-col items-center">
                <Image src={brand.logo} width={80} height={80} alt="Brand" className="w-10 h-10 md:w-10 md:h-10" />
                <p className="text-white text-xs md:text-sm">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end mb-3">
        <Experience />
      </div>
    </div>
  );
};

export default Skills;
