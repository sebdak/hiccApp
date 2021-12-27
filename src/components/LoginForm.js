import { React, html } from "../imports.js";
import supabaseClient from "../supabaseClient.js";
import { isProd } from "../utils.js";

function LoginForm() {
  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    supabaseClient.auth
      .signIn({ email, password })
      .then((response) => {
        response.error ? alert(response.error.message) : console.log(response);
      })
      .catch((err) => {
        alert(err.response.text);
      });
  };

  const handleGoogleLogin = () => {
    supabaseClient.auth.signIn(
      { provider: "google" },
      {
        redirectTo: isProd()
          ? "https://sebdak.dev/hiccApp"
          : "http://127.0.0.1:8080",
      }
    );
  };

  return html`
    <${React.Fragment}>
      <form onSubmit=${handleLogin}>
        <h2>Login</h2>

        <div className="input-elements">
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </div>

        <button type="submit">Login</button>
        <span>or</span>
        <button  onClick=${handleGoogleLogin}>Login with google</button>
      </form>
    </${React.Fragment}>
  `;
}

export default LoginForm;
