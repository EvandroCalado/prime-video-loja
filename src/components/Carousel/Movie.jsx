import { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDoNotDisturbAlt, MdOutlineMessage } from "react-icons/md";

import "./Movie.scss";
import { Link } from "react-router-dom";

let WidthToMove = 0;

const Movie = ({ movies, title, handlePLayClick }) => {
  const carousel = useRef();
  const [slide, isSlide] = useState(false);

  const handleClick = (direction) => {
    if (direction === "left") {
      WidthToMove = WidthToMove + 304;
      carousel.current.style.marginLeft = `${WidthToMove}px`;
    }

    if (direction === "right") {
      WidthToMove = WidthToMove - 304;
      carousel.current.style.marginLeft = `${WidthToMove}px`;
      isSlide(true);
    }
  };

  const renderMovie = movies?.results?.map((movie) => {
    const image = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`;

    return (
      <div key={movie.id} className="movie-image">
        <Link to={`info/${movie.id}`}>
          <div className="movie-img-fade"></div>
        </Link>
        <img className="movie-img" src={image} alt={movie.id} />
        <div
          className="movie-info-money-container"
          data-title="Estão disponíveis vídeos com R$ para alugar, comprar ou incluídos em assinaturas."
        >
          <img
            className="movie-info-money"
            src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/brl.svg"
            alt="R$"
          />
        </div>
        <div className="movie-info">
          <div className="movie-info-top">
            <h5 className="movie-info-top-title">Alugar por R$ 14,90</h5>
            <div className="movie-info-top-icons">
              <div
                className="movie-info-top-icon"
                data-title="Assistir ao trailer"
              >
                <FiPlay onClick={() => handlePLayClick(movie.id)} />
              </div>
              <div
                className="movie-info-top-icon"
                data-title="Adicionar à sua lista"
              >
                <AiOutlinePlus />
              </div>
              <div
                className="movie-info-top-icon"
                data-title="Ocultar esse filme"
              >
                <MdDoNotDisturbAlt />
              </div>
            </div>
          </div>
          <div className="movie-info-body">
            <h5 className="movie-info-body-title">{movie.title}</h5>
            <p className="movie-info-body-description">{movie.overview}</p>
          </div>
          <div className="movie-info-footer">
            <p>1h 45min</p> <p>{movie?.release_date?.substr(0, 4)}</p>{" "}
            <MdOutlineMessage />
            <div>
              <img
                className="movie-info-footer-image"
                src={
                  movie?.adult
                    ? "https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/djctq/18.png"
                    : "https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/djctq/l.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="carousel-contaner">
      <div className="video-modal"></div>
      <h3>
        <span>Loja</span> {title}
      </h3>
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
          {renderMovie}
        </div>
      </div>
    </div>
  );
};

export default Movie;
