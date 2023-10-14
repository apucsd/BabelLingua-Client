import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollTop from "../Components/ScrollTop/ScrollTop";

const MainLayout = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <div className="fixed bottom-3 right-6">
        <ScrollTop></ScrollTop>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default MainLayout;
