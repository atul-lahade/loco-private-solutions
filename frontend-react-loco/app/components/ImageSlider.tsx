import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { culinaryProducts, decorProducts, spicesProducts, vegetableProducts } from "~/utils";
import { useEffect, useState } from "react";

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
    <div className="container mx-auto mb-4 px-4 sm:px-6 lg:px-8 py-2 text-center">
      <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#799AA3] mb-4 sm:mb-4 md:mb-6 lg:mb-8">
        <span>Our Products</span>
        <div className="mt-2 flex justify-center">
          <hr aria-hidden="true" role="separator" className="border-t-2 border-gray-300 w-1/6" />
        </div>
      </h2>
      <div className="max-w-[1400px] h-[500px] sm:h-3/4 sm:w-3/4 md:h-[700px] lg:h-[780px] w-10/12 m-auto p-auto relative group">
        <div style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        </div>
        <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-2 sm:left-5 text-xl sm:text-2xl rounded-full p-1 sm:p-2 bg-black/20 cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-2 sm:right-5 text-xl sm:text-2xl rounded-full p-1 sm:p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
      </div>
      <h3 className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-1 sm:mt-2 md:mt-3 lg:mt-4">
          {slides[currentSlide].title}
        </h3>
    </div>
  );
}