import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Text(props) {
	const styleObj = {
		color: props.color
	};
	return <span style={styleObj}> {props.value} </span>;
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hello, <Text color="red" value="Edwin Torres!" />
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
