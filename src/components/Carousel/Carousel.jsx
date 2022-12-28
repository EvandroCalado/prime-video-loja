import Movie from "./Movie.jsx";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef } from "react";
import "./Carousel.scss";

let page = 0

const Carousel = () => {
  const carousel = useRef();

  const handleLeftClick = () => {
    page = page - 100

    carousel.current.style.marginLeft = `${page}%`
  };

  const handleRightClick = () => {
    page = page + 100

    carousel.current.style.marginLeft = `-${page}%`

  };

  return (
    <div className="carousel-contaner">
      <h3>Loja Filmes Lançamentos</h3>
        <div onClick={handleLeftClick} className="carousel-btn left">
          <BsChevronLeft />
        </div>
        <div onClick={handleRightClick} className="carousel-btn right">
          <BsChevronRight />
        </div>
      <div className="carousel-wrapper" ref={carousel}>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
};

export default Carousel;
