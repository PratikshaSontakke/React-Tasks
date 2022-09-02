import React from "react";
import mainLogo from "../images/1.png";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
  return (
    <>
      <div className="header">
        <div className="img">
          <img src={mainLogo} alt="" width="250px" height="60" />
        </div>
        <PersonIcon
          sx={{
            width: 80,
            height: 80,
            position: "absolute",
            right: 0,
            top: 4,
          }}
        ></PersonIcon>
      </div>
    </>
  );
}

export default Header;
