import { useEffect, useState } from "react";
import { places } from "../assets/assets";
import Frame_left from "../assets/projects/Frame_left.png";
import Frame_right from "../assets/projects/Frame_right.png";
import { motion } from "framer-motion";

const Places = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(places.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextPlaces = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length);
  };
  const prevPlaces = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? places.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
    initial={{opacity: 0, x:-200}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
    className="container mx-auto py-4 px-6 pt-10 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
      <h1 className="font-secondary font-bold text-[38px] sm:text-4xl leading-11 text-center">
        Best Destinations For Tour
      </h1>
      <p className="text-2xl font-light text-center leading-7 text-regal-blur">
        See the instresting places where you can visit at your stay in Abia
        State with a lot of excitment{" "}
      </p>

      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevPlaces}
          className="p-4 rounded mr-2 bg-gray-100 w-20 mt-4"
          aria-label="Previous"
        >
          <img src={Frame_left} alt="left-icon" className="w-16" />
        </button>
        <button
          onClick={nextPlaces}
          className="p-4 rounded mr-2 bg-gray-100 w-20 mt-4"
          aria-label="Next"
        >
          <img src={Frame_right} alt="right-icon" className="w-16" />
        </button>
      </div>

      {/* places slider container */}
      <div className="overflow-hidden">
        <div
          className="flex md:gap-8 gap-2 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {places.map((places, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={places.image} alt="places" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Places;
