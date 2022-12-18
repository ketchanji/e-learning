import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = (props) => {
  return (
    <form>
      <span className="first">
        <label htmlFor="Username">Email:</label>
        <Input name="Username" type="Email" placeHolder="Email" />
      </span>
      <span className="second">
        <label htmlFor="password">Password:</label>
        <Input name="password" type="Password" placeHolder="Password" />
      </span>
      <Button text="login" style={{marginRight: "15px",width: "100%",height: "45px",backgroundColor:"rgb(27, 31, 29)",border:"1px solid rgb(27, 31, 29)"}}/>
    </form>
  );
};
export default Form;
