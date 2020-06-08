import React from 'react';
import x from './Header.module.scss';

const Header = () => {
	return (
		<header className={x.header}>
			<img className={x.logo} src="https://cdn.worldvectorlogo.com/logos/react-2.svg	" alt=""/>
			<h1>React-NetWork</h1>
		</header>
	);
};

export default Header;