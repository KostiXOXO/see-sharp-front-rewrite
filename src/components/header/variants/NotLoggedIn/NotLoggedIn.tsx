import React from 'react';
import './NotLoggedIn.scss';
import logo from 'assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { BaseButton } from 'components/baseButton';
const NotLoggedIn = () => {
	return (
		<div className="navigationBar notloggedIn">
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
