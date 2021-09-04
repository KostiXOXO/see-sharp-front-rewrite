import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledMenu } from './UserMenu.styled';
import { theme } from 'styles/theme';
import { INavRoute } from 'utils/interfaces/route';
import { logOutWithGoogle } from './logOutWithGoogle';
import { useGoogleLogout } from 'react-google-login';
import { clientId } from 'utils/configs/google';
import { NavMenu } from '../navMenu/NavMenu';

interface MenuProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	routes: INavRoute[];
}

const UserMenu = ({ open, setOpen, routes }: MenuProps): JSX.Element => {
	const { onLogoutSuccess, onFailure } = logOutWithGoogle();

	const { signOut } = useGoogleLogout({
		clientId,
		onFailure,
		onLogoutSuccess,
	});

	const handleLogout = () => {
		try {
			signOut();
		} catch {
			console.log('Couldnt google logout');
		}
	};

	return (
		<StyledMenu open={open} onClick={() => setOpen(!open)} theme={theme} aria-hidden={!open}>
			<NavMenu routes={routes} />
			<NavLink to="/login" replace={location.pathname === '/login'} onClick={handleLogout}>
				<div className="menu__item__link">Sign Out</div>
			</NavLink>
		</StyledMenu>
	);
};

export { UserMenu };
