export const DEMO_MODE = false;
export const DEMO_SECONDS = 12;
export const REAL_UNLOCK = "2026-10-26T00:35:00+05:30";

// Returns the moment (in ms) when the problem statements should unlock.
export const getUnlockTime = () =>
  DEMO_MODE ? Date.now() + DEMO_SECONDS * 1000 : Date.parse(REAL_UNLOCK);
