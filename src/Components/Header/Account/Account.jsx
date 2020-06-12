import React from 'react'
import x from './Account.module.scss'
import image from "./Images/account_image.jpeg"
import Avatar from "@material-ui/core/Avatar";

const Account = () => {
	return(

			<div className={x.account}>
				<Avatar src={image} className={x.account_avatar} />
				<div className={x.account_text}><p>Hi,</p></div>
				<div className={x.account_name}><h3>Tarashevich</h3></div>
			</div>
	)
};

export default Account