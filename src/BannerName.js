import React from "react";

function BannerName({ name, discount, link }) {
  return (
    <div className="bannerContent">
      <h3>Merhaba {name}!</h3>
      <p>
        Kahve alana cheesecake <span>%{discount}</span> İndirimli!
      </p>
      <a href={link}>Daha Fazlası İçin</a>
    </div>
  );
}

export default BannerName;
