import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

const NavBar = (props) => {
  const navigate = useNavigate();

  const navigatetoLogin = () => {
    navigate("/login");
  };

  const navigatetoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="navbar">
        <Logo onClick={navigatetoHome}/>

        <Button text="Login" onClick={navigatetoLogin} />
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
