import { useEffect, useState } from "react";
import { getMovies, request } from "../../api/api.js";
import Movie from "./Movie.jsx";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getMovies(request.trending).then((response) => {
      setTrending(response);
    });

    getMovies(request.popular).then((response) => {
      setPopular(response);
    });
  }, []);

  return (
    <>
      <Movie movies={trending} index={0} />
      <Movie movies={popular}  index={1} />
      <Movie movies={popular}  index={1} />
      <Movie movies={popular}  index={1} />
    </>
  );
};

export default Carousel;
