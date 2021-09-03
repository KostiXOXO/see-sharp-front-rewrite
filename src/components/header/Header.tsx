import React from 'react';
import './Header.scss';
import { HeaderLoggedIn, HeaderNotLoggedIn, HeaderMobile } from '.';
import useWindowDimensions from 'utils/hooks/useWindowDimension';
import { useToken } from 'utils/hooks/useAuthToken';

const Header = () => {
	const { winWidth } = useWindowDimensions();
	const isMobileView = winWidth < 720;
	const [token] = useToken();
	const isUserLoggedIn = !!token;

	return isUserLoggedIn ? isMobileView ? <HeaderMobile /> : <HeaderLoggedIn /> : <HeaderNotLoggedIn />;
};

export { Header };
