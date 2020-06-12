import React from 'react'
import x from './Header.module.scss'
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import Account from "./Account/Account";


const Header = () => {

	return(
		<div className={x.header}>

			<Logo />

			<h2>React-NetWork</h2>

			<NavBar />

			< Account/>
		</div>
	)
};

export default Header