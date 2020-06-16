import React from 'react'
import x from './Profile.module.scss'
import Information from "./Information/Information";
import TabsComponent from "./TabsComponent/TabsComponent";

const Profile = () => {
	return(
		<div className={x.profile}>
			< Information/>
			< TabsComponent />
		</div>
	)
};

export default Profile