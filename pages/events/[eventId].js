import { useRouter } from "next/router";
import {
	EventSummary,
	EventLogistics,
	EventContent,
} from "@components/eventDetails";
import { ErrorAlert } from "@components/ui/ErrorAlert";
import { getEventById } from "../../dummy-data";

const EventDetailsPage = () => {
	const router = useRouter();
	const { eventId } = router.query;
	const event = getEventById(eventId);

	if (!event) {
		return (
			<ErrorAlert>
				<p>No event found</p>
			</ErrorAlert>
		);
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>{event.description}</EventContent>
		</>
	);
};

export default EventDetailsPage;
