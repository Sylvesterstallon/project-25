import Rectangle_7516 from "../assets/projects/Rectangle_7516.png";
import Rectangle_2492 from "../assets/projects/Rectangle_2492.png";
import Rectangle_2493 from "../assets/projects/Rectangle_2493.png";
import Rectangle_2494 from "../assets/projects/Rectangle_2494.png";
import tour_guide from "../assets/projects/tour_guide.png";
import travelling_1 from "../assets/projects/travelling_1.png";
import hands_1 from "../assets/projects/hands_1.png";
import medical_team from "../assets/projects/medical_team.png";
import { motion } from "framer-motion";

const Outstanding = () => {
  return (
    <motion.div
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
      className="relative md:min-h-300 min-h-700 bg-cover bg-center items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${Rectangle_7516})` }}
    >
      <div className="container text-center mx-auto flex flex-col items-center px-2 md:px-20 lg:px-32 mt-18">
        <div>
          <h1 className=" font-bold text-[40px] leading-14 text-regal-vision">
            Outstanding Tour
          </h1>
          <p className="font-normal text-base leading-6 text-black max-w-200 mt-4">
            Abia, is one of the best state in Nigeria is moving from a mega city
            to a smart city where technology will drive development, innovations
            and security in the stride to grow from the 5th to the 3rd largest
            economy in Africa.
          </p>
        </div>
        <div className="flex md:flex-row xl:flex-row lg:flex-row flex-col gap-4 mt-14 space-y-6 p-14 md:p-0 xl:p-0 lg:p-0">
          <div className="w-full">
            <img src={Rectangle_2492} alt="outstanding-img" className="" />
            <div className="text-left -mt-20 ml-4">
              <span className="font-bold text-xl leading-7 text-white">
                Azumini Blue River
              </span>
              <p className="font-bold text-base text-regal-white">Azumini</p>
            </div>
          </div>
          <div className="w-full">
            <img src={Rectangle_2493} alt="outstanding-img" className="" />
            <div className="text-left -mt-20 ml-4">
              <span className="font-bold text-xl leading-7 text-white">
                Arochukwu Cave
              </span>
              <p className="font-bold text-base text-regal-white">Arochukwu</p>
            </div>
          </div>
          <div className="w-full">
            <img src={Rectangle_2494} alt="outstanding-img" className="" />
            <div className="text-left -mt-20 ml-4">
              <span className="font-bold text-xl leading-7 text-white">
                National War Museum
              </span>
              <p className="font-bold text-base text-regal-white">Umuahia</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className=" font-bold md:text-[50px] text-[35px] leading-14 text-regal-light-navy-blue font-high md:mt-18 mt-8">
            Plan Your Trip
          </h1>
          <p className="font-normal md:text-xl text-sm  text-regal-navy-blue max-w-200 mt-0">
            Discover the best of Abia
          </p>
        </div>
        <div
          className="flex md:flex-row items-center justify-center xl:flex-row lg:flex-row flex-col gap-4 md:mt-14 mt-4 space-y-6 p-14 md:p-0 xl:p-0 lg:p-0
        "
        >
          <div className="w-full items-center flex flex-col justify-center  max-w-50 p-6">
            <img src={tour_guide} alt="tour_img" className="w-18"/>
            <h2 className="text-xl font-semibold text-regal-navy-blue">
              Where to Stay
            </h2>
            <p className="text-base font-medium font-colledge text-regal">
              {" "}
              We have a lot of Hotels all across Abia state there can make your
              stay beautiful.
            </p>
          </div>
          <div className="w-full items-center flex flex-col justify-center bg-white rounded-xl max-w-50 p-6">
            <img src={travelling_1} alt="travelling_img" className="w-18"/>
            <h2 className="text-xl font-semibold text-regal-navy-blue">
              Travel
            </h2>
            <p className="text-base font-medium font-colledge text-regal">
              Our Travel agent can provide any booking of your choice and
              location.
            </p>
          </div>
          <div className="w-full items-center flex flex-col justify-center max-w-50 p-6">
            <img src={hands_1} alt="tour_img" className="w-18"/>
            <h2 className="text-xl font-semibold text-regal-navy-blue">
              {" "}
              What to See
            </h2>
            <p className="text-base font-medium font-colledge text-regal">
              {" "}
              So many beautiful pleases to visit and tour with a large
              experience.
            </p>
          </div>
          <div className="w-full items-center flex flex-col justify-center  max-w-50 p-6">
            <img src={medical_team} alt="tour_img" className="w-18"/>
            <h2 className="text-xl font-semibold text-regal-navy-blue">
              What to Do
            </h2>
            <p className="text-base font-medium font-colledge text-regal">
              {" "}
              We have a lot of exciting things to do at your stay and you will
              love it .
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Outstanding;
