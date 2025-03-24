import logo_5 from "../assets/projects/logo_5.png";
import Group_169 from "../assets/projects/Group_169.png";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-16 lg:px:32 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={logo_5} alt="logo-img" />
          <p className="font-medium text-base leading-7 text-regal-manrope mt-4 md:max-w-60">
            Tour with easy and get explore with AbiaTour.
          </p>
          <img src={Group_169} alt="contact-info" className="mt-4" />
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
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
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="font-bold text-xl leading-6 text-regal-sky">Places</h3>
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
        <div className="w-full md:w-1/3">
          <h3 className="font-bold text-xl leading-6 text-regal-sky">
            Join Our Newsletter
          </h3>
          <div>
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded bg-gray-200 text-regal-sky
                    font-medium text-base leading-6 border-none focus:outline-none w-80 md:w-auto"
            />
            <button className="py-3 px-6 bg-[#ffba0a] rounded text-white mt-8">
              Subscribe
            </button>
          </div>

          <p className="mt-6 font-medium text-base leading-6 text-regal-sky md:max-w-90 ">
            * Will send you weekly updates for your better tour packages.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 mt-10 text-center font-medium text-base leading-6 text-regal-sky ">
        Copyright @ Abiatour 2024. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
