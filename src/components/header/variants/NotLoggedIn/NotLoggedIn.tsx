import React, { useEffect, useState } from 'react';
import logo from 'assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { BaseButton } from 'components/baseButton';
import { useHistory } from 'react-router-dom';
import './NotLoggedIn.scss';

const NotLoggedIn = () => {
	const { location } = useHistory();
	const [isHome, setIsHome] = useState<boolean>(location.pathname === '/');

	useEffect(() => {
		console.log(location.pathname);
		setIsHome(location.pathname === '/');
	}, [location.pathname]);

	return (
		<div className={['navigationBar notloggedIn', isHome ? 'home' : ''].join(' ')}>
			<div className="headerContent">
				<NavLink className="linkItem" to="/">
					<img className="logo" src={logo} />
				</NavLink>
				<div className="headerContentNotLogged">
					<BaseButton text="Sign In" linkTo="/login" />
				</div>
			</div>
		</div>
	);
};

export { NotLoggedIn };
