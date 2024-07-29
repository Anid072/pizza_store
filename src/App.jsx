import React from "react";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import CardBadge from "./Components/CardBadge";
import CheckOut from "./Pages/CheckOut";
import Register from "./Pages/Register";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/badge" element={<CardBadge />} />
        <Route path="/check" element={<CheckOut />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
