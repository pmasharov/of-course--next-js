import Link from "next/link";
import styles from "./styles.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href={"/"}>Events</Link>
			</div>
			<nav className={styles.navigation}>
				<ul>
					<li>
						<Link href={"/events"}>All events</Link>
					</li>
					<li>
						<Link href={"/"}></Link>
					</li>
					<li>
						<Link href={"/"}></Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Header };
