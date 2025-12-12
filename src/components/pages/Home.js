import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container df">
      <Header />
      <main id="homepage" className="jcc">
        <img src="./logo-black.png" alt="Logo PriscillAgency" />
        <h1>PriscillAgency</h1>

        <h2>Agence de communication à Tarascon</h2>

        <h3>Couronnez votre image. Couronnez votre succès.</h3>

        <div className="df aic g20">
          <NavLink to="/nos-services">
            <button className="button2">Découvrir nos services</button>
          </NavLink>
          <NavLink to="tel:+33666430997">
            <button>Démarrez votre projet</button>
          </NavLink>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
