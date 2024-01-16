import React from "react";
import "./OwnerNamePictureRate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const OwnerNamePicture = (props) => {
  const imgOwner = props.host.picture;
  const nameOwner = props.host.name;
  const starRating = parseInt(props.rate);
  console.log(starRating);
  const starNumber = [1, 2, 3, 4, 5];

  return (
    <div className="owner-and-rate-box">
      <div className="rate-box">
        {starNumber.map((id) =>
          id <= starRating ? (
            <FontAwesomeIcon
              key={id}
              icon={faStar}
              style={{ color: "#FF6060" }}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              key={id}
              icon={faStar}
              style={{ color: "#E3E3E3" }}
            ></FontAwesomeIcon>
          )
        )}
      </div>
      <div className="owner-box">
        <p className="owner-name">{nameOwner}</p>
        <img src={imgOwner} alt={nameOwner} className="owner-picture" />
      </div>
    </div>
  );
};

export default OwnerNamePicture;
