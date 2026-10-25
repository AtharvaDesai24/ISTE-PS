export const DEMO_MODE = false;
export const DEMO_SECONDS = 12;
export const REAL_UNLOCK = "2026-10-26T00:35:00+05:30";
// ---- PPT submission ----
export const SUBMISSION_URL = "https://forms.gle/wvkmgAzC7YoBsLWH8";
export const PPT_Format_URL =
  "https://docs.google.com/presentation/d/1MbKqLyuPlr43t3QvgdwC9cxe-ZWxn8CI/edit?usp=drivesdk&ouid=108986424810294984763&rtpof=true&sd=true";
export const SUBMISSION_DEADLINE = "28 October 2026, 6:00 PM IST"; // leave "" to hide
// Returns the moment (in ms) when the problem statements should unlock.
export const getUnlockTime = () =>
  DEMO_MODE ? Date.now() + DEMO_SECONDS * 1000 : Date.parse(REAL_UNLOCK);
