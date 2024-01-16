import React from "react";
import bannerImgHome from "./../../../public/bg_home.png";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner_container">
        <img
          className="banner_img"
          src={bannerImgHome}
          alt="falaises et récif"
        />
      </div>
      <div className="banner_title">
        <div className="banner_txt">Chez vous, partout et ailleurs</div>
      </div>
    </section>
  );
}

export default Banner;
