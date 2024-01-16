import React from "react";
import houses from "../../../logements.json";
import { useParams } from "react-router-dom";
import "../Logement/Logement.scss";
import Carrousel from "../../Components/Carrousel/Carrousel";
import OwnerNamePictureRate from "../../Components/OwnerNamePictureRate/OwnerNamePictureRate";
import NameLocalisation from "../../Components/NameLocalisation/NameLocalisation";
import Collapse from "../../Components/Collapse/Collapse";
import Error404 from "../../Components/404error/error404";
function Logement() {
  const params = useParams();
  const flatList = houses.find((flat) => flat.id === params.id);
  const optionsList = flatList?.equipments.map((equipment, id) => {
    return (
      <li className="list-option" key={id} equipments={equipment}>
        {equipment}
      </li>
    );
  });

  if (flatList) {
    return (
      <div className="box-logement">
        <Carrousel pictures={flatList.pictures} />
        <div className="box-title-rate-owner">
          <NameLocalisation
            title={flatList.title}
            location={flatList.location}
            tags={flatList.tags}
          />
          <OwnerNamePictureRate host={flatList.host} rate={flatList.rating} />
        </div>
        <div className="box-options-rent">
          <Collapse title="Description" description={flatList.description} />
          <Collapse title="Èquipement" description={optionsList} />
        </div>
      </div>
    );
  } else {
    return <Error404 />;
  }
}
export default Logement;
