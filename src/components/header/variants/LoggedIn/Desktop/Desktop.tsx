import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { INavRoute } from 'utils/interfaces/route';
import './Desktop.scss';
import logo from 'assets/logo.svg';
import useOnClickOutside from 'utils/hooks/useOnClickOutside';
import { NavMenu } from 'components/navMenu/NavMenu';
import { UserMenu } from 'components/userMenu/UserMenu';

interface IProps {
	routes: INavRoute[];
	username: string;
	profilePic: any;
	userMenuRoutes: INavRoute[];
}

const Desktop = ({ routes, userMenuRoutes, username, profilePic }: IProps) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const triggerMenu = () => {
		setMenuOpen(!menuOpen);
		console.log('cock');
	};

	const node = useRef(null);
	useOnClickOutside(node, () => setMenuOpen(false));

	return (
		<div className="navigationBar loggedIn desktop">
			<div className="headerContent">
				<div className="navMenu">
					<NavLink className="linkItem" to="/">
						<img className="logo" src={logo} />
					</NavLink>

					<NavMenu routes={routes} />
				</div>

				<div className="userMenu">
					<span className="username">{username}</span>
					<img className="profilePicture" src={profilePic} alt="profilePicture" onClick={triggerMenu} />
				</div>
				<UserMenu open={menuOpen} setOpen={setMenuOpen} routes={userMenuRoutes} />
			</div>
		</div>
	);
};

export { Desktop };
