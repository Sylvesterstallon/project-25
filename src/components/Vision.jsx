import Rectangle_2508 from "../assets/projects/Rectangle_2508.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Rectangle_2299 from "../assets/projects/Rectangle_2299.png";
import Rectangle_2510 from "../assets/projects/Rectangle_2510.png";
import Rectangle_2515 from "../assets/projects/Rectangle_2515.png";
import Rectangle_2514 from "../assets/projects/Rectangle_2514.png";
const Vision = () => {
  return (
    <div
      className="relative md:h-250 h-150  bg-cover bg-center items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${Rectangle_2508})` }}
    >
      <div className="container text-center mx-auto items-center px-2 md:px-20 lg:px-32 mt-18">
        <div className="flex flex-col justify-start items-start text-left">
          <h1 className="font-bold text-4xl leading-14 text-regal-vision">
            Our Vision
          </h1>
          <p className="w-100 font-normal text-lg leading-6 text-regal-vision-black">
            Be one of the TOP-FIVE URBAN TOURISM destination in Africa and
            recognised, as the Face of Art in Africa for its multiple creative
            and innovative tourism products and experiences
          </p>
          <a
            href=""
            className="bg-[#e54141] mt-6 font-bold rounded-xl px-2 py-2 border-0 text-white md:px-6 flex flex-row items-center md:w-31 lg:w-30 xl:w-31 w-28 md:text-base text-sm"
          >
            Explore
            <FaArrowRightLong className="w-10 mt-1" />{" "}
          </a>
        </div>

        <div className="flex md:flex-row xl:flex-row lg:flex-row flex-row gap-1 mt-14 space-y-6 md:p-0 xl:p-0 lg:p-0 justify-center">
          <div className="w-full transform -translate-y-20 translate-x-45 md:transform md:-translate-z-55 md:translate-x-60 xl:transform xl:-translate-z-55 xl:translate-x-60 lg:transform lg:-translate-z-55 lg:translate-x-60">
            <img
              src={Rectangle_2299}
              alt="outstanding-img"
              className="md:w-full w-40"
            />
            <div className="text-left -mt-10 md:-mt-10 md:ml-3 ml-2">
              <span className="font-bold md:text-base xl:text-base lg:text-base text-[11px] leading-6 text-white ">
                Ojukwu Bunker
              </span>
            </div>
          </div>
          <div className="w-full transform translate-x-44 -translate-y-8 md:transform md:-translate-y-55 md:translate-x-60 xl:transform xl:-translate-y-55 xl:translate-x-60 lg:transform lg:-translate-y-55 lg:translate-x-60">
            <img
              src={Rectangle_2510}
              alt="outstanding-img"
              className="md:w-full w-40"
            />
            <div className="text-left -mt-14 md:-mt-10 md:ml-4 ml-2">
              <span className="font-bold md:text-base xl:text-base lg:text-base text-xs md:leading-6 text-white">
                Azumini Blue River
              </span>
            </div>
          </div>

          <div className="w-full transform translate-y-5 -translate-x-43 md:transform md:translate-y-35 md:-translate-x-4 xl:transform xl:translate-y-35 xl:-translate-x-4 lg:transform lg:translate-y-35 lg:-translate-x-4">
            <img
              src={Rectangle_2515}
              alt="outstanding-img"
              className="md:w-full w-80"
            />
            <div className="text-left -mt-14 md:-mt-10 md:ml-4 ml-2">
              <span className="font-bold md:text-base xl:text-base lg:text-base text-xs md:leading-6 text-white">
                Amakama Wooden Cave
              </span>
            </div>
          </div>
          <div className="w-full md:transform md:-translate-x-5 md:-translate-y-20 xl:transform xl:-translate-x-5 xl:-translate-y-20 lg:transform lg:-translate-x-5 lg:-translate-y-20 transform -translate-x-44 translate-y-20">
            <img
              src={Rectangle_2514}
              alt="outstanding-img"
              className="md:w-full w-40"
            />
            <div className="text-left -mt-10 md:-mt-10 md:ml-4 ml-2">
              <span className="font-bold md:text-base xl:text-base lg:text-base text-[11px]  leading-6 text-white">
                Arochukwu Cave
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
