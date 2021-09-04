import { UserMenu } from 'components/userMenu/UserMenu';
import React, { useRef, useState } from 'react';
import useOnClickOutside from 'utils/hooks/useOnClickOutside';
import { INavRoute } from 'utils/interfaces/route';
import Burger from './burger/Burger';
import LeftMenu from './menu/LeftMenu';
import './Mobile.scss';

interface IProps {
	routes: INavRoute[];
	username: string;
	profilePic: any;
	userMenuRoutes: INavRoute[];
}

const Mobile = ({ routes, userMenuRoutes, username, profilePic }: IProps) => {
	const [leftMenuOpen, setLeftMenuOpen] = useState<boolean>(false);
	const [rightMenuOpen, setRightMenuOpen] = useState<boolean>(false);

	const triggerMenu = () => {
		setRightMenuOpen(!rightMenuOpen);
	};

	const hideBothMenus = () => {
		setRightMenuOpen(false);
		setLeftMenuOpen(false);
	};

	const node = useRef(null);
	useOnClickOutside(node, () => hideBothMenus());

	return (
		<div className="navigationBar loggedIn mobile">
			<div className="headerContent">
				<div className="navMenu">
					<Burger open={leftMenuOpen} setOpen={setLeftMenuOpen} />
					<LeftMenu open={leftMenuOpen} setOpen={setLeftMenuOpen} routes={routes} />
				</div>
				<div className="userMenu">
					<span className="username">{username}</span>
					<img className="profilePicture" src={profilePic} alt="profilePicture" onClick={triggerMenu} />
				</div>
				<UserMenu open={rightMenuOpen} setOpen={setRightMenuOpen} routes={userMenuRoutes} />
			</div>
		</div>
	);
};

export { Mobile };
