import img_1 from "../assets/projects/img_1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import vert_bar from "../assets/projects/vert_bar.png";
import Substract from "../assets/projects/Subtract.png";
import Substract_2 from "../assets/projects/Subtract_2.png";
import Nav from "./Nav";

const Ultimate = () => {
  return (
    <div
      className="relative md:min-h-screen h-130  bg-cover bg-center flex flex-wrap justify-between items-center
                    w-full overflow-hidden md:flex-nowrap"
      style={{ backgroundImage: `url(${img_1})` }}
    >
      <Nav/>
      <div className="md:ml-8 ml-2 md:relative absolute">
        <img src={vert_bar} alt="line-img" className="w-4" />
      </div>

      <div className="container w-full text-left px-4 md:px-30 mt-10 md:mt-20 ml-10">
        <h2 className=" text-[-40px] text-white leading-10 md:text-5xl md:font-normal font-bold mb-2">
          EXPLORE ABIA
        </h2>
        <p
          className=" w-full font-normal text-lg md:max-w-full max-w-100 md:leading-10 text-white md:text-xl
                        "
        >
          Discover your utimate holiday vibe through Abia amazing
        </p>
        <div className="mt-4 md:mt-9">
          <button className="bg-[#e54141] md:w-27 w-23 py-2 px-4 mt-4 md:font-semibold font-medium text-sm md:text-base text-white rounded-lg flex flex-row items-center gap-1">
            {" "}
            Explore
            <FaArrowRightLong className="w-10 mt-1" />{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-row bottom-0 left-1/2 transform -translate-x-1/2 justify-center absolute">
          <div className="flex justify-center items-center">
          <img src={Substract} alt="substract-img"  className="" />
        <p className="absolute font-semibold md:text-base text-sm text-regal-ex-abia underline">Tour</p>
        </div>
        <div className="flex justify-center items-center">
        <img src={Substract_2} alt="substract-img2" className=""/>
        <p className="absolute font-semibold md:text-base text-sm text-white">Hotels</p>
        </div>
        </div>
    </div>
  );
};

export default Ultimate;
