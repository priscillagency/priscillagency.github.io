import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        ©2025 - <NavLink to="/">PriscillAgency</NavLink> - Tous droits réservés.
      </p>
      <div className="links-footer df g20">
        <NavLink to="#">Mentions légales</NavLink>
        <NavLink to="#">Confidentialité</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
