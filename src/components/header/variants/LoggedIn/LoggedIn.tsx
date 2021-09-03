import React from 'react';
import useWindowDimensions from 'utils/hooks/useWindowDimension';
import { HeaderMobile } from 'components/header';
import { HeaderDesktop } from './Desktop';
import { routes } from 'components/header/components/routes';
import './LoggedIn.scss';
import logo from 'assets/logo.svg';
const LoggedIn = () => {
	const { winWidth } = useWindowDimensions();
	const isMobile = winWidth < 720;

	const username = 'The Cock';
	const profilePic = logo;
	const userMenuRoutes = [{ path: 'cock', text: 'cock' }];

	return isMobile ? (
		<HeaderMobile routes={routes} userMenuRoutes={userMenuRoutes} username={username} profilePic={profilePic} />
	) : (
		<HeaderDesktop routes={routes} userMenuRoutes={userMenuRoutes} username={username} profilePic={profilePic} />
	);
};

export { LoggedIn };
