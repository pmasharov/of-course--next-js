import { useRouter } from "next/router";

const ClientProjectsPage = () => {
	const router = useRouter();

	const goToProject = () => {
		// router.push(`/clients/${router.query.clientId}/firstProject`)
		router.push({
			pathname: "/clients/clientId",
			query: { projectId: "firstProject" },
		});
	};

	return (
		<div>
			<h1>The list of project for client "{router.query.clientId}"</h1>
			<button onClick={goToProject}>Load project</button>
		</div>
	);
};
export default ClientProjectsPage;
