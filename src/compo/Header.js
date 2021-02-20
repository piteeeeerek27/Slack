import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Header.scss";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
	return (
		<div className="Header">
			<div className="HeaderLeft">
				<Avatar className="HeaderAvatar" />
				<AccessTimeIcon />
			</div>

			<div className="HeaderSearch">
				<SearchIcon />
				<input placeholder="Search" />
			</div>

			<div className="HeaderRight">
				<HelpOutlineIcon />
			</div>
		</div>
	);
};

export default Header;
