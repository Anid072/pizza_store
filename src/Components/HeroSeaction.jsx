import { CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import LinearProgress from "@mui/material/LinearProgress";
import { parathaGet } from "../Fuetures/Paratha/ParathaSlice";
import { pizzaGet } from "../Fuetures/Pizza/PizzaSlice";
import Pizza1 from "../Pages/Pizza1";
import { Link } from "react-router-dom";

const HeroSeaction = () => {
  const { pizza } = useSelector((state) => state.pizza);
  const { isLoading } = useSelector((state) => state.paratha);
  const dispatch = useDispatch();
  const { home } = useState("/");

  useEffect(() => {
    dispatch(parathaGet());
    dispatch(pizzaGet());
  }, []);

  if (isLoading) {
    return (
      <Typography variant="h3" sx={{ textAlign: "center", mt: 5 }}>
        <CircularProgress color="inherit" />
      </Typography>
    );
  }

  return (
    <div className="populare">
      <Typography variant="h5" sx={{ mt: 2 }}>
        <hr />
      </Typography>
      <Typography variant="h5" sx={{ ml: 2, mt: 2, fontWeight: "bold" }}>
        Popular Dishes
      </Typography>

      <Link to={"/menu"}>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2  md:grid-cols-2 gap-10 mt-5 p-3 justify-around items-center">
        {pizza?.map((piz) => <Pizza1 key={piz.id} piz={piz} />).slice(0, 8)}
      </div>
      </Link>
    </div>
  );
};

export default HeroSeaction;
