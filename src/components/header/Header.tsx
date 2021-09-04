import React from 'react';
import { HeaderLoggedIn, HeaderNotLoggedIn } from '.';
import './Header.scss';

const Header = ({ isUserLoggedIn }: { isUserLoggedIn: boolean }) => {
	return <nav>{isUserLoggedIn ? <HeaderLoggedIn /> : <HeaderNotLoggedIn />}</nav>;
};

export { Header };
