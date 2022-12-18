import React from "react";
import Button from "./Button";
import Input from "./Input";

const RegisterForm = (props) => {
    


  return (
    <form className="regform">
      <span className="first">
        <label htmlFor="Username">Name:</label>
        <Input name="Username" type="text" placeHolder="Name" />
      </span>
      <span className="first">
        <label htmlFor="email">Email:</label>
        <Input name="email" type="Email" placeHolder="Email" />
      </span>
      <span className="third">
        <label htmlFor="password">Password:</label>
        <Input name="password" type="Password" placeHolder="Password" />
      </span>
      <span className="forth">
        <label htmlFor="confirm-password">Confirm-password:</label>
        <Input name="confirm-password" type="Password" placeHolder="Confrim Password" />
      </span>
      <Button text="login" style={{marginRight: "15px",width: "100%",height: "45px",backgroundColor:"rgb(27, 31, 29)",border:"1px solid rgb(27, 31, 29)"}}/>
    </form>
  );
};
export default RegisterForm;
