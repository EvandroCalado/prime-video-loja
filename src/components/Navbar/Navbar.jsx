import { useState } from "react";
import { AiOutlineSearch, AiOutlineGlobal, AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmitClick = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch("");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to={"/"}>
            <img src="../src/assets/prime.png" alt="Logo" />
          </Link>
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
            <div className="user-dropdown-container">
              <div className="user-dropdown-left">
                <p>Conta e configurações</p>
                <p>Benefícios Prime</p>
                <p>Assista onde quiser</p>
                <p>ajuda</p>
                <p>Não é Evandro? Sair</p>
              </div>
              <div className="user-dropdown-right">
                <div><AiFillStar className="icon" /> <p>Crianças</p> </div>
                <div>< AiOutlinePlus className="icon" /> <p>Adicionar novo perfil</p> </div>
                <p>Edtar perfis</p>
                <p>Saiba mais</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
