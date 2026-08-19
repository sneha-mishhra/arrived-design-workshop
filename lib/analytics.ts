/**
 * Umami website id for this deployment.
 *
 * Per-project like lib/meeting.ts, and for the same reason: the two sites are
 * mirrored file by file, and a shared value would quietly report Saturday's
 * traffic into Thursday's dashboard. `null` disables the script entirely.
 */
export const UMAMI_WEBSITE_ID: string | null =
  "64b80922-7253-459b-89bc-b9aed934632b";

export const UMAMI_SRC = "https://cloud.umami.is/script.js";
