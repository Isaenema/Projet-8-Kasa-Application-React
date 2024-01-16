import React, { useState } from "react";
import "./Collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="option-box option-box-rent">
      <button className="box-button-about" onClick={() => setOpen(!open)}>
        <div className="text-icon-button">
          <p className="title-button">{props.title}</p>
          <FontAwesomeIcon icon={open ? faChevronDown : faChevronUp} />
        </div>
      </button>
      {open && (
        <div className="box-text-about">
          <p className="text-about">{props.description}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
