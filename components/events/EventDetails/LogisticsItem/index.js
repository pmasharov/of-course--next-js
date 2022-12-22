import styles from "./styles.module.css";

function LogisticsItem(props) {
	const { icon: Icon } = props;

	return (
		<li className={styles.item}>
			<span className={styles.icon}>
				<Icon />
			</span>
			<span className={styles.content}>{props.children}</span>
		</li>
	);
}

export { LogisticsItem };
