import { Rating, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Fuetures/AddToCard/CardSlice";

const Burger = ({ bur }) => {
  const dispatch = useDispatch();

  const handleSubmit = (card) => {
    dispatch(add(card));
  };

  return (
    <>
      <div className="flex place-content-around">
        <div className="card-burger bg-white carts-1 px-5 pb-5 flex place-content-around flex-wrap items-center justify-center">
          <img className="cart-item-img pt-5" src={bur?.img} />
          <div className="px-3 pb-5">
            <div className="mt-4 flex items-center justify-center ">
              <Stack spacing={1}>
                <Rating name="size-medium" defaultValue={2} />
              </Stack>
            </div>
            <a href="#">
              <h5 className="text-xl text-center font-semibold tracking-tight dark:text-white text-orange-600 mt-3">
                {bur?.name}
              </h5>
            </a>
            <div className="flex items-center justify-around mt-5">
              <span className="text-2xl font-bold text-gray-900 dark:text-white card-item-price">
                ₹{bur?.price}
              </span>

              <div className="btns">
                <button
                  className="btn circle border "
                  onClick={() => handleSubmit(bur)}
                >
                  <a href="#" className="font-medium text-2xl">
                    <AddShoppingCartRoundedIcon />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;