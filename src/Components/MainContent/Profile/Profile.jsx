import React from 'react';
import x from './Profile.module.scss';


const Profile = () => {
	return (
		<div className={x.profile}>
			<div className={x.profile_first}>
				<div className={x.profile_ava}><img
					src="https://sun9-59.userapi.com/c845217/v845217117/1260ed/5j7_AHcXvS4.jpg?ava=1" alt=""/></div>
				<div className={x.profile_information}>
					<h2>Information:</h2>
					<h2>Taras Shevchenko</h2>
					<p>Data of Birth: 12 02 2000</p>
					<p>City: Kiev</p>
					<p>Education: Knuba</p>
					<p>Web-site: unknown</p>
				</div>
				<div className={x.profile_projects}>
					<h2>Project Name</h2>
					<img src="https://i.ytimg.com/vi/pKESb8btHM4/maxresdefault.jpg" alt=""/>
					<img src="https://i.ytimg.com/vi/pKESb8btHM4/maxresdefault.jpg" alt=""/>
				</div>
			</div>
			<div className={x.profile_posts}>
				<h2>Posts</h2>
				<div>first post</div>
			</div>

		</div>
	);
};

export default Profile;