import { getAllEvents, getFilteredEvents } from "../../dummy-data";
import { EventList } from "@components/events/EventList";
import { EventSearch } from "../../components/events/EventSearch";
import { useRouter } from "next/router";

const AllEventsPage = () => {
	const router = useRouter();
	const events = getAllEvents();

	const onSearch = ({ year, month }) => {
		router.push({
			pathname: "/events/[...slug]",
			query: { slug: [year, month] },
		});
	};

	return (
		<>
			<EventSearch onSearch={onSearch} />
			<EventList events={events} />;
		</>
	);
};

export default AllEventsPage;
