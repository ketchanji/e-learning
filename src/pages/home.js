import React from "react";
import Hero from "../component/UI/Hero";
import NavBar from "../component/UI/NavBar";

const home = () => {
  return (
    <div className="main">
      <NavBar />
      <Hero />
    </div>
  );
};

export default home;
