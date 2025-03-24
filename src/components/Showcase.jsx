import Group_12 from "../assets/projects/Group_12.png";
import contact_7 from "../assets/projects/contact-7.png";
import connect_7 from "../assets/projects/connect_7.png";
import Group_11 from "../assets/projects/Group_11.png";
import Rectangle_19 from "../assets/projects/Rectangle_19.png";
import OPTIONS from "../assets/projects/OPTIONS.png";
import image_27 from "../assets/projects/image_27.png";
import Rectangle_20 from "../assets/projects/Rectangle_20.png";
import Group from "../assets/projects/Group.png";
import Rectangle_18 from "../assets/projects/Rectangle_18.png";

const Showcase = () => {
  return (
    <div className="relative md:min-h-200 min-h-250 items-center w-full overflow-hidden bg-gray-100 ">
      <div className="grid md:grid-cols-2 md:gap-16 items-center md:px-45 md:py-45 p-8 mt-10 md:mt-0">
        <div className="flex flex-col justify-start items-start text-left">
          <h1 className="md:font-bold font-semibold md:text-[50px] text-[40px] md:leading-14 leading-12 text-regal-light-navy-blue max-w-100">
            Showcase Your Hotel with Easy
          </h1>

          <div className="flex flex-col justify-start items-start text-left space-y-10 md:mt-10 mt-6">
            <div className="flex flex-row gap-4">
              <div className="flex items-center justify-center">
                <img src={contact_7} alt="12-img" />
              </div>

              <div>
                <span className="font-bold text-base text-regal">
                  Create Account
                </span>
                <p className="text-regal font-normal text-base max-w-75">
                  Create a hotel owner account and login to get started.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex items-center justify-center">
                <img src={Group_12} alt="12-img" />
              </div>

              <div>
                <span className="font-bold text-base text-regal">
                  Upload Hotel
                </span>
                <p className="text-regal font-normal text-base max-w-75">
                  Upload your hotel and hotel rooms and make it available for
                  booking
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex items-center justify-center">
                <img src={Group_11} alt="11-img" />
              </div>

              <div>
                <span className="font-bold text-base text-regal">
                  Make Money
                </span>
                <p className="text-regal font-normal text-base max-w-75">
                  Make money as your hotel rooms gets booked often
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-60 md:mt-5">
          <div className="p-6 md:w-90  bg-white rounded-2xl absolute z-2 -mt-42 transform translate-x-14">
            <img src={Rectangle_19} alt="" className="w-60 md:w-full"/>
            <h1 className="font-medium text-sm md:text-lg text-regal-lemon mt-4">
              Trip to Abia
            </h1>
            <div className="flex gap-4">
              <div className="space-y-4 mt-4">
                <p className="font-medium md:text-base text-xs text-regal-light-purple">
                  14-29 June | by JR Martin
                </p>
                <img src={OPTIONS} alt="option-img" />
                <div className="flex gap-2">
                  <img src={connect_7} alt="connect-7" />
                  <p className="font-medium md:text-base text-xs text-regal-light-purple">
                    60 people are interested
                  </p>
                </div>
              </div>
              <div className="flex gap-4 absolute md:ml-50 ml-35 bg-white rounded-2xl md:w-60 w-50">
                <div className="">
                  <img src={image_27} alt="" className="rounded-4xl" />
                </div>
                <div className="space-y-1 ">
                  <p className="font-medium text-sm text-regal-light-purple">
                    Ongoing
                  </p>
                  <h1 className="font-medium md:text-lg text-sm text-regal-lemon">
                    Trip to Umuahia
                  </h1>
                  <div className="flex">
                    <span className="font-medium md:text-sm text-xs">40%</span>

                    <p className="font-medium md:text-sm text-xs">completed</p>
                  </div>
                  <img src={Rectangle_20} alt="img-20" className="mt-4" />
                  <img src={Group} alt="goup-img" className="mt-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-1 transform md:-translate-x-20 md:translate-y-30 translate-y-28 -translate-x-7">
            <img src={Rectangle_18} alt="" className="md:w-70 w-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
