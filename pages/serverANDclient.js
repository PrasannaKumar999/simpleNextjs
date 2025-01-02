import React, { useEffect, useState } from "react";

export async function getServerSideProps(context) {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const initialData = await res.json();

	return {
		props: { initialData },
	};
}

export default function clientANDserver({ initialData }) {
	const [clientData, setClientData] = useState(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setClientData(data));
	}, []);

	return (
		<div>
			<h1>Mixed Rendering</h1>
			<div style={{ display: "flex" }}>
				<div>
					<h2>Server-Side Data:</h2>
					<pre>{JSON.stringify(initialData, null, 2)}</pre>
				</div>
				<div>
					<h2>Client-Side Data:</h2>
					{clientData ? (
						<pre>{JSON.stringify(clientData, null, 2)}</pre>
					) : (
						<div>Loading...</div>
					)}
				</div>
			</div>
		</div>
	);
}
