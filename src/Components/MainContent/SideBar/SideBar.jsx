import React from 'react';
import x from './SideBar.module.scss';
import {NavLink} from "react-router-dom";

const SideBar = () => {
	return (
		<div className={x.sideBar}>

			<NavLink to={'/Profile'} activeClassName={x.active} className={x.sideBar_item}>Profile</NavLink>
			<NavLink to={'/Messages'} activeClassName={x.active} className={x.sideBar_item}>Messages</NavLink>
			<NavLink to={'/News'} activeClassName={x.active} className={x.sideBar_item}>News</NavLink>
			<NavLink to={'/My Projects'} activeClassName={x.active} className={x.sideBar_item}>My Projects</NavLink>
			<NavLink to={'/Settings'} activeClassName={x.active} className={x.sideBar_item}>Settings</NavLink>

		</div>
	);
};

export default SideBar;