import React from "react";
import "./Error404.scss";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error">
      <div className="error-title">
        <h1 className="title-error">404</h1>
      </div>
      <div className="error-phrase">
        <p className="explain-error">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <div className="error-return-link">
        <Link to="/" className="link-return">
          Retournez sur la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default Error404;
