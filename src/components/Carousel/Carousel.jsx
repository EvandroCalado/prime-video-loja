import { useEffect, useState } from "react";
import { getDircover, getMovies, getVideo, request } from "../../api/api.js";
import { VscChromeClose } from "react-icons/vsc";
import Movie from "./Movie.jsx";
import ReactPlayer from "react-player";
import "./Carousel.scss";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [toRated, setTopRated] = useState([]);
  const [discover, setDiscover] = useState([]);
  const [video, setVideo] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    getMovies(request.trending).then((response) => {
      setTrending(response);
    });

    getMovies(request.popular).then((response) => {
      setPopular(response);
    });

    getMovies(request.topRated).then((response) => {
      setTopRated(response);
    });

    getDircover().then((response) => {
      setDiscover(response);
    });
  }, []);

  const handlePLayClick = (movieid) => {
    getVideo(movieid).then((response) => {
      setVideo(response?.results?.[0]?.key);
      setIsPlaying(true);
    });
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {isPlaying && (
        <div style={{ zIndex: 300 }} className="video-modal">
          <div className="video-modal-wrapper">
            <VscChromeClose
              onClick={handleCloseClick}
              className="video-modal-close"
            />
            <ReactPlayer
              onEnded={() => setIsPlaying(false)}
              url={`https://www.youtube.com/watch?v=${video}`}
              width="100%"
              height="100%"
              playing
              muted
            />
          </div>
        </div>
      )}
      <Movie
        movies={trending}
        title="Filmes Lançamentos"
        handlePLayClick={handlePLayClick}
      />
      <Movie
        movies={popular}
        title="Populares"
        handlePLayClick={handlePLayClick}
      />
      <Movie
        movies={toRated}
        title="Melhores avaliados"
        handlePLayClick={handlePLayClick}
      />
      <Movie
        movies={discover}
        title="Descubra"
        handlePLayClick={handlePLayClick}
      />
    </>
  );
};

export default Carousel;
