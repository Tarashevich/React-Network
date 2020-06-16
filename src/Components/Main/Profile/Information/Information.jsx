import React from 'react'
import x from './Information.module.scss'
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import image from "../../../Header/Account/Images/account_image.jpeg"

const Information = () => {
	return(
		<div className={x.information}>
			<div className={x.information_avatar}>
				<Button variant="contained" color="primary" className={x.information_button}>Edit</Button>
				<Avatar className={x.information_image} src={image} />
				<Button variant="outlined" color="primary" className={x.information_button}>Share</Button>
			</div>

			<h2>Taras Shevchenko</h2>

			<h3>Kiev/Ukraine</h3>

			<div className={x.information_statistics}>

				<div className={x.information_statistics_items}>Posts <div className={x.number}>0</div></div>

				<div className={x.information_statistics_items}>My projects <div className={x.number}>0</div></div>

				<div className={x.information_statistics_items}>Following <div className={x.number}>0</div></div>

				<div className={x.information_statistics_items}>Followers <div className={x.number}>0</div></div>

			</div>
		</div>
	)
};

export default Information