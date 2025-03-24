import Rectangle_19301 from "../assets/projects/Rectangle_19301.png";
import Rectangle_19302 from "../assets/projects/Rectangle_19302.png";

const Explore = () => {
  return (
    <div className="flex h-30 md:h-screen">
      <div className="w-1/2 h-full relative">
        <img className="w-full items-end" src={Rectangle_19301} alt="" />
        <div className="absolute md:top-1/5 sm:top-1/9 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/16 text-center">
          <h4 className="font-normal md:font-bold  md:text-lg sm:text-lg text-regal-light-white">
            PROMOTION
          </h4>
          <h2 className="md:font-bold font-semibold font-teriary md:text-5xl sm:text-xl text-regal-light-white">
            Explore Culture
          </h2>
        </div>
      </div>
      <div className="w-1/2 h-full relative">
        <img className="w-full items-end" src={Rectangle_19302} alt="" />
        <div className="absolute md:top-1/5 sm:top-1/9 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/16 text-center">
          <h4 className="md:font-bold font-normal md:text-lg sm:text-lg text-regal-light-white">
            PROMOTION
          </h4>
          <h2 className="font-bold font-teriary  md:text-5xl sm:text-xl text-regal-light-white">
            Explore Cities
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Explore;
