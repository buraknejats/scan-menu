import React from "react";
import "./bottomMenu.css"
import {
    AccountBalanceWalletRounded,
    HomeRounded,
    Settings,
    
  } from "@mui/icons-material";
  import { NavLink} from "react-router-dom";
  import MenuContainer from "./MenuContainer";
  import Auths from "./Auths";

function BottomMenu() {
  return (
    <div>
      <div className="bottomMenu">
        <ul id="menu">
         
        <MenuContainer  path="/" icon={<HomeRounded/>} />
    
        <MenuContainer  path="/auths" icon={<Settings/>} />

          

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default BottomMenu;
