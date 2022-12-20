import React from "react";
import "../css/login.css";
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../component/UI/Logo";
import RegisterForm from "../component/UI/RegisterForm";

const Register = () => {
    const navigate = useNavigate();

    const navigatetoHome = () => {
        navigate("/");
      };

  return (
    <div className="bigcard">
      <div className="card">
        <Logo onClick={navigatetoHome}/>
        <h1>Register</h1>
        <div className="sideCard">
          <RegisterForm />
          <p>
            Already have an account? <Link to={"/login"} >Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
