import { AiOutlineSearch, AiOutlineGlobal } from "react-icons/ai"
import { IoMdArrowDropdown } from "react-icons/io"
import { RxAvatar } from "react-icons/rx"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../src/assets/prime.png" alt="Logo" />
        <h3>Loja</h3>
      </div>
      <div className="navbar-menu">
        <div className="navbar-menu-input-container">
          <AiOutlineSearch className="navbar-menu-input-icon" />
          <input type="text" className="navbar-menu-input" placeholder="Busca" />
        </div>
        <div className="navbar-menu-lenguage-container">
          <AiOutlineGlobal className="navbar-menu-lenguage-icon" />
          <h4>PT</h4>
          <IoMdArrowDropdown className="navbar-menu-arrow" />
        </div>
        <div className="navbar-menu-user">
          <RxAvatar className="navbar-menu-user-icon" />
          <h3>Evandro</h3>
          <IoMdArrowDropdown className="navbar-menu-arrow" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
