import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import API from "../utils/API";

function Login({ setUserId, setLoggedIn}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    city: '',
    state: ''
  })
  

  async function handleLogin() {
    try{
      const apicall= await API.login({
        email,
        password,
      });
      console.log(apicall)
      await setUserId(apicall.data.user.id)
      await setLoggedIn(true)
      history.push('/account-page')

    } catch(err) {
      alert(err)
    }
  }

  async function handleSignup() {
    try{
      await API.createUser({
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        city: newUser.city,
        state: newUser.state
      })
      history.push('/account-page')
    } catch(err) {
      alert(err)
    }
  }

  return (
    <div className="login-signup-page">
      <div className="sign-up">
        <SignupForm newUser={newUser} setNewUser={setNewUser} handleSignup={handleSignup}/>
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
