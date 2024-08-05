"use client"
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'
import { usePathname } from 'next/navigation'
import Navbar from './header/Navbar'

const TransitionProvider = ({children}: any) => {
  const pathName = usePathname()

  return (
    <AnimatePresence>
      <div key={pathName} className='w-screen min-h-screen bg-gradient-to-b from-[#1F192A] to-[#4a1f17]'>
      <motion.div 
           className='w-screen h-screen fixed bg-[#000] rounded-b-[100px] z-40'
           animate={{height: "0vh"}}
           exit={{ height: "140vh"}}
           transition={{duration: 0.5, ease: "easeOut"}}
          />
          <motion.div 
           className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
           initial={{ opacity: 1}}
           animate={{opacity: 0}}
           exit={{ opacity: 0}}
           transition={{duration: 0.8, ease: "easeOut"}}
          >
            {pathName.substring(1)}
         </motion.div> 

          <motion.div 
           className='w-screen h-screen fixed bg-[#000] rounded-b-[100px] z-30'
           initial={{height: "140vh" }}
           animate={{height: "0vh", transition: {delay: 0.5 }}}
          />
        <div className='h-24'>
        <Navbar />
          </div>
          <div className="h-full w-">
          {children}
          </div>
        </div>
        </AnimatePresence>
  )
}

export default TransitionProvider
