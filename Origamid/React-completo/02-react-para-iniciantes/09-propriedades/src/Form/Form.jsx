import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <form action="">
      <Input id="email" label="Email" required/>
      <Input id="password" type="password" label="Password" />
      <Button />
    </form>
  );
};

export default Form;
