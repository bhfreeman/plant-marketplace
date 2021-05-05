import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

function Login() {
  const [userName, setuserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  function handleLogin() {

  }

  function handleSignup(){
    
  }

  return (
    <div className="login-signup-page">
      <div className="sign-up">
        <SignupForm />
      </div>
      <div className="login">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
