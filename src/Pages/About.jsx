import React from "react";
import pizza from "../assets/La-pizza-round-image.png";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
const About = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const value = window.scrollY * 0.25;
        imageRef.current.style.transform = `rotate(${value}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about p-2 " id="round-pizza">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
        <div className="about-img about-img-two mt-10 ">
          <img
            ref={imageRef}
            src={pizza} // Replace with your image URL
            alt="Rotating"
          />
        </div>

        <div className="about-text mt-10 flex items-left justify-center flex-col  ">
          <h5 className="text-2xl text-amber-400 text-center ">
            About Our Food
          </h5>
          <h1 className="text-5xl text-center ">
            From Texas with Indain Love
          </h1>
          <p className="text-2xl text-center mt-3  text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero
            dolores delectus tempora ad, dolorum deserunt, sequi saepe
            voluptatibus illo tempore soluta reprehenderit repellat ut amet a
            non nemo ducimus!
          </p>
         <Link to={"/menu"}>
         <Button
         className="w-full"
            size="large"
            color="warning"
            variant="outlined"
            sx={{ mt: 5 }}
          >
            Order Now
          </Button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
