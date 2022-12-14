import { DateIcon, AddressIcon } from "@components/icons";
import { LogisticsItem } from "@components/eventDetails/LogisticsItem";
import styles from "./styles.module.css";

function EventLogistics({ date, address, image, imageAlt }) {
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const addressText = address.replace(", ", "\n");

	return (
		<section className={styles.logistics}>
			<div className={styles.image}>
				<img src={`/${image}`} alt={imageAlt} />
			</div>
			<ul className={styles.list}>
				<LogisticsItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address>{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
}

export { EventLogistics };
