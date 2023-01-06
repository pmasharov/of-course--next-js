import { useRouter } from "next/router";
import { EventList } from "@components/events/EventList";
import { ResultsTitle } from "@components/events/ResultsTitle";
import { ButtonLike } from "@components/ui/ButtonLike";
import { ErrorAlert } from "@components/ui/ErrorAlert";
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
		return (
			<>
				<ErrorAlert>
					<p>Invalid filter. Please adjust filter values</p>
				</ErrorAlert>
				<div className="center">
					<ButtonLike link={"/events"}>Go to all events</ButtonLike>
				</div>
			</>
		);
	}

	const events = getFilteredEvents({ year: yearNum, month: monthNum });

	if (!events || !events.length) {
		return (
			<>
				<ErrorAlert>
					<p>No events found for chosen filter</p>
				</ErrorAlert>
				<div className="center">
					<ButtonLike link={"/events"}>Go to all events</ButtonLike>
				</div>
			</>
		);
	}

	const date = new Date(yearNum, monthNum - 1);

	return (
		<>
			<ResultsTitle date={date} />
			<EventList events={events} />
		</>
	);
};

export default FilteredEventsPage;
