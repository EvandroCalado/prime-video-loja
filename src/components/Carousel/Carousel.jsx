import { useEffect, useRef, useState } from "react";
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
  const [isPlaying, setIsPlaying] = useState(true)
  const modal = useRef(null);

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
      modal.current.style.display = "block";
      setIsPlaying(true)
    });
  };

  const handleCloseClick = () => {
    modal.current.style.display = "none"
    setIsPlaying(false)
  }

  return (
    <>
      <div className="video-modal" ref={modal}>
        <div className="video-modal-wrapper">
          <VscChromeClose
            onClick={handleCloseClick}
            className="video-modal-close"
          />
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video}`}
            width="100%"
            height="100%"
            playing={isPlaying}
            muted
          />
        </div>
      </div>
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
        title="Discubra"
        handlePLayClick={handlePLayClick}
      />
    </>
  );
};

export default Carousel;
