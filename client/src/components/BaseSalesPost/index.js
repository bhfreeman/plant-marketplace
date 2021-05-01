import React from 'react'

function LoginForm() {
    return (
<>
    <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email"/>
  </p>
</div>

<div class="field">
    <input class="input" type="password" placeholder="Password"/>
</div>

<div class="field">
  <p class="control">
    <button class="button is-success">
      Login
    </button>
  </p>
</div>

</>
    )
}

export default LoginForm; 
