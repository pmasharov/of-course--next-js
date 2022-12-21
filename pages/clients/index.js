import Link from "next/link";

const ClientPage = () => {
	const clients = [
		{ id: "first", name: "First" },
		{ id: "second", name: "Second" },
	];
	return (
		<div>
			<h1>The clients page</h1>
			<ul>
				{clients.map((client) => (
					<li key={client.id}>
						{/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
						<Link
							href={{
								pathname: "/clients/[clientId]",
								query: { clientId: "first" },
							}}
						>
							{client.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ClientPage;
