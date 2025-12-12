import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import ButtonCall from "../components/ButtonCall";

const Agence = () => {
  return (
    <div className="container df">
      <Header />
      <main className="pages" id="agence">
        <div className="title-page">
          <img src="./top.png" alt="Top" />
          <h1 className="tac">L'agence</h1>
          <img src="./bottom.png" alt="Ligne de séparation" />
        </div>
        <img
          src="./agence.webp"
          className="imageAgence"
          alt="Couronne entourée de fenêtres de code"
        />

        <h2>Avec PriscillAgency, votre marque est royale !</h2>

        <p className="tac">
          Chez PriscillAgency, nous croyons que chaque entreprise mérite une
          image unique et impactante. Implantée à Tarascon et disponible à
          distance, notre agence accompagne les entrepreneurs et les marques
          dans la création de leur univers digital et graphique.
          <br />
          <br />
          Nous combinons création web, graphisme, webmarketing et community
          management pour offrir des solutions sur mesure, efficaces et
          esthétiques. Notre objectif ? Mettre en valeur votre identité, attirer
          vos clients et renforcer votre présence en ligne.
          <br />
          <br />
          Nous travaillons main dans la main avec vous, à chaque étape de votre
          projet, pour que votre communication soit cohérente, moderne et
          mémorable. Chez PriscillAgency, votre succès commence par une image
          qui vous ressemble.
        </p>

        <div className="df aic g20 jcc">
          <NavLink to="/nos-realisations">
            <button className="button2">Découvrir nos réalisations</button>
          </NavLink>
          <NavLink to="tel:+33666430997">
            <button>Démarrez votre projet</button>
          </NavLink>
        </div>
      </main>
      <Footer />
      <ButtonCall />
    </div>
  );
};

export default Agence;
