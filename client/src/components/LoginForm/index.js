import React from "react";

function LoginForm() {
  return (
    <section>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="userName" placeholder="userName" />
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" />
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-success is-inverted">Login</button>
        </p>
      </div>
    </section>
  );
}

export default LoginForm;
