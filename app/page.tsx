"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Profile = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:pt-30 gap-10">
        <div className="relative h-1/2 lg:h-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] bg-gradient-to-b from-[#1F192A] to-[#4a1f17] rounded-full z-0"></div>
          <Image
            src="/images/Photo.jpg"
            className="object-contain rounded-full z-10 relative"
            width={400}
            height={400}
            alt="profile"
          />
        </div>

        <div className="flex flex-col h-1/2 lg:h-full lg:w-1/2 gap-8 items-center lg:items-start justify-center text-center lg:text-left">
          <p className="text-3xl font-mono font-bold text-white">Hello, It&apos;s Me</p>
          <h1 className="text-4xl font-bold md:text-6xl text-white">
            Zainab Jafari
          </h1>
          <p className="md:text-xl text-white pt-3">
            I am an ambitious and motivated junior frontend developer seeking
            new opportunities in web development. Having recently completed my
            education at KYH Yrkeshögskola Stockholm, I am now ready to take the
            next step in my career.
          </p>
          <div className="flex w-full gap-4 pt-10 justify-center lg:justify-start mb-3">
            <Link href={'/projects'}>
              <button className="p-4 rounded-lg ring-1 ring-black text-white bg-[#A94E3D]">
                View My Work
              </button>
            </Link>
            <Link href={'/contact'}>
              <button className="p-4 rounded-lg ring-1 ring-black text-white bg-[#A94E3D]">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
