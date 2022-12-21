import { useRouter } from "next/router";

const ClientProjectsPage = () => {
	const {
		query: { clientId },
	} = useRouter();

	return (
		<div>
			<h1>The list of project for client "{clientId}"</h1>
		</div>
	);
};
export default ClientProjectsPage;
