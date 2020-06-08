import React from 'react';
import x from './MainContent.module.scss';
import SideBar from "./SideBar/SideBar";
import Profile from "./Profile/Profile";

const MainContent = () => {
	return (
		<div className={x.mainContent}>
			<SideBar/>
			<Profile/>
		</div>
	);
};

export default MainContent;