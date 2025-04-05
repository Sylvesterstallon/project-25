import { Link } from "react-router-dom";
import Arrow_05 from "../../src/assets/projects/Arrow_05.png";
import hambuger_icon from "../assets/projects/hambuger_icon.jpg";
import cross_icon from "../assets/projects/cross_icon.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Navbar = () => {
const [showMobileMenu, setShowMobileMenu] = useState(false)
useEffect(() =>{
      if(showMobileMenu){
        document.body.style.overflow = 'hidden'
      }else{
        document.body.style.overflow = 'auto'
      }
      return () => {
        document.body.style.overflow = 'auto'
      };
}, [showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div
        className="container mx-auto flex justify-between
                    items-center py-4 px-6 ml-1 md:px-20 lg:px-32 bg-transparent"
      >
        <Link to='/amazing'>
          <h1
            className="text-4xl font-teriary text-white font-bold leading-10 
       mt-8 ml--3"
          >
            AbiaTour
          
          </h1>
          <img className="relative w-18 ml-22 mt--8 " src={Arrow_05} alt="" />
        </Link>

        <ul className="hidden md:flex gap-8 text-white">
          <a
            href="/"
            className="transition duration-700 hover:underline cursor-pointer font-secondary hover:text-regal-blue "
          >
            Home
          </a>
          <a
            href="/distinct"
            className="transition duration-700 hover:underline cursor-pointer font-secondary hover:text-regal-blue"
          >
            Destinations
          </a>
          <a
            href="/about"
            className="transition duration-700 hover:underline cursor-pointer font-secondary hover:text-regal-blue "
          >
            About Us
          </a>
          <a
            href=""
            className="transition duration-700 hover:underline cursor-pointer font-secondary hover:text-regal-blue"
          >
            Tourism-Establishments
          </a>
          <a
            href="/call"
            className="transition duration-700 hover:underline cursor-pointer font-secondary hover:text-regal-blue "
          >
            Contact
          </a>
          <a
            href="/article"
            className="transition duration-700 hover:underline cursor-pointer font-secondary hover:text-regal-blue "
          >
            Blog
          </a>
        </ul>
        <img onClick={() => setShowMobileMenu(true)}
          className="w-4 md:hidden cursor-pointer"
          src={hambuger_icon}
          alt="hamburger_icon"
        />
      </div>
      {/*----------mobile -- menu--------- */}
      <div
        className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white
      transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img onClick={()=> setShowMobileMenu(false)} className="w-4" src={cross_icon} alt="cross-icon-img" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <motion.a
         initial={{opacity: 0, x:200}}
         transition={{duration: 4}}
         whileInView={{opacity: 1, x:0}}
         viewport={{once: true}}
          href="/" className="px-4 py-2 rounded-full inline-block">
            Home
          </motion.a>
          <motion.a
           initial={{opacity: 0, x:-200}}
           transition={{duration: 2}}
           whileInView={{opacity: 1, x:0}}
           viewport={{once: true}}
          href="/distinct" className="px-4 py-2 rounded-full inline-block">
            Destinations
          </motion.a>
          <motion.a
           initial={{opacity: 0, x:200}}
           transition={{duration: 1}}
           whileInView={{opacity: 1, x:0}}
           viewport={{once: true}}
          href="/about" className="px-4 py-2 rounded-full inline-block">
            About Us
          </motion.a>
          <motion.a
           initial={{opacity: 0, x:-200}}
           transition={{duration: 1.5}}
           whileInView={{opacity: 1, x:0}}
           viewport={{once: true}}
          href="" className="px-4 py-2 rounded-full inline-block">
            Tourism-Establishments
          </motion.a>
          <motion.a
          initial={{opacity: 0, x:200}}
          transition={{duration: 1}}
          whileInView={{opacity: 1, x:0}}
          viewport={{once: true}}
           href="/call" className="px-4 py-2 rounded-full inline-block">
            Contact
          </motion.a>
          <motion.a
          initial={{opacity: 0, x:-200}}
          transition={{duration: 2.5}}
          whileInView={{opacity: 1, x:0}}
          viewport={{once: true}}
          href="/article" className="px-4 py-2 rounded-full inline-block">
            Blog
          </motion.a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
