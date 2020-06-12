import React from 'react'
import x from './Main.module.scss'
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";

const Main = () => {
	return(
		<div className={x.main}>
			<Route path={'/Profile'}>< Profile/></Route>
		</div>
	)
};

export default Main