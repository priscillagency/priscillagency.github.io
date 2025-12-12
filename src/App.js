import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import "./assets/css/index.scss";
import Agence from "./components/pages/Agence";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/l-agence" element={<Agence />} />
          <Route path="/nos-services" element={<Services />} />
          <Route path="/nos-realisations" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
