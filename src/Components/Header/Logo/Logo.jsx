import React from 'react'
import x from './Logo.module.scss'
import logo from "./Images/React_logo.png"


const Logo = () => {

	return(
		<div className={x.logo}>
			<img src={logo} alt=""/>
		</div>
	)
};

export default Logo