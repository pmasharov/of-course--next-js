import Link from "next/link";

const NotFoundPage = () => {
	return (
		<div>
			<h1>Page not found</h1>
			<Link href={"/"}>Go to homepage</Link>
		</div>
	);
};

export default NotFoundPage;
