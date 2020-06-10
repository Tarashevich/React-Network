import React from 'react';
import x from './Profile.module.scss';
import Post from "./Post/Post";


const Profile = () => {
	return (
		<div className={x.profile}>

			<div className={x.first_column}>
				<div className={x.profile_ava}>
					<h2>Taras Shevchenko</h2>
					<img src="https://sun9-59.userapi.com/c845217/v845217117/1260ed/5j7_AHcXvS4.jpg?ava=1" alt=""/></div>
				<div className={x.profile_information}>
					<h2>Information:</h2>
					<p>Data of Birth: 12 02 2000</p>
					<p>City: Kiev</p>
					<p>Education: MNTU</p>
					<p>Web-site: unknown</p>
				</div>
			</div>
			<div className={x.second_column}>
				<div className={x.profile_projects}>
					<div className={x.profile_projects_mainText}><h2>Project Name</h2></div>
					<div className={x.profile_projects_images}>
						<img src="https://i.ytimg.com/vi/pKESb8btHM4/maxresdefault.jpg" alt=""/>
						<img src="https://i.ytimg.com/vi/pKESb8btHM4/maxresdefault.jpg" alt=""/>
					</div>
				</div>


				<div className={x.profile_posts}>
					<h2>Posts</h2>
					<Post postText='Hi, how are you?' likeCount='32k'/>
					<Post postText='It is my first page!!!' likeCount='121k'/>
					<Post postText='Yeeeeeeeesss!!!' likeCount='10m'/>
				</div>
			</div>

		</div>
	);
};

export default Profile;