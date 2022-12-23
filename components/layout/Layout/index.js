import { Header } from "@components/layout/Header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export { Layout };
