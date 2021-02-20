import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import "../styles/ChatInput.scss";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId, chatRef }) => {
	const [inpt, setInpt] = useState("");
	const [user] = useAuthState(auth);

	const sendMsg = (e) => {
		e.preventDefault();

		if (!channelId) {
			return false;
		}

		db.collection("rooms").doc(channelId).collection("messages").add({
			message: inpt,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: user.displayName,
			userImage: user.photoURL,
		});

		chatRef.current.scrollIntoView({
			behavior: "smooth",
		});

		setInpt("");
	};

	return (
		<div className="ChatInput">
			<form>
				<input
					value={inpt}
					onChange={(e) => setInpt(e.target.value)}
					placeholder={`Message #${channelName}`}
				/>
				<Button hidden type="submit" onClick={sendMsg}>
					SEND
				</Button>
			</form>
		</div>
	);
};

export default ChatInput;
