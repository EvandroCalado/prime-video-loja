import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="../src/assets/prime.png" alt="" />
      </div>
      <div className="footer-term">
        <p>
          <span>Termos e aviso de privacidade</span>
          <span>Enviar feedback</span>
          <span>Ajuda</span>© 1996-2022, Amazom.com, inc. ou suas afíliadas
        </p>
      </div>
    </footer>
  );
};

export default Footer;
