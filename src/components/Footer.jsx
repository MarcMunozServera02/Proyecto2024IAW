// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="pie">
        <h1 className="titulopie">Tienes un proyecto que quieras hacer?</h1>
        <Link to="/contacto"><button className="boton2"> Contactame!</button></Link>
        <div className="social2">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
