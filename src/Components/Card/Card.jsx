import React from "react";
import "./Card.scss";
import cards from "../../../logements.json";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="house-card">
      <div className="box-card">
        {cards.map((flat) => {
          return (
            <Link to={`/logement/${flat.id}`} className="card" key={flat.id}>
              <img src={flat.cover} alt={flat.title} className="card-img" />
              <div className="card-box-title">
                <p className="card-title">{flat.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
