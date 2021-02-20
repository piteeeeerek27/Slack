import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import "../styles/Login.scss";

const Login = () => {
	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};

	return (
		<div className="Login">
			<div className="LoginStuff">
				<img
					src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
					alt="logo"
				/>
				<h1>Sign in</h1>
				<p>best.slack.com</p>
				<Button type="submit" onClick={signIn}>
					Sign in
				</Button>
			</div>
		</div>
	);
};

export default Login;
