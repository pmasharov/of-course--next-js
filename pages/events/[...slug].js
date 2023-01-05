import { useRouter } from "next/router";
import { useMemo } from "react";
import { EventList } from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";

const checkIsFilterDataValid = (yearNum, monthNum) => {
	if (isNaN(yearNum) || isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
		return false;
	}
	return true;
};

const FilteredEventsPage = () => {
	const router = useRouter();

	const filterData = router.query.slug;
	const isLoading = !filterData;

	if (isLoading) return <p className="center">Loading</p>;

	const yearNum = +filterData[0];
	const monthNum = +filterData[1];

	const isFilterDataValid = checkIsFilterDataValid(yearNum, monthNum);

	if (!isFilterDataValid) {
		return <p>Invalid filter. Please adjust filter values</p>;
	}

	const events = getFilteredEvents({ year: yearNum, month: monthNum });

	if (!events || !events.length) {
		return <p>No events found for chosen filter</p>;
	}

	return <EventList events={events} />;
};

export default FilteredEventsPage;
