import Rectangle_2517 from "../assets/projects/Rectangle_2517.png";
import { FaArrowRightLong } from "react-icons/fa6";
import phone from "../assets/projects/phone.png";
import Group_49 from "../assets/projects/Group_49.png"
import Location_1 from "../assets/projects/Location_1.png"

const Message = () => {
  return (
    <div
      className="relative h-210 mb-2 bg-cover bg-center md:p-20 xl:p-18 lg:p-20 p-0"
      style={{ backgroundImage: `url(${Rectangle_2517})` }}
    >
      <div className="container mx-auto p-0 md:p-6 lg:p-8 flex flex-wrap justify-start">
        <div className="w-full md:w1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-6 lg:p-4">
          <h1 className="font-bold text-3xl sm:text-[40px] leading-14 text-regal-vision mb-2">
            Message Abiatour
          </h1>
          <p className="font-medium text-lg leading-6 text-regal-vision-black mb-4 md:max-w-150 xl:max-w-150 lg:max-w-150">
            {" "}
            Send us a message on what you think and what you want us to help you
            out with
          </p>
          <form className="mt-4 md:mt-6 lg:mt-6">
            <div className="flex justify-start space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-full  p-2 md:p-3 lg:p-4 text-lg md:text-xl
        lg:text-2xl border border-gray-300 rounded-lg mt-2 md:mt-3 lg:mt-4 bg-white font-normal text-regal-blur"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-full p-2 md:p-3 lg:p-4 text-lg md:text-xl
        lg:text-2xl border border-gray-300 rounded-lg mt-2 md:mt-3 lg:mt-4 bg-white font-normal text-regal-blur"
              />
            </div>
            <div className="flex justify-start space-x-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full md:w-full p-2 md:p-3 lg:p-4 text-lg md:text-xl
        lg:text-2xl border border-gray-300 rounded-lg mt-2 md:mt-3 lg:mt-4 bg-white font-normal text-regal-blur"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full md:w-full p-2 md:p-3 lg:p-4 text-lg md:text-xl
        lg:text-2xl border border-gray-300 rounded-lg mt-2 md:mt-3 lg:mt-4 bg-white font-normal text-regal-blur"
              />
            </div>
            <input
              type="topic"
              placeholder="Topic"
              className="md:w-full xl:w-full lg:w-full w-full p-2 mt-2 md:p-3 lg:p-4 text-lg md:text-xl
        lg:text-2xl border border-gray-300 rounded-lg md:mt-3 lg:mt-4 bg-white font-normal text-regal-blur"
            />
            <textarea
              placeholder="Message"
              className="md:w-full xl:w-full lg:w-full w-full p-2 md:p-3 lg:p-4 text-lg md:text-xl lg:text-2xl border border-gray-300 rounded-lg mt-2 md:mt-3 lg:mt-4 bg-white text-regal-blur"
            ></textarea>
            <button className="bg-[#e54141] w-22 py-2 px-4 mt-4 font-bold text-base text-white rounded-lg flex flex-row items-center gap-1">
              {" "}
              Send <FaArrowRightLong className="w-10 mt-1" />{" "}
            </button>
          </form>
        </div>
        <div className="w-80 md:w-97 lg:w-97 xl:w-87 p-2 md:p-6 lg:p-8 bg-[#3c3c3c] text-white rounded-xl h-86 md:mt-42 xl:mt-42 lg:mt-42 m-4">
          <h1 className="md:font-bold font-semibold md:text-xl text-lg leading-2 mt-4">
            You can also contact us on
          </h1>

          <div className="flex flex-col mt-10 md:mt-4 lg:mt-4 space-x-2">
            <div className="flex space-x-1">
            <div>
            <img src={Location_1} alt="phone-img" className="mt-2 w-16"/>
            </div>
            <div className="mb-4">
                <span className="">Umuahia</span>
                <p className="text-sm md:font-semibold font-medium  leading-5">
                  Old Timber road, Umuahia Township Stadium, Umuahia Ahia State
                </p>
              </div>
            </div>
           
              <div className="flex space-x-1">
              <div>
            <img src={Location_1} alt="phone-img" className="mt-2 w-16"/>
            </div>
           
            <div className="mb-4">
                <span className="">Aba</span>
                <p className="text-sm md:font-semibold font-medium leading-5">
                Eyinba Township Stadium house, Aba road, Aba Abia State
                </p>
              </div>
              </div>
             <div className="flex space-x-1">
             <div>
            <img src={phone} alt="phone-img" className="mt-2 w-10"/>
            </div>
           
            <div className="mb-4">
                <span className="">Call</span>
                <p className="text-sm md:font-semibold font-medium  leading-5">
                (+234)08133784235
                </p>
              </div>
             </div> 
             <div>
              <img src={Group_49} alt="img" className="w-25 mt-4"/>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
