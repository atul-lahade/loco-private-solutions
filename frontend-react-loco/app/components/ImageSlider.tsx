import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { culinaryProducts, decorProducts, spicesProducts, vegetableProducts } from "~/utils";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export function ImageSlider() {
  const slides = [
    ...vegetableProducts.map(product => ({ title: product.title, url: product.image })),
    ...culinaryProducts.map(product => ({ title: product.title, url: product.image })),
    ...spicesProducts.map(product => ({ title: product.title, url: product.image })),
    ...decorProducts.map(product => ({ title: product.title, url: product.image })),
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
      <NavLink to="/products">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#799AA3]">
          <span>Our Products</span>
          <div className="mt-2 flex justify-center">
            <hr aria-hidden="true" role="separator" className="border-t-2 border-gray-300 w-1/6" />
          </div>
        </h2>
      </NavLink>
      <div className="max-w-[1400px] h-full sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 m-auto relative group flex flex-col items-center sm:mt-14 md:mt-16 lg:mt-16 xl:mt-20 lg:-mb-28">
        <div style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-2xl bg-center bg-cover duration-500">
        </div>
        <div className="hidden group-hover:block absolute top-1/3 -translate-y-1/2 left-2 sm:left-5 text-xl sm:text-2xl rounded-full p-1 sm:p-2 bg-black/20 cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="hidden group-hover:block absolute top-1/3 -translate-y-1/2 right-2 sm:right-5 text-xl sm:text-2xl rounded-full p-1 sm:p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <h3 className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6">
          {slides[currentSlide].title}
        </h3>
      </div>
    </div>
  );
}