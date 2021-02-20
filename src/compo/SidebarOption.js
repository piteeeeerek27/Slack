import React from "react";
import "../styles/SidebarOption.scss";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { goInRoom } from "../features/channelSlice";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
	const dispatch = useDispatch();

	const addChannel = () => {
		const channelName = prompt("Enter the channel name");

		if (channelName) {
			db.collection("rooms").add({
				name: channelName,
			});
		}
	};

	const selectChannel = () => {
		if (id) {
			dispatch(
				goInRoom({
					channelId: id,
				}),
			);
		}
	};

	return (
		<div
			className="SidebarOption"
			onClick={addChannelOption ? addChannel : selectChannel}>
			{Icon && (
				<Icon
					fontSize="small"
					style={{
						padding: 10,
					}}
				/>
			)}
			{Icon ? (
				<h3>{title}</h3>
			) : (
				<h3 className="SidebarOptionChannel">
					<span>#</span> {title}
				</h3>
			)}
		</div>
	);
};

export default SidebarOption;
