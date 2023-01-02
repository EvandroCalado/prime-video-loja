import { useState } from "react";
import { AiOutlineSearch, AiOutlineGlobal } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmitClick = (e) => {
    e.preventDefault();
    navigate(`/search/${e.target.movie.value}`);
    setSearch("");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="../src/assets/prime.png" alt="Logo" />
          <h3>Loja</h3>
        </div>
        <div className="navbar-menu">
          <form
            onSubmit={handleSubmitClick}
            className="navbar-menu-input-container"
          >
            <button type="submit" className="navbar-menu-input-btn">
              <AiOutlineSearch className="navbar-menu-input-icon" />
            </button>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              name="movie"
              type="text"
              className="navbar-menu-input"
              placeholder="Busca"
            />
          </form>
          <div className="navbar-menu-lenguage-container">
            <AiOutlineGlobal className="navbar-menu-lenguage-icon" />
            <h4>PT</h4>
            <IoMdArrowDropdown className="navbar-menu-arrow" />
          </div>
          <div className="navbar-menu-user">
            <RxAvatar className="navbar-menu-user-icon" />
            <h4>Evandro</h4>
            <IoMdArrowDropdown className="navbar-menu-arrow" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
