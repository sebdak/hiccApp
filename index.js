const SUPABASE_URL = "https://hrmjrnjaxrixkifmoazl.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTIyNjg4OCwiZXhwIjoxOTQ0ODAyODg4fQ.LVeJO-IZul7a386V5C9ONeawtikt2OOUd_Fk2bTgNWc";
var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

var supabaseToken = window.localStorage.getItem("supabaseToken");

function isSignedIn() {
  return supabase.auth.currentSession != null;
}

function handleLogin(event) {
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  supabase.auth
    .signIn({ email, password })
    .then((response) => {
      response.error ? alert(response.error.message) : console.log(response);
    })
    .catch((err) => {
      alert(err.response.text);
    });
}

async function handleSubmitHiccup(event) {
  const isDrunk = event.target.elements.drunk.checked;
  const { error } = await supabase.from("hiccups").insert({ drunk: isDrunk });
  if (error) {
    alert(error.message);
  } else {
    alert("Successfully inserted hiccup timestamp in database");
  }
}
