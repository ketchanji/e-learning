import React from "react";
import SideBar from "../component/dashboard/SideBar";
import Innerbox from "../component/dashboard/innerbox";
import "../css/dashboard.css";



const home = () => {
  return (
    <div className="main">
      <SideBar />
      <Innerbox />
    </div>
  );
};

export default home;
