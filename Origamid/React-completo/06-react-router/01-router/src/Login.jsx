import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log("Fazer login");
    navigate('/sobre')
  }
  
  return (
    <div>
      <h1>Faça o seu login!</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
