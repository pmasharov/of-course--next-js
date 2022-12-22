import Link from "next/link";
import styles from "./styles.module.css";

const ButtonLike = ({ link, children }) => (
	<Link className={styles.btn} href={link}>
		{children}
	</Link>
);

export { ButtonLike };

// Oh Max, what's wrong with you? You wrapped Link with HOC and named as "Button"? What will you do when you need a component with a real button inside? "MyButton"?
