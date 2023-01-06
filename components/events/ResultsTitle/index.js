import { ButtonLike } from "@components/ui/ButtonLike";
import styles from "./styles.module.css";

function ResultsTitle({ date }) {
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	return (
		<section className={styles.title}>
			<h1>Events in {humanReadableDate}</h1>
			<ButtonLike link="/events">Show all events</ButtonLike>
		</section>
	);
}

export { ResultsTitle };
