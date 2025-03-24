 import { FaArrowRightLong } from "react-icons/fa6";
import Rectangle_2507 from "../assets/projects/Rectangle_2507.png";

const Beststate = () => {
  return (
    <div className="container text-left justify-end mx-auto items-left px-2 md:px-20 lg:px-32 mt-5">
      <img src={Rectangle_2507} alt="" />
      <div className="transform md:translate-x-125 md:-translate-y-90 translate-x-55 -translate-y-53 text-right items-right md:max-w-110 max-w-56">
        <h1 className="font-bold md:text-4xl text-2xl leading-14 text-white">
          Explore Abia
        </h1>
        <p className="font-normal md:text-base text-xs md:leading-6 leading-4 text-white">
          Abia, is one of the best state in Nigeria is moving from a mega city
          to a smart city where technology will drive development, innovations
          and security in the stride to grow from the 5th to the 3rd largest
          economy in Africa. bet{" "}
        </p>
         <a
            href=""
            className="mt-2 pl-4 ml-auto bg-[#e54141] font-bold rounded-xl px-2 py-2 border-0 text-white md:px-6 flex flex-row items-center md:w-29 lg:w-29 xl:w-29 w-25 md:text-base text-sm"
          >
            Explore
            <FaArrowRightLong className="w-10 mt-1" />{" "}
          </a>
      </div>
    </div>
  );
};

export default Beststate;

