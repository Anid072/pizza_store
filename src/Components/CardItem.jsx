import {
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ImageList,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Fuetures/AddToCard/CardSlice";
import { Link } from "react-router-dom";

const CardItem = ({ para }) => {
  const { isLoading } = useSelector((state) => state.paratha);
  // const [value, setValue] = React.useState(5);

  const dispatch = useDispatch();

  const handleSubmit = (card) => {
    dispatch(add(card));
  };

  // home page menu item parathaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

  // console.log(para)
  return (
    <>
      <div className="flex place-content-around popular">
        <Link to={"/menu"}>
          <div className="carts-1 px-1 pb-5  flex flex-col items-center justify-center">
            <img className="cart-item-img " src={para?.img} />
            <div >
              {/* <div className="mt-4 flex items-center justify-center ">
                <Stack spacing={1}>
                  <Rating name="size-medium" defaultValue={2} />
                </Stack>
              </div> */}
              <a href="#">
                <h5 className="text-xl card-text text-center font-semibold tracking-tight dark:text-white text-orange-600">
                  {para?.name}
                </h5>
              </a>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardItem;
