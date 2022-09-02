import React from "react";
import "./Sidenav.css";
function Sidenav() {
  return (
    <>
      <div className="sidenav">
        <div className="tab">
          <button className="tablinks">Dashboard</button>
          <button className="tablinks">Employee</button>
          <button className="tablinks">Asset</button>
          <button className="tablinks">Service</button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
