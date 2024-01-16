import "./Carrousel.scss";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carrousel = (props) => {
  const [index, setIndex] = useState(0);
  const next = () => {
    if (index + 1 === props.pictures.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const previous = () => {
    if (index === 0) {
      setIndex(props.pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  console.log(props.pictures);
  return (
    <div className="slide-box">
      <img
        src={props.pictures[index]}
        alt="appartement"
        className="img-slide"
      />
      <div className="arrows-slide">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrows_slide_arrow"
          onClick={previous}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrows_slide_arrow"
          onClick={next}
        />
      </div>
      <div className="number-img-slide">
        <span className="display-number">
          {index + 1}/{props.pictures.length}
        </span>
      </div>
    </div>
  );
};

export default Carrousel;
