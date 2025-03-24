import arrow_down from "../assets/projects/arrow_down.png";
import calender_2 from "../assets/projects/calendar_2.png"
import search_status from "../assets/projects/search_status.png"

const Trim = () => {
  return (
    <div
      className="bg-gray-100 h-13 flex flex-row flex-wrap justify-center space-x-1 md:space-x-6 lg:space-x-8
    "
    >
      <div className="shadow-md w-30 md:w-1/2 lg:w-1/3 xl:w-50">
        <span className="font-semibold md:text-sm xl:text-sm lg:text-sm text-xs text-regal-second">
          You want to go
        </span>
        <div className="flex flex-row">
          <p className="font-normal md:text-base lg:text-base xl:text-base text-sm text-regal-gray">
            City,destination
          </p>
          <img src={arrow_down} alt="arrow-img" />
        </div>
      </div>
      <div className="shadow-md w-30 md:w-1/2 lg:w-1/3 xl:w-50">
        <span className="font-semibold md:text-sm xl:text-sm lg:text-sm text-xs text-regal-second">
        Departure from
        </span>
        <div className="flex flex-row gap-2">
          <p className="font-normal md:text-base lg:text-base xl:text-base text-sm text-regal-gray">
   Select, city
          </p>
          <img src={arrow_down} alt="arrow-img" />
        </div>
      </div>
      <div className="shadow-md w-30 md:w-1/2 lg:w-1/3 xl:w-50">
        <span className="font-semibold md:text-sm xl:text-sm lg:text-sm text-xs text-regal-second">
        Departure date
        </span>
        <div className="flex flex-row gap-2">
          <p className="font-normal md:text-base xl:text-base lg:text-base text-sm text-regal-gray">
          Select, date
          </p>
          <img src={calender_2} alt="calender-img" className=""/>
        </div>
      </div>
      <div className="">
        <button className="bg-[#e54141] md:w-28 xl:w-28 lg:w-28 w-27  py-2 px-4 mt-2 text-white rounded-lg text-sm md:font-semibold lg:font-semibold xl:font-semibold font-medium flex flex-row items-center gap-1">
          <img src={search_status} alt="search-img" className="md:w-4 w-3"/>Tim Kiem</button>
      </div>
      
    </div>

  );
};

export default Trim;




{/* <button className="bg-[#e54141] w-22 py-2 px-4 mt-4 font-bold text-base text-white rounded-lg flex flex-row items-center gap-1">
              {" "}
              Send <FaArrowRightLong className="w-10 mt-1" />{" "}
            </button> */}