import React from "react";
import pizza from "../assets/pzza0.png";
import pizza1 from "../assets/pzza1.png";
import pizza2 from "../assets/pzza-2.png";

const Crousal = () => {
  return (
    <div
      id="default-carousel"
      className="relative  carousi w-full"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden  md:h-96 ">
        {/* <!-- Item 1 --> */}
        <div
          className=" visible md:block duration-700 ease-in-out "
          data-carousel-item
        >
          <img
            src={pizza}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            />
            <div id="texth1" className="text-center">
              <h2 id="h2">Ch! Pizza Terrace -</h2>
              <h1 id="h1">
              In Pizza We Crust!</h1>
            </div>
        </div>
        {/* <!-- Item 2 --> */}
        <div
          className=" visible md:block duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={pizza1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <div id="texth2" className="text-center">
              <h2 id="h2">Google User Review -</h2>
              <h1 id="h3">
              “THE GLUTEN FREE <br /> CRUST IS THE BEST <br /> THING I’VE EVER <br /> TASTED!”</h1>
            </div>
        </div>
        <div
          className=" visible md:block duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={pizza2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
          data-carousel-active
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
          data-carousal-active
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
          data-carousal-active
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      {/* <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button> */}
      {/* <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button> */}
    </div>
  );
};

export default Crousal;
