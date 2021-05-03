import React from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

function Login() {
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
