import { AiOutlinePlus } from "react-icons/ai";
import { SiImdb } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import "./Card.scss";

const Card = ({
  title,
  id,
  image,
  average,
  release,
  rating,
  description,
  backdrop,
}) => {
  const navigate = useNavigate();

  // console.log(id)

  const handleFadeClick = () => {
    navigate(`/info/${id}`);
  };

  const free =
    "https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/djctq/l.png";

  const mature =
    "https://m.media-amazon.com/images/G/01/vcc/maturity-ratings-logos/png/djctq/18.png";

  return (
    backdrop &&
    title && (
      <div className="card-container">
        <div className="card-wrapper">
          <div
            className="card-wrapper-money-container"
            data-title="Estão disponíveis vídeos com R$ para alugar, comprar ou incluídos em assinaturas do Channels."
          >
            <img
              className="card-wrapper-money"
              src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/brl.svg"
              alt="R$"
            />
          </div>
          <div className="card-image-fade" onClick={handleFadeClick}></div>
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
          <div className="card-content">
            <div className="card-content-header">
              <div className="card-content-title">
                <h5>{title}</h5>
                <div
                  className="plus-container"
                  data-title="Adicionar à sua lista"
                >
                  <AiOutlinePlus className="plus" />
                </div>
              </div>
              <div className="card-content-description">{description}</div>
              <div className="card-content-info">
                <SiImdb className="imdb" />
                <p>{average.toFixed(1)}</p> <p>{release?.substr(0, 4)}</p>{" "}
                <img src={rating ? mature : free} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Card;
