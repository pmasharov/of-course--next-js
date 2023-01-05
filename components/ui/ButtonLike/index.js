import Link from "next/link";
import styles from "./styles.module.css";

const ButtonLike = ({ link, onClick, children }) => {
	if (link) {
		return (
			<Link className={styles.btn} href={link}>
				{children}
			</Link>
		);
	}

	return (
		<button {...(onClick && { onClick })} className={styles.btn}>
			{children}
		</button>
	);
};

export { ButtonLike };
