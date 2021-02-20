import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./compo/Header";
import Sidebar from "./compo/Sidebar";
import Chat from "./compo/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./compo/Login";
import Spinner from "react-spinkit";

const App = () => {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return (
			<div className="AppLoading">
				<div className="AppLoadingContent">
					<img
						src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
						alt="logoLoad"
					/>
					<Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
				</div>
			</div>
		);
	}

	return (
		<div className="App">
			<Router>
				{!user ? (
					<Login />
				) : (
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
				)}
			</Router>
		</div>
	);
};

export default App;
