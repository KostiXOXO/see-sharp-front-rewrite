import React from 'react';
import logo from 'assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { BaseButton } from 'components/baseButton';
import { useRecoilValue } from 'recoil';
import { userLoginData } from 'utils/store/atoms';
import { useIsHome } from 'utils/hooks/useIsHome';
import './NotLoggedIn.scss';

const NotLoggedIn = () => {
	const { isLoggedIn } = useRecoilValue(userLoginData);
	const { isHome } = useIsHome();

	return (
		<div className={['navigationBar notloggedIn', !isLoggedIn && isHome ? 'home' : ''].join(' ')}>
			<div className="headerContent">
				<NavLink className="linkItem" to="/">
					<img className="logo" src={logo} />
				</NavLink>
				<div className="headerContentNotLogged">
					<BaseButton text="Sign In" linkTo="/login" style="outlined" />
				</div>
			</div>
		</div>
	);
};

export { NotLoggedIn };
