import React from "react";
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import "../styles/footer.css"; 

const Footer = () => {
  return (
    <footer>
      <div className="footerContent">
        <div>
            <img className="logo" src="src\assets\images\logos\whiteFooter.png" alt="Logo DMVoz" />
            <hr /> 
            <p>Copyright © 2000 - 2024 DMVoz Produções. Todos os direitos reservados</p>
        </div>
    
        <div className="socialIcons">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
