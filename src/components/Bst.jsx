import Group_7 from "../assets/projects/Group_7.png";
import Group_13 from "../assets/projects/Group_13.png";
import Group_10 from "../assets/projects/Group_10.png";
import image_872 from "../assets/projects/image_872.png";
import Rectangle_19 from "../assets/projects/Rectangle_19.png";
import OPTIONS from "../assets/projects/OPTIONS.png";
import image_27 from "../assets/projects/image_27.png";
import Rectangle_20 from "../assets/projects/Rectangle_20.png";
import Group from "../assets/projects/Group.png";
import { motion } from "framer-motion";

const Bst = () => {
  return (
    <motion.div
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    
    className="flex flex-wrap justify-between md:p-22 md:-mt-60  mt-2 p-8">
      <div>
        <div className="md:max-w-120 max-w-full">
          <h3 className="font-bold text-lg text-regal-white font-colledge">
            Fast & Easy
          </h3>
          <h2 className="md:font-bold font-semibold md:text-5xl text-4xl font-teriary text-regal-light-navy-blue md:leading-16 leading-12">
            Get Your Favourite Resort Bookings
          </h2>
        </div>
        <div className="md:mt-14 mb-30 mt-10">
          <div className="flex items-center gap-4 mb-10">
            <img src={Group_7} alt="group-img" />
            <div>
              <h4 className="font-bold text-base leading-5 text-regal">
                Choose Destination
              </h4>
              <p className="font-normal text-base leading-5 md:w-76 w-full text-regal">
                Choose the country/state where you plan to visit
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-10">
            <img src={Group_13} alt="group-img2" />
            <div>
              <h4 className="font-bold text-base leading-5 text-regal">
                Check Availability
              </h4>
              <p className="font-normal text-base leading-5 md:w-76 w-full text-regal">
                Check to know the availability of your prefer destination
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <img src={Group_10} alt="group-10" />
            <div>
              <h4 className="font-bold text-base leading-5 text-regal">
                Let’s Go
              </h4>
              <p className="font-normal text-base leading-5 md:w-76 w-full text-regal">
                Just click on the confirm button and you are ready to Go.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit">
        <img
          className="w-160 md:ml-10 ml-30 -mt-20 -mr-40"
          src={image_872}
          alt="img-flight"
        />

        <div className="flex w-fit absolute md:-mt-55 -mt-37 md:-ml-25 ml-1">
          <div className="bg-white md:w-80 w-70 rounded-4xl p-6">
            <img src={Rectangle_19} alt="image4" />
            <h4 className="font-medium text-lg leading-6 text-regal-lemon mt-6">
              Trip to Abia
            </h4>
            <p className="font-medium text-md leading-5 text-regal-light-purple mt-6">
              14-29 june | by JR Martin
            </p>
            <img className="mt-6" src={OPTIONS} alt="image5" />
            <p className="font-medium text-md leading-5 text-regal-light-purple mt-6">
              60 people are interested
            </p>
          </div>

          <div className="flex absolute bg-white w-53 md:mt-60 mt-50 md:ml-60   ml-55 rounded-2xl ">
            <div>
              <img className="rounded-4xl" src={image_27} alt="image27" />
            </div>

            <div className="ml-4">
              <p className="font-medium text-sm leading-4 text-regal-light-purple">
                Ongoing
              </p>
              <h4 className="font-medium text-lg leading-5 text-regal-lemon mt-3">
                Trip to Umuahia
              </h4>
              <p className="font-medium text-sm leading-4 text-regal-white mt-3">
                40%<span className="text-regal-lemon ">completed</span>
              </p>
              <img className="mt-3" src={Rectangle_20} alt="image7" />
              <div>
                <img src={Group} alt="loveimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Bst;
