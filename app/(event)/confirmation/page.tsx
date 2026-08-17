import { AttendeesList } from "@/components/attendees-list";
import { ConfirmationPanel } from "@/components/confirmation-panel";
import { Container } from "@/components/container";
import { text } from "@/components/helpers";
import { getEventEnv, getEventId } from "@/lib/happily/config";
import { getPublicAttendees, getPublicEvent } from "@/lib/happily/queries";

export default async function ConfirmationPage() {
  const eventId = getEventId();
  const env = getEventEnv();
  const eventData = await getPublicEvent({ eventId, env });
  const attendees =
    eventData.event.content.displayAttendeesList === true
      ? await getPublicAttendees({
          eventId,
          env,
          pageSize: eventData.event.content.attendeesPageSize ?? 12,
        })
      : null;
  const { event } = eventData;

  return (
    <main>
      <ConfirmationPanel event={event} />

      {attendees?.attendees.length ? (
        <Container>
          <AttendeesList
            attendees={attendees.attendees}
            title={text(event.content.attendeesListTitle, "Who's coming")}
          />
        </Container>
      ) : null}
    </main>
  );
}
