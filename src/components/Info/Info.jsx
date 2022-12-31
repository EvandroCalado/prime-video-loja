import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits, getDetails, getVideo } from "../../api/api";
import { SiImdb } from "react-icons/si";
import { MdOutlineMessage, MdOutlineModeEditOutline } from "react-icons/md";
import {
  AiOutlineInfoCircle,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FiPlay, FiShare2 } from "react-icons/fi";
import { GiPartyPopper } from "react-icons/gi";
import "./Info.scss";
import ReactPlayer from "react-player";

const Info = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieVideo, setMovieVideo] = useState([]);
  const [credits, setCredits] = useState([])
  const [isPLayer, setIsPLayer] = useState(true);
  const movie = useParams();

  // console.log(credits?.cast);

  useEffect(() => {
    getDetails(movie.id).then((response) => {
      setMovieDetails(response);
    });

    getVideo(movie.id).then((response) => {
      setMovieVideo(response);
    });

    getCredits(movie.id).then((response) => {
      setCredits(response)
    })
  }, []);

  const renderGenre = movieDetails?.genres?.map((genre, index) => {
    return <span key={index} >{genre?.name}</span>
  })

  const renderLanguages = movieDetails?.spoken_languages?.map((lang, index) => {
    return <span key={index}>{lang?.name}</span>
  })

  // const renderCast = credits?.filter(cast => cast?.length < 5)
  // console.log(renderCast)

  const free = "https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/djctq/l.png"

  const mature = "https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/djctq/18.png"

  return (
    <div className="info-container">
      <div className="info-credits-back">
        <div className="info-credits-fade-left"></div>
        <div className="info-credits-fade-botton"></div>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movieDetails?.backdrop_path}`}
          alt=""
        />
        {isPLayer && (
          <ReactPlayer
            onEnded={() => setIsPLayer(false)}
            className="video"
            playing
            muted
            width={750}
            height={550}
            url={`https://www.youtube.com/watch?v=${movieVideo?.results?.[0]?.key}`}
          />
        )}
      </div>
      <div className="info">
        <h1 className="info-title">
          {movieDetails?.title}
        </h1>
        <div className="info-movie">
          <div className="info-imdb">
            <SiImdb className="info-imdb-icon" /> <p>6,7</p>
          </div>
          <p>{movieDetails?.runtime}min</p>
          <p>{movieDetails?.release_date?.substr(0,4)}</p>
          <img
            className="info-movie-img"
            src={movieDetails?.adult ? mature : free}
            alt=""
          />
          <MdOutlineMessage className="info-movie-leg" />
        </div>
        <div className="info-description">
          <p>{movieDetails?.overview}</p>
        </div>

        <div className="info-credits">
          <div className="info-credits-cast">
            <div className="info-credits-title">Diretor</div>
            <div className="info-credits-name">
              <span>Alfonso Pineda Ulloa,</span> <span>Alejandro Ricaño</span>{" "}
            </div>
          </div>
          <div className="info-credits-cast">
            <div className="info-credits-title">Atores principais</div>
            <div className="info-credits-name">
              <span>David Chocarro,</span> <span>Dulce María,</span>{" "}
              <span>Mauricio Argüelles</span>
            </div>
          </div>
          <div className="info-credits-cast">
            <div className="info-credits-title">Gênero</div>
            <div className="info-credits-name">
              {renderGenre}
            </div>
          </div>
          <div className="info-credits-cast">
            <div className="info-credits-title">Idiomas de áudio</div>
            <div className="info-credits-name">
              {renderLanguages}
            </div>
          </div>
        </div>

        <div className="info-rentalls">
          <AiOutlineInfoCircle className="info-rentalls-icon" />{" "}
          <p>
            Você tem um período de 30 dias para começar a assistir a um vídeo
            alugado e, após o início, precisa terminar de assistir em 48 horas.
          </p>
        </div>
        <div className="info-value">
          <button className="info-value-button-one">
            <p>Alugar</p>
            <p>
              <span>em HD</span> por R$ 14,90
            </p>
          </button>
          <button className="info-value-button-two">
            <p>Mais opções de</p>
            <p>compra/aluguel</p>
          </button>
          <div
            className="info-value-icon-container"
            data-title="Assitir ao triler"
          >
            <FiPlay className="info-value-icon" />
          </div>
          <div
            className="info-value-icon-container"
            data-title="Adicionar à sua lista"
          >
            <AiOutlinePlus className="info-value-icon" />
          </div>
          <div
            className="info-value-icon-container"
            data-title="Assista e converse com outras pessoas"
          >
            <GiPartyPopper className="info-value-icon" />
          </div>
        </div>
      </div>
      <div className="info-footer">
        <div className="info-footer-term">
          <p>
            Ao clicar em Reproduzir, você concorda com nossos{" "}
            <span>Termos de uso.</span>
          </p>
        </div>
        <div className="info-footer-share">
          <div className="info-footer-icons">
            <FiShare2 className="info-footer-icon" /> <h5>Compartilhar</h5>
          </div>
          <div className="info-footer-icons">
            <MdOutlineModeEditOutline className="info-footer-icon" /> <h5>Feedback</h5>
          </div>
          <div className="info-footer-icons">
            <AiOutlineQuestionCircle className="info-footer-icon" /> <h5>Ajuda</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
