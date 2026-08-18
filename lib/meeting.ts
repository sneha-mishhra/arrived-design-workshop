/**
 * Join details for this deployment's session.
 *
 * Deliberately a per-project file rather than shared code: each session has its
 * own Zoom room, and a shared module would quietly hand Saturday's attendees
 * Thursday's link. Set to `null` in a deployment that has no room yet, and the
 * page and the calendar entry both drop the join block.
 */
export type Meeting = {
  topic: string;
  joinUrl: string;
  meetingId: string;
  passcode: string;
  /** Dial-in numbers, already formatted for one-tap. */
  phone: { label: string; number: string }[];
  sip?: string;
};

export const MEETING: Meeting | null = {
  topic: "Arrived Design Workshop",
  joinUrl:
    "https://teamhappily.zoom.us/j/81951910045?pwd=av5OX8aygIL0E0ZD4egSd1gWubM2Cw.1",
  meetingId: "819 5191 0045",
  passcode: "452112",
  phone: [
    { label: "US (Washington DC)", number: "+13017158592,,81951910045#" },
    { label: "US", number: "+13052241968,,81951910045#" },
  ],
  sip: "81951910045@zoomcrc.com",
};

/**
 * The join details as plain text, for the body of a calendar entry. Calendar
 * apps linkify bare URLs, so the link is left unwrapped.
 */
export function meetingCalendarNotes(meeting: Meeting) {
  return [
    `Join Zoom Meeting`,
    meeting.joinUrl,
    ``,
    `Meeting ID: ${meeting.meetingId}`,
    `Passcode: ${meeting.passcode}`,
    ``,
    `One tap mobile`,
    ...meeting.phone.map((p) => `${p.number} ${p.label}`),
    ...(meeting.sip ? [``, `Join by SIP`, meeting.sip] : []),
  ].join("\n");
}
