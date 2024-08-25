import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const Modal = ({ closeImage, isOpen }) => {
    const { items, currentId} = useSelector((state) => state.gallery);

  return createPortal(
    <>
      <div className="bg-backdrop"></div>
      <dialog open={isOpen}>
        <div className="modal_content">
          <button className="modal_btn" onClick={closeImage}>Close</button>
          <img src={items[currentId-1].images.hero.large} className="modalImage" />
        </div>
      </dialog>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
