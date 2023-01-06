import styles from "./styles.module.css";

function ErrorAlert({ children }) {
	return <div className={styles.alert}>{children}</div>;
}

export { ErrorAlert };
