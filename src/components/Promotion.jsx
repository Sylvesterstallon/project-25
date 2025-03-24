import desktop_1 from "../assets/projects/desktophoto_1.png"
import Destination_2 from "../assets/projects/Destination_2.png"
import Destination_3 from "../assets/projects/Destination_3.png"
import Destination_4 from "../assets/projects/Destination_4.png"
import Mask_grup from "../assets/projects/Mask_group.png"


const Promotion = () => {
  return (
    <div className="m-h-screen p-1 ml-3 md:p-14  md:ml-15">
      <div className="">
        <h4 className="font-bold text-lg text-regal-white">PROMOTION</h4>
        <h2 className="font-teriary md:font-bold text-4xl w-fit leading-14 font-semibold md:text-5xl md:w-dvh text-regal-navy md:leading-16">
          {" "}
          We Provide You Best Eastern Sightseeing Tours
        </h2>
        <p className="text-lg font-normal leading-7 md:w-lvh text-regal-black w-fit md:mt-5">
          {" "}
          Abia, is one of the best state in Nigeria is moving from a mega city
          to a smart city where technology will drive development, innovations
          and security in the stride to grow from the 5th to the 3rd largest
          economy in Africa.
        </p>
        <div className="flex gap-8 mt-44 flex-wrap">
                    <div className="items-center text-center ">
                                        <img className="w-52"  src={desktop_1} alt="desktop_img1" />
                                        <p className="font-semibold text-regal-navy-blue text-lg">Azumini Blue River</p>
                    </div>
                    <div className="items-center text-center">
                                        <img className="w-52"  src={Destination_2} alt="destination-img1" />
                                       <p className="font-semibold text-regal-navy-blue text-lg">Aba Nigeria Temple</p> 
                    </div>
                    <div className="items-center text-center">
                                        <img className="w-52"  src={Destination_3} alt="destination-img3" />
                                       <p className="font-semibold text-regal-navy-blue text-lg"> National War Museum</p>
                    </div>
                    <div>
                                        <img className="w-52" src={Destination_4} alt="destination-img4" />
                                       
                    </div>
                    <div className="absolute ml-220 -mt-48">
                    <img className="w-72 hidden md:block" src={Mask_grup} alt="mask-grup" />
                    </div>
                    
                   
                                     
                                     
                 
        </div>
        
      <div>
     
      </div>
     
      </div>
    </div>
  );
};

export default Promotion;
