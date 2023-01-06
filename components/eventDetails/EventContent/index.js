import styles from "./styles.module.css";

function EventContent({ children }) {
	return <section className={styles.content}>{children}</section>;
}

export { EventContent };
