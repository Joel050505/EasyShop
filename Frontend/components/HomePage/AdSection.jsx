"use client";
import {useState} from "react";
import {FaArrowRightLong, FaArrowLeftLong} from "react-icons/fa6";
import {motion} from "framer-motion";

export default function AdSection() {
  const adImages = [
    "/ads/ad1.jpg",
    "/ads/ad2.jpg",
    "/ads/ad3.jpg",
    "/ads/ad4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? adImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === adImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full ">
      {/* Bild */}
      <a href="/" className="cursor-pointer">
        <motion.img
          key={adImages[currentIndex]} // Unik nyckel för varje bild
          src={adImages[currentIndex]} // Bildkälla för
          alt={`Ad ${currentIndex + 1}`} // Dynamisk alt-text
          initial={{opacity: 40, scale: 0.98}} // Startvärden för animation
          animate={{opacity: 1, scale: 1}} // Animerade värden
          exit={{opacity: 1.02, scale: 1.02}} // Avslutande värden
          transition={{duration: 2}} // Animeringsövergång
          className="w-full h-82 object-fill shadow-lg"
        />
      </a>

      {/* Vänsterpil */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/70 hover:opacity-90 hover:scale-110 h-10 w-10 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
      >
        <FaArrowLeftLong />
      </button>

      {/* Högerpil */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/70 hover:opacity-90 hover:scale-110 h-10 w-10 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
      >
        <FaArrowRightLong />
      </button>
    </section>
  );
}
