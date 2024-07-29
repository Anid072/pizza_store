import { Rating, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

import React from "react";
import { useDispatch } from "react-redux";
import { addPizzas } from "../Fuetures/Pizza/PizzaSlice";
import { add } from "../Fuetures/AddToCard/CardSlice";

const Pizza1 = ({ piz }) => {

  const dispatch = useDispatch()

  const handleSubmit = (card) => {
    dispatch(add(card));
  }

  

  return (
    <>
      <div className="flex place-content-around">
        <div className="card-burger bg-white carts-1 px-1 pt-6 flex flex-col items-center justify-center">
          <img className="cart-item-img pt-5" src={piz?.img} />
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl text-center font-semibold tracking-tight dark:text-white text-orange-600 mt-3">
                {piz?.name}
              </h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza1;
