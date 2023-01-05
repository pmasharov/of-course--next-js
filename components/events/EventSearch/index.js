import { useRef } from "react";
import { ButtonLike } from "@components/ui/ButtonLike";
import styles from "./styles.module.css";

const EventSearch = ({ onSearch }) => {
	const yearRef = useRef();
	const monthRef = useRef();

	const findEvents = (event) => {
		event.preventDefault();

		const date = {
			year: yearRef.current.value,
			month: monthRef.current.value,
		};

		onSearch(date);
	};

	return (
		<form className={styles.form} onSubmit={findEvents}>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor="year">Year</label>
					<select ref={yearRef} id="year">
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
				</div>
				<div className={styles.control}>
					<label htmlFor="month">Year</label>
					<select ref={monthRef} id="month">
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">June</option>
						<option value="5">July</option>
						<option value="6">April</option>
						<option value="7">May</option>
						<option value="8">August</option>
						<option value="9">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
				</div>
			</div>
			<ButtonLike>Find events</ButtonLike>
		</form>
	);
};

export { EventSearch };
