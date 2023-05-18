import React, { useState } from "react";
import ModalMovie from "./ModalMovie";

const Movie = ({ title, overview }) => {
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");

  const handleAddToFavorites = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <p>{overview}</p>
      <input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
      {showModal && (
        <ModalMovie
          name={title}
          img="https://example.com/movie-poster.jpg" // Replace with the actual movie image URL
          comment={comment}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Movie;
