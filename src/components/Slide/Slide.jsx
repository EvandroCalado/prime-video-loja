import { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./Slide.scss";

const Slide = () => {
  const slide = useRef(null);

  const handleSlideClick = (direction) => {
    if (direction === "left") {
      const slideItem = document.querySelectorAll(".slide")[8];
      const selected = document.querySelector(".selected");
      const dots = document.querySelector(".slide-dots");

      slide.current.style.marginLeft = "0";
      slide.current.style.transition = "1s linear";
      setTimeout(() => {
        slide.current.style.transition = "none";
        slide.current.insertAdjacentElement("afterbegin", slideItem);
        slide.current.style.marginLeft = "-100%";
      }, 1000);

      if (selected.previousElementSibling === null) {
        selected.classList.remove("selected");
        dots.lastElementChild.classList.add("selected");
      } else {
        selected.classList.remove("selected");
        selected.previousElementSibling.classList.add("selected");
      }
    }

    if (direction === "right") {
      const slideItem = document.querySelector(".slide");
      const selected = document.querySelector(".selected");
      const dots = document.querySelector(".slide-dots");

      slide.current.style.marginLeft = "-200%";
      slide.current.style.transition = "1s linear";
      setTimeout(() => {
        slide.current.style.transition = "none";
        slide.current.insertAdjacentElement("beforeend", slideItem);
        slide.current.style.marginLeft = "-100%";
      }, 1000);

      if (selected.nextElementSibling === null) {
        selected.classList.remove("selected");
        dots.firstElementChild.classList.add("selected");
      } else {
        selected.classList.remove("selected");
        selected.nextElementSibling.classList.add("selected");
      }
    }
  };

  return (
    <div className="slide-contaner">
      <BsChevronLeft
        className="slide-btn left"
        onClick={() => handleSlideClick("left")}
      />
      <BsChevronRight
        className="slide-btn right"
        onClick={() => handleSlideClick("right")}
      />
      <ul className="slide-dots">
        <li></li>
        <li className="selected"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="slide-wrapper" ref={slide}>
        <div className="slide">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_FallAQueda_VOD/b3d57521-999c-4c5c-88ef-7812c777bf0c._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_Smile_BR/f62b837e-9098-4b5e-aa8c-1372514b60dc._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_LyleLyleCrocodile_BR_VOD/d12da981-a33f-470f-a600-97a88257c097._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_HalloweenEnds_BR/97ab5764-152c-4aa6-88ee-8dfd72d4df80._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_TheWomanKing_VOD_BR_V2/9e17935c-e5da-4b76-abf4-4e28796cbaf2._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_SH_TheInvitationakaTheBride_BR/c76e4d11-e220-4cc9-91d4-205048856f8d._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_ThePassengersoftheNight_BR_VOD/f0151086-07ca-4549-b2c3-c6c423db27ec._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_BodiesBodiesBodies_BR/88fb37bb-bed7-435a-930d-2e763e9af217._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_TadeoJones_3/5e448cf2-911b-45ee-913c-54e4f19abb5a._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
