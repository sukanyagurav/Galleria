import React from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { galleryActions } from "../store/GalleryRedux";

const Gallery = () => {

  const { items, loading } = useSelector((state) => state.gallery)
  const dispatch= useDispatch()
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    800: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((galleryImage, index) => (
        <Link to={`/slideshow`} index={index} key={galleryImage.id}>
          <button className="container"  onClick={()=>dispatch(galleryActions.selectCurrentSlide(galleryImage.id))}>
            <div className="image">
            <img src={galleryImage.images.thumbnail} alt={galleryImage.name} />
            </div>
           
            <span className="content">
              <h2>{galleryImage.name}</h2>
              <span className="artistName">{galleryImage.artist.name}</span>
            </span>
          </button>
        </Link>
      ))}
    </Masonry>
  );
};

export default Gallery;
