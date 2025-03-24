import h1_background_img from "../assets/projects/h1_background_img.png";
import Ellipse_624 from "../assets/projects/Ellipse_624.png";
import Group_210 from "../assets/projects/Group_210.png"
import Group_123 from "../assets/projects/Group_123.png"
import Travel_Concepts from "../assets/projects/Travel_Concepts.png"

const Clients = () => {
  return (
    <div
      className="bg-cover mb-4 min-h-screen bg-center items-center w-full -mt-20 overflow-hidden"
      style={{ backgroundImage: `url(${h1_background_img})` }}
    >
      <div className="container text-center mx-auto flex flex-col items-center md:px-20 lg:px-32">
        <div className="md:mt-10 mt-90">
          <h1
            className="font-teriary font-bold font-semibold md:text-5xl text-4xl leading-16 text-regal-light-navy-blue
              max-w-140"
          >
            See What Our Clients Say About Us
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img className="z-10 mt-2" src={Ellipse_624} alt="" />
          <div className="bg-white -mt-25 rounded-2xl">
                    <img className="absolute mt-15 -ml-15" src={Group_210} alt="" />
            <p className="md:w-140 w-100 font-default text-sm rounded-2xl md:p-20 p-20">
              Thanks a million time for such a life changing experience with
              Abiatour. i really enjoyed my stay and i will love to come back
              and again. Abia state is blessed with alot of natural treasure
              inside.
            </p>
            <img className="absolute md:-mt-40 md:ml-123 ml-84 -mt-50" src={Group_123} alt="" />

            <span className="font-black mb-8">Christine Beckam</span>
          </div>
        </div>
        
      </div>
      <img className="md:-mt-50 mt-15" src={Travel_Concepts} alt="" />
    </div>
  );
};

export default Clients;
