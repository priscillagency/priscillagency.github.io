import React from "react";
import { NavLink } from "react-router-dom";

const ButtonCall = () => {
  return (
    <div className="button-call">
      <NavLink to="tel:+33666430997">
        <i className="bi bi-telephone-fill"></i>
      </NavLink>
    </div>
  );
};

export default ButtonCall;
