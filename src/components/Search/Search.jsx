import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSearch } from "../../api/api";
import Card from "./Card";
import "./Search.scss";

const Search = () => {
  const search = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getSearch(search.movie).then((response) => {
      setMovies(response);
    });
  }, []);

  const renderCard = movies?.results?.map((movie) => {
    const image = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`;

    return (
      <Card
        key={movie.id}
        title={movie.title}
        id={movie.id}
        image={image}
        average={movie.vote_average}
        release={movie.release_date}
        rating={movie.adult}
        description={movie.overview}
        backdrop={movie.backdrop_path}
      />
    );
  });

  return (
    <div className="search-container">
      <div className="search-header">
        <h3>Resultados para "{search.movie}".</h3>
        <Link to={"/"}>
          <button>Limpar</button>
        </Link>
      </div>
      <div className="search-container-card">{renderCard}</div>
    </div>
  );
};

export default Search;
