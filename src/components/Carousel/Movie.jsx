import { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./Movie.scss";

let page = 0;

const Movie = ({ movies }) => {
  const carousel = useRef();
  const [slide, isSlide] = useState(false);

  const renderMovie = movies?.results?.map((movie) => {
    const image = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

    return (
      <div key={movie.id} className="movie-image">
        <img src={image} alt={movie.id} />
      </div>
    );
  });

  const handleClick = (direction) => {
    if (direction === "left") {
      page = page + carousel.current.offsetWidth;
      carousel.current.style.marginLeft = `${page}px`;
    }

    if (direction === "right") {
      page = page - carousel.current.offsetWidth;
      carousel.current.style.marginLeft = `${page}px`;
      isSlide(true);
    }
    console.log(carousel.current.offsetWidth);
  };

  return (
    <div className="carousel-contaner">
      <h3>Loja Filmes Lançamentos</h3>
      <div className="carousel-buttons">
        {!slide ? (
          ""
        ) : (
          <div
            onClick={() => handleClick("left")}
            className="carousel-btn left"
          >
            <BsChevronLeft />
          </div>
        )}

        <div
          onClick={() => handleClick("right")}
          className="carousel-btn right"
        >
          <BsChevronRight />
        </div>
        <div className="carousel-wrapper" ref={carousel}>
          {/* {!slide ? (
          ""
        ) : (
        )} */}

          {renderMovie}
        </div>
      </div>
    </div>
  );
};

export default Movie;
