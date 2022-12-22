import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

const EventDetailsPage = () => {
	const router = useRouter();
	const { eventId } = router.query;
	const event = getEventById(eventId);

	if (!event) {
		return <p>No event found</p>;
	}

	return (
		<div>
			<h1>Event Details Page</h1>
		</div>
	);
};

export default EventDetailsPage;
