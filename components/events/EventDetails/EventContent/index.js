import styles from "./styles.module.css";

function EventContent(props) {
	return <section className={styles.content}>{props.children}</section>;
}

export { EventContent };
