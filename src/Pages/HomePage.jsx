import React, { useEffect } from 'react'
import Gallery from '../components/Gallery'
import { galleryActions } from "../store/GalleryRedux";
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch()
  function stopSlideShow(){
    dispatch(galleryActions.stopSlideShow());
  }
  useEffect(()=>{
    stopSlideShow()
  },[])

  return (
    <>
      <Gallery/>
    </>
  )
}

export default HomePage
