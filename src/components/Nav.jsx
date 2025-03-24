import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import app_logo_1 from "../assets/projects/app_logo _1.png";
import search_status from "../assets/projects/search_status.png";
import hambuger_icon from "../assets/projects/hambuger_icon.jpg";
import cross_icon from "../assets/projects/cross_icon.png";

const Nav = () => {

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
      
          <Link to="/">
          <div className="flex flex-row items-center">
            <img src={app_logo_1} alt="app_logo_img" className="" />
            <h1
              className="text-xl text-white font-bold leading-10 
 ml--3"
            >
              EXPLOREABIA
            </h1>
            </div>
          </Link>
      

        <ul className="hidden md:flex gap-8 text-white">
          <a
            href=""
            className="transition duration-700 cursor-pointer font-secondar "
          >
            About us
          </a>
          <a href="" className="cursor-pointer font-secondar">
            Tour
          </a>
          <a href="" className="cursor-pointer font-secondary">
            Hotels
          </a>
          <a href="" className="cursor-pointer font-secondary">
            Contact
          </a>
          <a href="" className="cursor-pointer font-secondary">
            Blog
          </a>
          <a href="" className="cursor-pointer font-secondary">
            <img src={search_status} alt="search_img" />
          </a>
        </ul>
        <img onClick={() => setShowMobileMenu(true)}
                  className="w-4 md:hidden cursor-pointer"
                  src={hambuger_icon}
                  alt="hamburger_icon"
                />
      </div>
      <div
              className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white
            transition-all`}
            >
              <div className="flex justify-end p-6 cursor-pointer">
                <img onClick={()=> setShowMobileMenu(false)} className="w-4" src={cross_icon} alt="cross-icon-img" />
              </div>
              <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                <a href="/" className="px-4 py-2 rounded-full inline-block">
                About us
                </a>
                <a href="/distinct" className="px-4 py-2 rounded-full inline-block">
                Tour
                </a>
                <a href="/about" className="px-4 py-2 rounded-full inline-block">
               Hotels
                </a>
                <a href="" className="px-4 py-2 rounded-full inline-block">
                Contact
                </a>
                <a href="/call" className="px-4 py-2 rounded-full inline-block">
             Blog
                </a>
                <a href="/article" className="px-4 py-2 rounded-full inline-block">
                <img src={search_status} alt="search_img" className="bg-black"/>
                </a>
              </ul>
            </div>
    </div>
  );
};

export default Nav;
