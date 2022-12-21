import { useRouter } from "next/router";

const ClientProjectPage = () => {
	const {
		query: { clientId, projectId },
	} = useRouter();

	return (
		<div>
			<h1>
				Project "{projectId}" for client "{clientId}"
			</h1>
		</div>
	);
};

export default ClientProjectPage;
