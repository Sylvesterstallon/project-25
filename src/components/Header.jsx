import desktop_1 from "../assets/projects/desktophoto_1.png";
import img_1 from "../assets/projects/img_1.png";
import Navbar from "./Navbar";
import Frame_left from "../assets/projects/Frame_left.png";
import Frame_right from "../assets/projects/Frame_right.png";
import desktophoto_2 from "../assets/projects/desktophoto_2.png";
import desktophoto_3 from "../assets/projects/desktophoto_3.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex flex-wrap justify-between items-center
    w-full overflow-hidden md:flex-nowrap"
      style={{ backgroundImage: `url(${img_1})` }}
    >
      <Navbar />
      <motion.div
      initial={{opacity: 0, y:100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true}}
      className="container w-full text-left px-4 md:px-30 mt-50 md:mt-40">
        <h2 className="font-high text-4xl text-white leading-30 md:text-7xl font-normal">
          AbiaTours
        </h2>
        <p
          className="font-secondary w-full font-normal text-xl text-white md:text-xl
        "
        >
          Discover your utimate holidays vibe through Abia's amazing tours,
          shopping entertainment and attractions
        </p>
        <div className="mt-4 md:mt-9">
          <a
            href=""
            className="bg-yellow-300 rounded-xl px-4 py-3 border-0 text-white md:px-8 "
          >
            Discover more
          </a>
        </div>
      </motion.div>
      <div className="mt-20 md:mt-64">
        <div className="flex justify-end items-center">
          <button aria-label="Previous">
            <img src={Frame_left} alt="frame-img" />
          </button>
          <button aria-label="Next">
            <img src={Frame_right} alt="frame-img" />
          </button>
        </div>
        <div className="relative flex-shrink-0 overflow_hidden flex gap-2 transition-transform duration-500 ease-in-out w-full ml-24 mb-20 md:ml-4">
          <div className="">
            <img src={desktop_1} alt="image1" className="w-48 md:w-lg" />
            <p className="text-white text-xm flex items-center justify-center">
              Azumini Blue River
            </p>
          </div>
          <img src={desktophoto_2} alt="desktop_img" className="w-32" />
          <img src={desktophoto_3} alt="desktop_img2" className="w-20" />
        </div>
      </div>
    </div>
  );
};

export default Header;
