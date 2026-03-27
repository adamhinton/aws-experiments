import { useState, useEffect } from "react";
import "./index.css";

function App() {
	const [count, setCount] = useState(0);
	const [apiData, setApiData] = useState(null);

	useEffect(() => {
		// Example API call to a public API
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((data) => setApiData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<div style={{ textAlign: "center", padding: "20px" }}>
			<h1>AWS Frontend Experiments</h1>
			<p>
				This is a simple frontend-only project for experimenting with AWS
				integrations.
			</p>
			<p>... How did you even find this page?</p>

			<div style={{ margin: "20px 0" }}>
				<h2>Counter</h2>
				<button onClick={() => setCount(count + 1)}>Count is {count}</button>
			</div>

			<div style={{ margin: "20px 0" }}>
				<h2>API Call Example</h2>
				{apiData ? (
					<pre>{JSON.stringify(apiData, null, 2)}</pre>
				) : (
					<p>Loading data...</p>
				)}
			</div>
		</div>
	);
}

export default App;
