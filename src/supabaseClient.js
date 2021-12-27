const SUPABASE_URL = "https://hrmjrnjaxrixkifmoazl.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTIyNjg4OCwiZXhwIjoxOTQ0ODAyODg4fQ.LVeJO-IZul7a386V5C9ONeawtikt2OOUd_Fk2bTgNWc";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabaseClient;
