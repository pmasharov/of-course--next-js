import { ButtonLike } from "@components/ui/ButtonLike";
import styles from "./styles.module.css";
import { DateIcon, AddressIcon, ArrowRightIcon } from "../../icons";

const EventItem = ({ id, title, image, date, location }) => {
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const formattedAddress = location.replace(", ", "\n");
	const exploreLink = `/events/${id}`;

	return (
		<li className={styles.item}>
			<img src={`/${image}`} alt={title} />
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
					<div className={styles.date}>
						<DateIcon />
						<time>{humanReadableDate}</time>
					</div>
					<div className={styles.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<ButtonLike link={exploreLink}>
						<span>Explore event</span>
						<span className={styles.icon}>
							<ArrowRightIcon />
						</span>
					</ButtonLike>
				</div>
			</div>
		</li>
	);
};

export { EventItem };
