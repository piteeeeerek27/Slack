import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./compo/Home";

const App = () => {
	return (
		<div className="App">
			<h1>App</h1>
			<Router>
				<>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
					</Switch>
				</>
			</Router>
		</div>
	);
};

export default App;
