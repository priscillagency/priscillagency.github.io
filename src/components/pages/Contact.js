import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container df">
      <Header />
      <main className="pages" id="contact">
        <div className="title-page">
          <img src="./top.png" alt="Top" />
          <h1 className="tac">Contact</h1>
          <img src="./bottom.png" alt="Ligne de séparation" />
        </div>

        <div>
          <p>
            Couronner votre image, c’est aussi couronner votre expérience.
            <br />
            Chez PriscillAgency, nous avons à cœur de vous offrir un
            accompagnement professionnel, à la hauteur des ambitions de votre
            marque.
            <br />
            Découvrez les témoignages de celles et ceux qui font rayonner leur
            présence digitale à nos côtés.
          </p>
        </div>

        <div className="contact-info">
          <div className="item">
            <h2>
              <i className="bi bi-telephone-fill"></i> Par téléphone
            </h2>
            <img src="./bottom.png" alt="Ligne de séparation" />
            <NavLink to="tel:+33666430997">
              <button className="button3">06.66.43.09.97</button>
            </NavLink>
          </div>

          <div className="item">
            <h2>
              <i className="bi bi-envelope-fill"></i> Par email
            </h2>
            <img src="./bottom.png" alt="Ligne de séparation" />
            <NavLink to="mailto:contact@priscillagency.com">
              <button className="button3">contact@priscillagency.com</button>
            </NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
