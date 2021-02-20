import React, { useEffect, useRef } from "react";
import "../styles/Chat.scss";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import { selectChannelId } from "../features/channelSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

const Chat = () => {
	const chatRef = useRef(null);
	const channelId = useSelector(selectChannelId);
	const [channelDetails] = useDocument(
		channelId && db.collection("rooms").doc(channelId),
	);
	const [channelMsg, loading] = useCollection(
		channelId &&
			db
				.collection("rooms")
				.doc(channelId)
				.collection("messages")
				.orderBy("timestamp", "desc"),
	);

	useEffect(() => {
		chatRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, [channelId, loading]);

	const channelName = channelDetails?.data().name;

	return (
		<div className="Chat">
			<>
				<div className="ChatHeader">
					<div className="ChatHeaderLeft">
						<h4>
							<strong>#{channelName}</strong>
						</h4>
						<StarBorderIcon />
					</div>
					<div className="ChatHeaderRight">
						<p>
							<InfoOutlinedIcon /> Details
						</p>
					</div>
				</div>
				<div>
					{channelMsg?.docs.map((doc) => {
						const { message, timestamp, user, userImage } = doc.data();

						return (
							<Message
								key={doc.id}
								message={message}
								timestamp={timestamp}
								user={user}
								userImage={userImage}
							/>
						);
					})}
					<div className="ChatBottom" ref={chatRef} />
				</div>

				<ChatInput
					chatRef={chatRef}
					channelName={channelName}
					channelId={channelId}
				/>
			</>
		</div>
	);
};

export default Chat;
