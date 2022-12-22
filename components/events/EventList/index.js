import { EventItem } from "@components/events/EventItem";
import styles from './styles.module.css'

const EventList = ({ events }) => {
	return (
		<ul className={styles.list}>
			{events.map((event) => (
				<EventItem key={event.id} {...event} />
			))}
		</ul>
	);
};

export { EventList };
