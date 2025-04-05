import testimonials from "../assets/projects/testimonials.png";
// import Rectangle_2509 from "../assets/projects/Rectangle_2509.png";
import Rectangle_2511 from "../assets/projects/Rectangle_2511.png";
import Sylvera_001 from "../assets/projects/sylvesterstallone.jpg";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
      className="relative min-h-screen bg-cover bg-center items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${testimonials})` }}
    >
      <div className="container text-center mx-auto flex flex-col items-center px-2 md:px-20 lg:px-32 mt-18">
        <div>
          <h1 className="font-bold text-[40px] leading-14 text-regal-vision">
            Testimonials
          </h1>
        </div>
        <div className="flex md:flex-row xl:flex-row lg:flex-row flex-col gap-8 mt-14 space-y-10 p-14 md:p-0 xl:p-0 lg:p-0">
          <div className="bg-regal-background border-1 border-solid border-white backdrop-blur-xl rounded-2xl p-8">
            <div className="">
              <div className="flex flex-row items-center">
                <div>
                  <img src={Rectangle_2511} alt="" />
                </div>
                <div>
                  <span className="font-bold text-base leading-6 text-regal-second">
                    - Chisom Mike
                  </span>
                  <p className="font-medium text-[14px] leading-6 text-regal-second">
                    Tourists
                  </p>
                </div>
              </div>
              <div>
                <p className="max-w-130 text-left font-medium text-base leading-6 text-regal-second">
                  My stay at this hotel was nothing short of magical. From the
                  moment I stepped in, I was greeted with warm smiles and an
                  incredibly hospitable staff. <br />
                  The room's elegant decor and the breathtaking view from the
                  balcony added to the charm. <br />
                  The in-house dining options were delightful, offering a blend
                  of local and international cuisines. I found the entire
                  experience to be an exquisite fusion of luxury and comfort.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-regal-background border-1 border-solid border-white backdrop-blur-xl rounded-2xl p-8 max-w-220">
            <div className="">
              <div className="flex flex-row items-center">
                <div>
                  <img src={Rectangle_2511} alt="" />
                </div>
                <div>
                  <span className="font-bold text-base leading-6 text-regal-second">
                    - Sylvester Stallone
                  </span>
                  <p className="font-medium text-[14px] leading-6 text-regal-second">
                    Tourists
                  </p>
                </div>
              </div>
              <div>
                <p className="max-w-130 text-left font-medium text-base leading-6 text-regal-second">
                  My stay at this hotel was nothing short of magical. From the
                  moment I stepped in, I was greeted with warm smiles and an
                  incredibly hospitable staff. <br />
                  The room's elegant decor and the breathtaking view from the
                  balcony added to the charm. <br />
                  The in-house dining options were delightful, offering a blend
                  of local and international cuisines. I found the entire
                  experience to be an exquisite fusion of luxury and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
