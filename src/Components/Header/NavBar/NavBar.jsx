import React from 'react'
import x from './NavBar.module.scss'
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


const NavBar = () => {

	return(
			<div className={x.navBar}>
				<NavLink className={x.navBar_item} to={"/Profile"}><Button  variant="contained" color="primary">Profile</Button></NavLink>
				<NavLink className={x.navBar_item} to={"/Messages"}><Button variant="contained" color="primary">Messages</Button></NavLink>
				<NavLink className={x.navBar_item} to={"/MyProjects"}><Button variant="contained" color="primary">My Projects</Button></NavLink>
				<NavLink className={x.navBar_item} to={"/News"}><Button variant="contained" color="primary">News</Button></NavLink>
				<NavLink className={x.navBar_item} to={"/Settings"}><Button variant="contained" color="primary">Settings</Button></NavLink>
			</div>
	)
};

export default NavBar