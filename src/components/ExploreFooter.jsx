import Button_2 from "../assets/projects/Button_2.png";
import Button from "../assets/projects/Button.png";
import Socials from "../assets/projects/Socials.png";
import app_logo_1 from "../assets/projects/app_logo _1.png"

const ExploreFooter = () => {
  return (
    <div className="md:pt-30 pt-20 md:p-40 w-full overflow-hidden">
      <div className="container mx-auto md:flex-row justify-between items-center ">
        <div className="flex md:flex-row flex-col mx-auto justify-between md:p-4 space-y-5 px-4">
          <div className="w-53 flex flex-row items-center text-center">
            <img src={app_logo_1} alt="" />
            <p className="font-bold md:text-[30px] text-[30px] leading-14 text-regal-green">
              EXPLORE<span className="text-regal-pink">ABIA</span>
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <img src={Button_2} alt="button_img1" />
            </div>
            <div className="w-4">
              <span className="font-medium text-xs text-regal-second">Tel</span>
              <p className="font-bold text-base text-regal-pink">08133784235</p>
            </div>
            
          </div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <img src={Button} alt="buton_img" />
            </div>
            <div className="w-30">
              <span className="font-medium text-xs text-regal-second">
                Mail
              </span>
              <p className="font-bold text-base text-regal-pink">
                oluogusylvester@gmail.com
              </p>
            </div>
          </div>
          <div className="">
            <img src={Socials} alt="socials_img" />
          </div>
        </div>
        <div className="border-t border-gray-200  flex mx-auto  md:flex-row flex-col justify-between items-center mt-6 px-4">
          <div className="w-full md:w-1/9 mb-8 md:mb-0">
            <h3 className="font-bold text-xl leading-6 text-regal-sky">
              Company
            </h3>
            <ul className="flex flex-col gap-4 mt-6">
              <a
                href="#Header"
                className="text-regal-sky font-medium text-base leading-6"
              >
                About Us
              </a>
              <a
                href="#Careers"
                className="text-regal-sky font-medium text-base leading-6"
              >
                Careers
              </a>
              <a
                href="#Blog"
                className="text-regal-sky font-medium text-base leading-6"
              >
                Blog
              </a>
              <a
                href="#Pricing"
                className="text-regal-sky font-medium text-base leading-6"
              >
                Pricing
              </a>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold text-xl leading-6 text-regal-sky">
              Places
            </h3>
            <ul className="flex flex-col gap-4 mt-6">
              <a
                href="#"
                className="text-regal-sky font-medium text-base leading-6"
              >
                War Museum
              </a>
              <a
                href="#"
                className="text-regal-sky font-medium text-base leading-6"
              >
                Azumini Blur river
              </a>
              <a
                href="#"
                className="text-regal-sky font-medium text-base leading-6"
              >
                Ojukwu Bunker
              </a>
              <a
                href="#"
                className="text-regal-sky font-medium text-base leading-6"
              >
                Arochukwu Cave
              </a>
            </ul>
          </div>
          <div className="w-full md:w-120">
            <h3 className="font-bold text-xl leading-6 text-regal-sky">
              Join Our Newsletter
            </h3>
            <div>
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 rounded bg-gray-200 text-regal-sky
                       font-medium text-base leading-6 border-none focus:outline-none w-80 md:w-90"
              />
              <button className="py-3 px-6 bg-[#cf0e0e] rounded text-white mt-8">
                Subscribe
              </button>
            </div>

            <p className="mt-6 font-medium text-base leading-6 text-regal-sky md:max-w-90 ">
              * Will send you weekly updates for your better tour packages.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 mt-5 md:mt-30 text-center font-medium text-base leading-6 text-regal-sky ">
        Copyright @ Abiatour 2024. All Rights Reserved.
      </div>
    </div>
  );
};

export default ExploreFooter;
