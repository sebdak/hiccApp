import { React } from "./imports.js";
import supabaseClient from "./supabaseClient.js";

export function isProd() {
  if (new URL(window.location).hostname === "127.0.0.1") {
    return false;
  }
  return true;
}

/*
 * @returns {session|null} The supabase session if it exists
 */
export function useSession() {
  const [session, setSession] = React.useState(supabaseClient.auth.session());

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  return session;
}
