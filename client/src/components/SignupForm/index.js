import React from "react";
import states from "../../utils/states.json";

// will need styling with spacing.
function SignUpForm({ newUser, setNewUser, handleSignup }) {
  return (
    <section className="container-flex">
      <div className="columns-flex">
        <div className="column" style={{ textAlign: "center"}}>
          <h1 style={{ fontSize: "18px" }}> Signup Form</h1>
          <input
            className="input"
            type="text"
            style={{ width: "50%", margin: "5px" }}
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />

          <input
            className="input"
            type="text"
            style={{ width: "50%", margin: "5px" }}
            placeholder="Username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />

          <input
            className="input"
            type="text"
            style={{ width: "50%", margin: "5px" }}
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />

          <input
            className="input"
            type="text"
            style={{ width: "50%", margin: "5px" }}
            placeholder="Password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
<div>
          <input
            className="input"
            type="text"
            style={{ width: "18rem", marginTop:"5px", justifyContent: "space-between"}}
            placeholder="City"
            value={newUser.city}
            onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
          />
          <div className="select">
            <select
              className="is-hovered"
              style={{ maxWidth: "11rem", margin: "2px"}}
              onChange={(e) =>
                setNewUser({ ...newUser, state: e.target.value })
              }
            >
              <option>State</option>
              {states.map((state, i) => {
                return (
                  <option key={i} value={state.name}>
                    {state.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            className="button"
            style={{ background: "#8c9e5e", marginRight: ".7rem"}}
            onClick={handleSignup}
          >
            Sign Up
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;
