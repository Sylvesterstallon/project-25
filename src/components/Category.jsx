 import tour_guide from "../assets/projects/tour_guide.png";
 import travelling_1 from "../assets/projects/travelling_1.png";
 import hands_1 from "../assets/projects/hands_1.png";
 import medical_team from "../assets/projects/medical_team.png";
import Rectangle_7516 from "../assets/projects/Rectangle_7516.png"

const Category = () => {
  return (
    <div
      className="relative md:min-h-170 min-h-200 bg-cover bg-center items-center w-full overflow-hidden"
           style={{ backgroundImage: `url(${Rectangle_7516})` }}
    >
      <div className="container text-center mx-auto flex flex-col items-center px-2 md:px-20 lg:px-32 mt-14">
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
      {/* <h6 className="text-lg font-semibold  text-regal-white leading-7 mb-6">
        CATEGORY
      </h6>
      <h1 className="md:text-5xl text-3xl font-teriary font-bold text-regal-light-navy-blue">
        Plan Your Trip
      </h1>
      <p className="md:text-xl text-lg font-normal text-regal-light-navy-blue text-center">
        Discover the best of Abia
      </p>

      <div className="flex flex-col md:flex-row md:items-start md:gap-20 mt-36">
        <div className="flex flex-col items-center text-center">
          <img  src={tour_guide} alt="tour_img" />
          <h1 className="text-xl font-semibold text-regal-navy-blue font-colledge mt-12">
            Where to Stay
          </h1>
          <p className="text-lg font-medium font-colledge text-regal mt-4">
            {" "}
            We have a lot of Hotels all across Abia state the can make your stay
            beautiful.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={travelling_1} alt="travelling_img" />
          <h1 className="text-xl font-semibold text-regal-navy-blue font-colledge mt-6">
            Travel
          </h1>
          <p className="text-lg font-medium font-colledge text-regal mt-4">
            Our Travel agent can provide any booking of your choice and
            location.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={hands_1} alt="tour_img" />
          <h1 className="text-xl font-semibold text-regal-navy-blue font-colledge mt-6">
            What to See
          </h1>
          <p className="text-lg font-medium font-colledge text-regal mt-4">
            {" "}
            So many beautiful pleases to visit and tour with a large experience.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={medical_team} alt="tour_img" />
          <h1 className="text-xl font-semibold text-regal-navy-blue font-colledge mt-6">
            What to Do
          </h1>
          <p className="text-lg font-medium font-colledge text-regal mt-4">
            We have a lot of exciting things to do at your stay and you will
            love it .
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Category;
