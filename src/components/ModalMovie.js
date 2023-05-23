import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { apiUrl, posterPath } from "../config/variables";
import { Form, InputGroup, Stack } from "react-bootstrap";
import Comment from "./Comment";
import axios from "axios";

function ModalMovie({ movie, showModal, modalHandler, filterMovies }) {
  const [show, setShow] = useState(false);
  const [inFavorites, setInFavorites] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState("");
  const [movieInFavorite, setMovieInFavorite] = useState({});

  const handleClose = () => {
    modalHandler(false);
    setShow(false);
  };
  const handleShow = () => {
    modalHandler(true);
    setShow(true);
  };

  // Display the modal on click of `Add to Favorites` button
  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  useEffect(() => {
    console.log(movie);
    axios
      .get(`${apiUrl}/getMovieByTheMoviesdbId/${movie.themoviedbId}`)
      .then((res) => {
        setInFavorites(true);
        setMovieInFavorite(res.data);
        setComments(res.data.comments);
      })
      .catch((err) => {
        console.log("Movie isn't added to api");
      });
  }, []);

  const addComment = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${apiUrl}/addComment`, {
          movie,
          comment: comment.trim(),
        })
        .then((e) => {
          setComments([...comments, comment.trim()]);
          setComment("");
        });
    } catch (err) {
      console.error(err);
    }
  };

  const addToFavorite = () => {
    axios
      .post(`${apiUrl}/addMovie`, {
        title: movie.title,
        idThemoviesdb: movie.id,
        posterPath: movie.poster_path,
      })
      .then((res) => {
        console.log(res.data);
        setInFavorites(true);
        setMovieInFavorite(res.data);
      });
  };

  const removeFavorite = () => {
    try {
      axios
        .delete(`${apiUrl}/deleteMovie/${movieInFavorite.id}`, {})
        .then((res) => {
          filterMovies();
          setInFavorites(false);
          setComments([]);
          setMovieInFavorite({});
          console.log(res);
        });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="imgInModal" src={`${posterPath}${movie.poster_path}`} />
        <div>
          <Stack>
            {inFavorites ? (
              <Button variant="danger" onClick={removeFavorite}>
                Remove from favorites
              </Button>
            ) : (
              <Button variant="success" onClick={addToFavorite}>
                Add to favorites
              </Button>
            )}
          </Stack>
        </div>

        {comments?.length > 0 && (
          <Stack style={{ marginTop: 12, maxHeight: 150, overflow: "scroll" }}>
            <h4>Comments</h4>
            {comments.map((comment, index) => (
              <Comment comment={comment} key={index} />
            ))}
          </Stack>
        )}

        {inFavorites && (
          <form onSubmit={addComment}>
            <InputGroup className="mb-3 mt-3">
              <Form.Control
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </InputGroup>
          </form>
        )}
      </Modal.Body>
      {/* <Modal.Footer>
				<Button
					variant='secondary'
					onClick={handleClose}
				>
					Cancel
				</Button>
				
			</Modal.Footer> */}
    </Modal>
  );
}

export default ModalMovie;
