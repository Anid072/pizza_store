import React from "react";
import image1 from "../assets/La pinoz1.png";
import image2 from "../assets/La pinoz2.png";
import image3 from "../assets/La pinoz3.png";
import image4 from "../assets/La pinoz4.png";
import image5 from "../assets/La pinoz5.png";
import image6 from "../assets/La pinoz6.png";

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MobileIcon = () => {
  return (
    <>
      <div id="mobile" className="mobile">
        <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
          <hr />
        </Typography>
        <Typography variant="h5" sx={{ ml: 2, mt: 2, fontWeight: "bold" }}>
          Menu
        </Typography>
        <div className="flex place-content-around">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-10 p-3">
            <Link to={"/menu"}>
              <div className="border ">
                <img className="" src={image1} alt="" />
                <h6 className="text-center">Sider</h6>
              </div>
            </Link>
            <Link to={"/menu"}>
              <div className="border ">
                <img src={image2} alt="" />
                <h6 className="text-center">Flat Out</h6>
              </div>
            </Link>
            <Link to={"/menu"}>
              <div className="border ">
                <img src={image3} alt="" />
                <h6 className="text-center">Veg Pizza</h6>
              </div>
            </Link>
            <Link to={"/menu"}>
              <div className="border ">
                <img src={image4} alt="" />
                <h6 className="text-center">Non-Veg Pizza</h6>
              </div>
            </Link>
            <Link to={"/menu"}>
              <div className="border ">
                <img src={image5} alt="" />
                <h6 className="text-center">Classic Pizza</h6>
              </div>
            </Link>
            <Link to={"/menu"}>
              <div className="border ">
                <img src={image6} alt="" />
                <h6 className="text-center">Dessert & Beverages</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileIcon;
