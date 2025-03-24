import Rectangle_19353 from "../assets/projects/Rectangle_19353.png";
import Vector from "../assets/projects/Vector.png";

const Tour = () => {
  return (
    <div
      className="relative md:h-100 h-37 bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${Rectangle_19353})` }}
    >
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32">
        <h1 className="italic font-semibold md:text-9xl text-6xl lg:text-9xl xl:text-9xl text-white text-center">
          abiatour
        </h1>
        <img
          src={Vector}
          alt="vector-img"
          className="md:w-15 xl:w-15 lg:w-15 w-12 absolute md:top-1/2 md:left-1/2 left-2/5 top-2/5 items-center"
        />
      </div>
    </div>
  );
};

export default Tour;
