import {
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Pizza from "./Pizza";
import { useDispatch, useSelector } from "react-redux";
import { burgerGet } from "../Fuetures/Burger/BurgerSlice";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import { parathaGet } from "../Fuetures/Paratha/ParathaSlice";
import { pizzaGet } from "../Fuetures/Pizza/PizzaSlice";
import { drinkGet } from "../Fuetures/Drinks/DrinkSlice";

const Menu = () => {
  // const [value, setValue] = React.useState(5);
  const { drink } = useSelector((state) => state.drink);
  const { pizza } = useSelector((state) => state.pizza);
  const { burger } = useSelector((state) => state.burger);
  const { paratha, isLoading } = useSelector((state) => state.paratha);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(drinkGet());
    dispatch(pizzaGet());
    dispatch(parathaGet());
    dispatch(burgerGet());
  }, [0]);

  if (isLoading) {
    return (
      <Typography variant="h3" sx={{ textAlign: "center", mt: 5 }}>
        <LinearProgress color="inherit" />
      </Typography>
    );
  }

  return (
    <>
      <div className="menuu  ">
        <div className="menuuu p-2">
          <Typography
            variant="h5"
            sx={{
              ml: 5,
              color: "white",
              width: "140px",
              border: "1px solid white",
              borderRadius: "20px",
              mt: 5,
            }}
          >
            {" "}
            <LocalPizzaIcon sx={{ fontSize: 40, color: "orange" }} /> Pizza{" "}
          </Typography>
          <div className="grid cardbox1 lg:grid-cols-4 sm:grid-cols-2  md:grid-cols-2 gap-10 mt-5 p-2 justify-around items-center">
            {pizza
              ?.map((piz) => <Pizza key={piz.id} piz={piz} />)
              .slice(0, 16)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
