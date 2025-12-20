"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AboutUs from "../components/About";
//import Photo from "../components/PhotoUpdates";
//import News from "../components/NewsUpdate";
import Contact from "../components/ContactUs";
//import Recruit from "../components/Recruitment";
import Footer from "./Footer";

const slides = [
  {
    image: "  /assets/oe.png",
    title: "Welcome to the Nigerian Army Cadet Corps",
    message:
      "We are a viable and potent force in the promotion of ideals of the Centre and the mobilization of youth at the grass root level.",
  },
  {
    image: " /assets/10.41.00_6bb7df44.jpg",
    title: "Empowering the Youths",
    message:
      "Providing a platform for youth development and instilling discipline for a better future.",
  },
  {
    image: "/assets/08.27.46_a47ad721.jpg",
    title: "Training for Excellence",
    message:
      "We imbue youths with leadership skills to help enhance community service and become a catalyst of positive change in their educational career.",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-6">
              <h1 className="text-4xl font-bold">{slide.title}</h1>
              <p className="mt-4 max-w-2xl">{slide.message}</p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Read More
              </button>
            </div>
          </div>
        ))}

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white"
          onClick={prevSlide}
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white"
          onClick={nextSlide}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
      <AboutUs />

      <section
        className="recruitment-section bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url('/assets/13.04.45_4f93447a.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 py-20 px-10 text-center">
          <h2 className="text-4xl font-bold mb-4">NACC Recruitment</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            The Nigerian Army Cadet Corps is more than just an organization—it’s
            a corp under the supervision and guidance of the Nigerian Army,
            dedicated to community service, national development, and fostering
            leadership. By joining our ranks, you become part of a dynamic team
            committed to promoting peace, security, and patriotism across
            Nigeria.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Whether you’re looking to enhance your leadership skills, serve your
            community, or contribute to national progress, the Nigerian Army
            Cadet Corps offers the perfect platform to make a difference.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Take the first step towards a rewarding journey of personal growth
            and civic duty. Join us today and be part of a force for positive
            change!
          </p>
          <a
            href="/recruitment-info"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded text-lg inline-block"
          >
            Join Our Ranks
          </a>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
