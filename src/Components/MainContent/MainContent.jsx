import React from 'react';
import x from './MainContent.module.scss';
import SideBar from "./SideBar/SideBar";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";

const MainContent = () => {
	return (
		<div className={x.mainContent}>
			<SideBar/>
			<Route path="/Profile"><Profile/></Route>
			<Route path="/Messages"><Messages/></Route>
		</div>
	);
};

export default MainContent;