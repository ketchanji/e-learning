import React from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "../component/UI/LoginForm";
import Logo from "../component/UI/Logo";

const Login = () => {
    const navigate = useNavigate();

    const navigatetoHome = () => {
        navigate("/");
      };

  return (
    <div className="bigcard">
      <div className="card">
        <Logo onClick={navigatetoHome}/>
        <h1>Login</h1>
        <div className="innerCard">
          <Form />
          <p >
            Don't have an account? <Link to={"/register"} >Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
