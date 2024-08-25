import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { galleryActions } from "../store/GalleryRedux";

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slideShow } = useSelector((state) => state.gallery);
 
  function handleSlideShow() {
    if (pathname === "/") {
      dispatch(galleryActions.selectCurrentSlide(1));
    }
    dispatch(galleryActions.startSlideShow());
    navigate("/slideshow");
  }

  function stopSlideShow(){
    dispatch(galleryActions.stopSlideShow());
  }


  return (
    <header>
      <Link to="/">
        <h1>galleria.</h1>
      </Link>
     {(!slideShow || pathname == '/') && <button onClick={handleSlideShow} className="slideShowBtn">
        Show Slideshow
      </button>}
     {(slideShow && !(!slideShow || pathname == '/')) && <button onClick={stopSlideShow} className="slideShowBtn">
        Stop Slideshow
      </button>}
    </header>
  );
};

export default Navbar;
