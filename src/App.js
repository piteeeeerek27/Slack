import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./compo/Header";
import Sidebar from "./compo/Sidebar";
import Chat from "./compo/Chat";

const App = () => {
	return (
		<div className="App">
			<Router>
				<>
					<Header />
					<div className="AppBody">
						<Sidebar />
						<Switch>
							<Route path="/" exact>
								<Chat />
							</Route>
						</Switch>
					</div>
				</>
			</Router>
		</div>
	);
};

export default App;
