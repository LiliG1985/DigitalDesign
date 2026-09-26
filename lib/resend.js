import { Resend } from "resend";

let resendClient = null;

// Lazily construct the client so the app doesn't crash at build/boot time
// if RESEND_API_KEY isn't set yet (e.g. before Lili adds it in Vercel).
export function getResend() {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}
