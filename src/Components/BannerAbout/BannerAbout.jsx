import React from "react";
import bannerImgAbout from "./../../../public/bg_about.png";

const BannerAbout = () => {
  return (
    <section className="banner">
      <div className="banner_container">
        <img
          className="banner_img"
          src={bannerImgAbout}
          alt="falaises et récif"
        />
      </div>
    </section>
  );
};

export default BannerAbout;
