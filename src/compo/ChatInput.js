import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { db } from "../firebase";
import "../styles/ChatInput.scss";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId, chatRef }) => {
	const [inpt, setInpt] = useState("");

	const sendMsg = (e) => {
		e.preventDefault();

		if (!channelId) {
			return false;
		}

		db.collection("rooms").doc(channelId).collection("messages").add({
			message: inpt,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: "piter",
			userImage: "https://www.wrp.pl/wp-content/uploads/2021/01/bill-gates.jpg",
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
