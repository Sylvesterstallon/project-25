import Rectangle_2508 from "../assets/projects/Rectangle_2508.png";
import Rectangle_2499 from "../assets/projects/Rectangle_2499.png";
import Rectangle_2519 from "../assets/projects/Rectangle_2519.png";
import Rectangle_2516 from "../assets/projects/Rectangle_2516.png";
import Rectangle_2584 from "../assets/projects/Rectangle_2584.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Hotels = () => {
  return (
    <div
      className="relative min-h-200  bg-cover bg-center items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${Rectangle_2508})` }}
    >
      <div className="container text-center mx-auto items-center px-2 md:px-20 lg:px-32 mt-18">
        <div className="flex flex-col justify-start items-start text-left">
          <h1 className="font-bold text-4xl leading-14 text-regal-vision">
            Hotels
          </h1>
          <p className="w-100 font-normal text-lg leading-6 text-regal-vision-black">
            Best Hotels that you can find best comfort and it very affordable{" "}
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
          <div className="w-full transform translate-y-13 translate-x-45 md:transform md:-translate-z-55 md:translate-x-60 xl:transform xl:-translate-z-55 xl:translate-x-60 lg:transform lg:-translate-z-55 lg:translate-x-60">
            <img
              src={Rectangle_2519}
              alt="outstanding-img"
              className="md:w-full w-40"
            />
            <div className="text-left -mt-20 md:-mt-30 md:ml-3 ml-2">
              <span className="font-bold md:text-base xl:text-base lg:text-base text-[11px] leading-6 text-white ">
                Vatican City Hotel & Suites
              </span>
              <p className="font-semibold text-[8px] md:text-[13px] xl:text-[13px] lg:text-[13px] text-regal-yellow -mb-2">
                5 Rate <span className="text-white">Aba</span>
              </p>
              <div className="space-x-1 flex flex-row mt-3 w-50 md:w-full">
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Security
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Pool
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Wifi
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Luxury
                </button>
              </div>
            </div>
          </div>
          <div className="w-full transform translate-x-32 -translate-y-24 md:transform md:-translate-y-55 md:translate-x-60 xl:transform xl:-translate-y-55 xl:translate-x-60 lg:transform lg:-translate-y-55 lg:translate-x-60">
            <img
              src={Rectangle_2499}
              alt="outstanding-img"
              className="md:w-full w-40"
            />
            <div className="text-left -mt-20 md:-mt-30 md:ml-4 ml-2">
              <span className="font-bold md:text-base xl:text-base lg:text-base text-xs leading-6 text-white">
                Evergreen Hotel
              </span>
              <p className="font-semibold text-[8px] md:text-[13px] xl:text-[13px] lg:text-[13px] text-regal-yellow -mb-2">
                4.8 Rate <span className="text-white">Umuahia</span>
              </p>
              <div className="space-x-1 flex flex-row mt-3 w-50 md:w-full">
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Bar
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Gym
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Resturant
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Luxury
                </button>
              </div>
            </div>
          </div>

          <div className="w-full transform translate-y-32 -translate-x-21 md:transform md:translate-y-35 md:-translate-x-4 xl:transform xl:translate-y-35 xl:-translate-x-4 lg:transform lg:translate-y-35 lg:-translate-x-4">
            <img
              src={Rectangle_2584}
              alt="outstanding-img"
              className="md:w-full w-40"
            />
            <div className="text-left -mt-20 md:-mt-30 md:ml-4 ml-2">
              <span className="font-bold md:text-base xl:text-base lg:text-base text-xs leading-6 text-white">
                Rixos Continental Hotel
              </span>
              <p className="font-semibold text-[8px] md:text-[13px] xl:text-[13px] lg:text-[13px] text-regal-yellow -mb-2">
                4.8 Rate <span className="text-white">Umuahia</span>
              </p>
              <div className="space-x-1 flex flex-row mt-3 w-50 md:w-full">
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Wifi
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Bar
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Pool
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Luxury
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:transform md:-translate-x-5 md:-translate-y-20 xl:transform xl:-translate-x-5 xl:-translate-y-20 lg:transform lg:-translate-x-5 lg:-translate-y-20 transform -translate-x-34 -translate-y-10">
            <img
              src={Rectangle_2516}
              alt="outstanding-img"
              className="md:w-full w-40"
            />
            <div className="text-left -mt-20 md:-mt-30 md:ml-4 ml-2">
              <span className="font-bold md:text-base xl:text-base lg:text-base text-[11px]  leading-6 text-white">
                Trace Garden Hotel & Suites
              </span>
              <p className="font-semibold text-[8px] md:text-[13px] xl:text-[13px] lg:text-[13px] text-regal-yellow -mb-2">
                4.8 Rate <span className="text-white">Umuahia</span>
              </p>
              <div className="space-x-1 flex flex-row mt-3 w-50 md:w-full">
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Security
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Air Condition
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2">
                  Pool
                </button>
                <button className="border border-white rounded-lg font-medium text-[6px] md:text-[10px] text-white p-1 px-2 lg:block hidden">
                  Luxury
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
