import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import API from "../utils/API";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const apicall= await API.login({
      email,
      password,
    });
    console.log(apicall)
  }

  function handleSignup() {}

  function handleInputChange() {}

  return (
    <div className="login-signup-page">
      <div className="sign-up">
        <SignupForm />
      </div>
      <div className="login">
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
}

export default Login;
