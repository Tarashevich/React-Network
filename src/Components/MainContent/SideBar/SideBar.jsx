import React from 'react';
import x from './SideBar.module.scss';
import {Link} from "react-router-dom";

const SideBar = () => {
	return (
		<div className={x.sideBar}>

			<Link className={x.sideBar_item}>Profile</Link>
			<Link className={x.sideBar_item}>Messages</Link>
			<Link className={x.sideBar_item}>News</Link>
			<Link className={x.sideBar_item}>My Projects</Link>
			<Link className={x.sideBar_item}>Settings</Link>

		</div>
	);
}

export default SideBar;