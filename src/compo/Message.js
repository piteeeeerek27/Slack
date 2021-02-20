import React from "react";
import "../styles/Message.scss";

const Message = ({ message, timestamp, user, userImage }) => {
	return (
		<div className="Message">
			<img src={userImage} alt="" />
			<div className="MessageInfo">
				<h4>
					{user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
				</h4>
				<p>{message}</p>
			</div>
		</div>
	);
};

export default Message;
