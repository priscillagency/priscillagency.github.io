import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import ButtonCall from "../components/ButtonCall";

const Portfolio = () => {
  return (
    <div className="container df">
      <Header />
      <main className="pages" id="portfolio">
        <div className="title-page">
          <img src="./top.png" alt="Top" />
          <h1 className="tac">Nos réalisations</h1>
          <img src="./bottom.png" alt="Ligne de séparation" />
        </div>

        <div>
          <p>
            Couronner votre image, c’est aussi donner vie à des réalisations qui
            vous ressemblent.
            <br />
            Chez PriscillAgency, nous concevons des sites élégants, performants
            et pensés pour valoriser l’essence de votre marque.
            <br />
            Découvrez quelques-unes de nos réalisations, créées pour faire
            rayonner l’identité et les ambitions de nos clients.{" "}
          </p>
        </div>

        <div className="portfolio-list df fdc g20">
          <NavLink
            to="https://danyprovenceherbes.fr"
            target="_blank"
            className="item dg">
            <img src="./danyprovenceherbes.webp" alt="Dany Provence Herbes" />
            <div className="text-item ">
              <h2>Dany Provence Herbes</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Une boutique en ligne élégante et authentique mettant à
                l’honneur les saveurs de la Camargue. Une expérience d’achat
                fluide, pensée pour sublimer des produits d’exception.
              </p>
            </div>
          </NavLink>

          <NavLink
            to="https://beautystar.priscillagency.com"
            target="_blank"
            className="item dg">
            <img src="./beautystar.webp" alt="Beauty Star" />
            <div className="text-item ">
              <h2>Beauty Star</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Un site vitrine raffiné pour un institut de beauté spécialisé en
                onglerie et beauté du regard. Une présence digitale soignée, à
                l’image du savoir-faire de la marque.
              </p>
            </div>
          </NavLink>

          <NavLink
            to="https://allotaxisud.priscillagency.com"
            target="_blank"
            className="item dg">
            <img src="./allotaxisud.webp" alt="Allo Taxi Sud" />
            <div className="text-item ">
              <h2>Allo Taxi Sud</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Une plateforme claire et efficace pour un groupe de taxis qui
                propose des services de transport dans le Sud de la France. Un
                site pensé pour la rapidité, la visibilité et la confiance des
                clients.
              </p>
            </div>
          </NavLink>

          <NavLink
            to="https://casadusud.priscillagency.com"
            target="_blank"
            className="item dg">
            <img src="./casadusud.webp" alt="Casa du Sud" />
            <div className="text-item ">
              <h2>Casa du Sud</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Un site vitrine élégant connecté à Airbnb pour une location de
                vacances à Béziers. Une vitrine digitale pensée pour séduire,
                rassurer et maximiser les réservations.
              </p>
            </div>
          </NavLink>

          <NavLink
            to="https://jcfamilles.priscillagency.com"
            target="_blank"
            className="item dg">
            <img src="./jcfamilles.webp" alt="JC Familles" />
            <div className="text-item ">
              <h2>JC Familles</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Un site vitrine moderne et chaleureux dédié à une entreprise
                d’aide à la personne à Marseille. Une présence digitale
                rassurante, pensée pour refléter l’engagement humain et la
                qualité de leurs services au quotidien.
              </p>
            </div>
          </NavLink>

          <NavLink
            to="https://fotransports13.priscillagency.com"
            target="_blank"
            className="item dg">
            <img src="./fotransports13.webp" alt="FO Transports 13" />
            <div className="text-item ">
              <h2>FO Transports 13</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Un site vitrine dynamique et impactant pour représenter le
                syndicat FO des transports des Bouches-du-Rhône. Une identité
                numérique forte, construite pour informer, fédérer et valoriser
                leur action auprès des professionnels du secteur.
              </p>
            </div>
          </NavLink>

          <NavLink
            to="https://dpartenr.priscillagency.com"
            target="_blank"
            className="item dg">
            <img src="./dpartenr.webp" alt="DParten'R" />
            <div className="text-item ">
              <h2>DParten'R</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Un site vitrine professionnel et structuré pour un cabinet
                expert en conseil, accompagnement et formation. Une plateforme
                claire et élégante, conçue pour mettre en lumière leur expertise
                dans le transport, la logistique et la sécurité au travail.
              </p>
            </div>
          </NavLink>

          <NavLink
            to="https://jplecaudey.com"
            target="_blank"
            className="item dg">
            <img src="./jplecaudey.webp" alt="JP Lecaudey" />
            <div className="text-item ">
              <h2>JP Lecaudey</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Un site vitrine raffiné et artistique pour un organiste,
                pianiste et professeur renommé. Une présence en ligne élégante,
                pensée pour sublimer son univers musical et offrir une
                visibilité harmonieuse à ses œuvres et activités.
              </p>
            </div>
          </NavLink>

          <NavLink
            to="https://sainte-marthe-tarascon.fr"
            target="_blank"
            className="item dg">
            <img src="./saintemarthe.webp" alt="Sainte Marthe" />
            <div className="text-item ">
              <h2>Sainte Marthe</h2>
              <img src="./bottom.png" alt="Ligne de séparation" />
              <p>
                Un site vitrine moderne et élégant pour l’établissement privé
                catholique Sainte Marthe. Une interface soignée et accueillante,
                conçue pour guider, informer et refléter les valeurs éducatives
                de l’institution.
              </p>
            </div>
          </NavLink>
        </div>
      </main>
      <Footer />
      <ButtonCall />
    </div>
  );
};

export default Portfolio;
