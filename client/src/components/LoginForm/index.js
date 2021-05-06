import React from "react";

const LoginForm = ({ email, password, setEmail, setPassword, handleLogin }) => {
  return (
    <section className="container-flex">
      <div className="columns">
        <div className="column" style={{ textAlign: "center" }}>
          <div className="field">
            <h1 style={{ fontSize: "20px", }}>Login Here</h1>
            {/* <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                value={props.userName}
                style={{width: "50%", margin: "5px"}}
                onChange={props.handleInputChange}
                type="userName"
                placeholder="Username"
              />
               </p> */}
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  style={{ width: "50%", margin: "5px" }}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </p>
              <div className="field">
                <p className="control">
                  <button
                    className="button"
                    style={{ background: "#8c9e5e", margin: "5px" }}
                    onClick={handleLogin}
                  >
                    Welcome back
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default LoginForm;
