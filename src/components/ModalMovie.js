import React from "react";

const ModalMovie = ({ name, img, onCloseModal }) => {
  return (
    <div className="modal">
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <button onClick={onCloseModal}>Close</button>
    </div>
  );
};

export default ModalMovie;
