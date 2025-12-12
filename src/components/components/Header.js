import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Garde la nav ouverte automatiquement si la fenêtre est >960px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize(); // initialisation
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <NavLink to="/">
        <img src="./logo.png" className="logo" alt="Logo PriscillAgency" />
      </NavLink>

      <div className="icons-nav">
        {!isOpen && (
          <i
            className="bi bi-list"
            id="openIcon"
            onClick={() => setIsOpen(true)}></i>
        )}
        {isOpen && window.innerWidth <= 960 && (
          <i
            className="bi bi-x-circle"
            id="closeIcon"
            onClick={() => setIsOpen(false)}></i>
        )}
      </div>

      <nav className={isOpen ? "nav-open" : "nav-closed"}>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/l-agence">L'agence</NavLink>
        <NavLink to="/nos-services">Nos services</NavLink>
        <NavLink to="/nos-realisations">Nos réalisations</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <img
          src="./top.png"
          className="top"
          alt="Top avec couronne PriscillAgency"
        />

        <p>SUIVEZ-NOUS</p>

        <div className="social-links">
          <NavLink to="https://www.tiktok.com/@priscillagency_officiel">
            <i className="bi bi-tiktok"></i>
          </NavLink>
          <NavLink to="https://www.instagram.com/priscillagency/">
            <i className="bi bi-instagram"></i>
          </NavLink>
          <NavLink to="https://www.youtube.com/@priscillagency">
            <i className="bi bi-youtube"></i>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
