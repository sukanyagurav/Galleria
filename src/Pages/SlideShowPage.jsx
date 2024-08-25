import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import viewImage from "/assets/shared/icon-view-image.svg";
import { galleryActions } from "../store/GalleryRedux";
import Modal from "../components/Modal";

const SlideShowPage = () => {
  const { items, currentId,slideShow } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();
  let data = items.find((item) => currentId == item.id);
  const [showImage,setShowImage]= useState(false)
  function onNext() {
    dispatch(galleryActions.handleNext(currentId));
  }
  function onPrevious() {
    dispatch(galleryActions.handlePrevious(currentId));
  }
  useEffect(()=>{
    let interval
    if(slideShow){
 
      interval = setInterval(()=>{
        dispatch(galleryActions.handleNext(currentId));
      },3000)
    }
    return ()=>clearInterval(interval)
   
   },[slideShow])
   function handleViewImage(){
    setShowImage(true)
   }
  return (
    <>
      <section className="">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {items.map((item) => (
            <div
              className={` gallery_container`}
              style={{
                width: "100%",
                flexShrink: 0,
                flexGrow: 0,
                translate: `${-100 * (currentId - 1)}%`,
              }}
              
            >
              <div className={`left `}>
                <div className="grid-1">
                  <picture>
                    <source
                      srcSet={item.images.hero.large}
                      media="(min-width: 700px)"
                    />
                    <img
                      src={item.images.hero.small}
                      alt={item.name}
                      className="gallery_image"
                    />
                  </picture>

                  <button className="btn" onClick={handleViewImage}  tabIndex={currentId == item.id ? '0' : '-1'} >
                    <img src={viewImage} alt="" />
                    View Image
                  </button>
                  <div className="gallery_content">
                    <h2>{item.name}</h2>
                    <span>{item.artist.name}</span>
                  </div>
                </div>

                <img
                  src={item.artist.image}
                  alt={item.artist.name}
                  className="gallery_artist"
                />
              </div>
              <div className={`right`}>
                <h2 className={` year`}>{item.year}</h2>
                <p className={` description`}>{item.description}</p>
                <Link to={item.source} className={`sourceLink `} tabIndex={currentId == item.id ? '0' : '-1'}>
                  Go to source
                </Link>
              </div>
            </div>
          ))}
        </div>
       
      </section>
      {/* footer */}

      <div className="progressbar">
          <div className="progressbar-fill" style={{height:'100%',
          background:'black',width:`${((currentId) / (items.length) * 100)}%`}}></div>
      </div>
      <div className="footer">
        <div className="footer_left">
          <h4>{data.name}</h4>
          <h6>{data.artist.name}</h6>
        </div>
        <div className="footer_right">
          <button onClick={onPrevious}  disabled={slideShow}>
            <img src="/assets/shared/icon-back-button.svg" alt="" />
          </button>
          <button onClick={onNext} disabled={slideShow}>
            <img src="/assets/shared/icon-next-button.svg" alt="" />
          </button>
        </div>
      </div>
     {showImage &&  <Modal closeImage={()=>setShowImage(false)} isOpen={showImage}/>}
    </>
  );
};

export default SlideShowPage;
