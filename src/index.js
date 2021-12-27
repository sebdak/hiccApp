import { React, ReactDOM, html } from "./imports.js";
import HiccupForm from "./components/HiccupForm.js";
import LoginForm from "./components/LoginForm.js";
import HiccupChart from "./components/HiccupChart.js";
import supabaseClient from "./supabaseClient.js";
import { useSession } from "./utils.js";

function App() {
  const session = useSession();

  if (session) {
    return html`<div>
      <${HiccupForm} />
      <${HiccupChart} />
    </div>`;
  }

  return html`<${LoginForm} />`;
}

ReactDOM.render(html`<${App} />`, document.getElementById("root"));
