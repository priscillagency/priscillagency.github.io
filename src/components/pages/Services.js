import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import ButtonCall from "../components/ButtonCall";

const Services = () => {
  return (
    <div className="container df">
      <Header />
      <main className="pages" id="services">
        <div className="title-page">
          <img src="./top.png" alt="Top" />
          <h1 className="tac">Nos services</h1>
          <img src="./bottom.png" alt="Ligne de séparation" />
        </div>
        <div className="services-list df fdc g20">
          <div className="item dg">
            <img src="./creation-web.webp" alt="Création web" />
            <div className="text-item right">
              <h2>Création web</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Sites vitrines, boutiques en ligne, blogs, applications web et
                solutions sur mesure : nous concevons des outils élégants,
                performants et parfaitement adaptés à vos objectifs.
              </p>
            </div>
          </div>

          <div className="item dg fdcr">
            <div className="text-item left">
              <h2>Graphisme & impression</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Identité visuelle, charte graphique, affiches, cartes de visite,
                flyers et supports professionnels… Nous créons une image
                cohérente, esthétique et mémorable.
              </p>
            </div>
            <img src="./graphisme.webp" alt="Graphisme" />
          </div>

          <div className="item dg">
            <img src="./webmarketing.webp" alt="Webmarketing" />
            <div className="text-item right">
              <h2>Webmarketing</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Stratégie digitale, SEO, rédaction optimisée, tunnels de
                conversion et optimisation de visibilité : nous vous aidons à
                attirer, convertir et fidéliser vos clients.
              </p>
            </div>
          </div>

          <div className="item dg fdcr">
            <div className="text-item left">
              <h2>Community Management</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Gestion de réseaux sociaux, création de contenus, planification,
                modération et stratégies d’engagement : nous développons votre
                communauté et renforçons votre image.
              </p>
            </div>
            <img src="./community-management.webp" alt="Community Management" />
          </div>
        </div>
      </main>
      <Footer />
      <ButtonCall />
    </div>
  );
};

export default Services;
