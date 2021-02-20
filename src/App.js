import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./compo/Header";

const App = () => {
	return (
		<div className="App">
			<Router>
				<>
					<Switch>
						<Route path="/" exact>
							<Header />
						</Route>
					</Switch>
				</>
			</Router>
		</div>
	);
};

export default App;
