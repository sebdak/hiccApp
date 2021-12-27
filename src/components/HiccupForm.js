import { html } from "../imports.js";
import supabaseClient from "../supabaseClient.js";

function HiccupForm() {
  async function handleSubmitHiccup(event) {
    event.preventDefault();
    const isDrunk = event.target.elements.drunk.checked;
    const { error } = await supabaseClient
      .from("hiccups")
      .insert({ drunk: isDrunk });
    if (error) {
      alert(error.message);
    } else {
      alert("Successfully inserted hiccup timestamp in database");
    }
  }

  return html`
    <form onSubmit=${handleSubmitHiccup}>
      <h2>Register hiccup</h2>
      <div className="input-elements">
        <label htmlFor="drunk">Am I drunk?</label>
        <input type="checkbox" name="drunk" id="drunk" />
      </div>
      <button>Submit hiccup</button>
    </form>
  `;
}

export default HiccupForm;
