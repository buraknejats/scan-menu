import React, { useEffect } from "react";
import {} from "@mui/material";
import {  SearchRounded, ShoppingCartRounded } from "@mui/icons-material";
import "./header.css"
import { width } from "@mui/system";
import Logo from "./img/scan-logo.png"
import CompanyLogo from "./img/scan-company.png"
import { useStateValue } from "./StateProvider";


function Header() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const shoppingcart = document.querySelector(".shoppingCart");
    shoppingcart.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);
  return (
    <header>
        <img className="logo"  src={CompanyLogo} alt="logo"/>

        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Ürün Ara" />
        </div>

        

     
      <div className="companyProfile">
        <div className="imgBox">
          <img className="companyPic" src={Logo}  alt="" />
        </div>

        <h2 className="companyName">Scan Coffee</h2>
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className={`${!cart ? "noCartItem" : "cart-content"}`}>
          <p>{cart ? cart.length : ""}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
